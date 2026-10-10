const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({ ...obj, owner: "6ab52103d747e69f07b69d8d"}));
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };


const initDB = async () => {
  const newListings = initData.data.map((obj) => ({
    ...obj,
    owner: "6ab52103d747e69f07b69d8d"
  }));

  for (const listing of newListings) {
    const exists = await Listing.findOne({
      title: listing.title,
      location: listing.location,
      country: listing.country
    });

    if (!exists) {
      await Listing.create(listing);
    }
  }

  console.log("New listings added without deleting existing listings!");
};

initDB()
  .then(() => mongoose.disconnect())
  .catch(async (err) => {
    console.log(err);
    await mongoose.disconnect();
  });

