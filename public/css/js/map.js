mapboxgl.accessToken = mapboxToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
        )
    )
    .addTo(map);


mapboxgl.accessToken = mapboxToken;

// // Check whether geometry and coordinates exist
// if (
//     !listing.geometry ||
//     !listing.geometry.coordinates ||
//     listing.geometry.coordinates.length !== 2
// ) {
//     console.error("Invalid or missing coordinates:", listing);

//     document.getElementById("map").innerHTML =
//         "<p>Map location is not available for this listing.</p>";
// } else {

//     const map = new mapboxgl.Map({
//         container: "map",
//         style: "mapbox://styles/mapbox/streets-v12",
//         center: listing.geometry.coordinates,
//         zoom: 9,
//     });

//     const marker = new mapboxgl.Marker({ color: "red" })
//         .setLngLat(listing.geometry.coordinates)
//         .setPopup(
//             new mapboxgl.Popup({ offset: 25 }).setHTML(
//                 `<h4>${listing.title}</h4>
//                  <p>Exact Location will be provided after booking</p>`
//             )
//         )
//         .addTo(map);
// }