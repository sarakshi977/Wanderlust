
require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data } = require("./init/data");

async function main() {
    const dburl = "mongodb://127.0.0.1:27017/wanderlust";

    await mongoose.connect(dburl);
    console.log("Connected to database");

    // Give uncategorized existing listings a default category.
    const defaultResult = await Listing.updateMany(
        {
            $or: [
                { category: { $exists: false } },
                { category: null },
                { category: "" }
            ]
        },
        {
            $set: { category: "Trending" }
        }
    );

    console.log(
        "Listings given default category:",
        defaultResult.modifiedCount
    );

    // Apply the correct categories from init/data.js
    let updated = 0;

    for (const item of data) {
        if (!item.category) continue;

        const result = await Listing.updateOne(
            { title: item.title },
            { $set: { category: item.category } }
        );

        updated += result.modifiedCount;
    }

    console.log("Sample listings updated:", updated);

    // Show category counts
    const counts = await Listing.aggregate([
        {
            $group: {
                _id: "$category",
                total: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } }
    ]);

    console.log("Listings by category:", counts);

    await mongoose.disconnect();
}

main().catch(async (err) => {
    console.error(err);
    await mongoose.disconnect();
    process.exitCode = 1;
});