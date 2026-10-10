const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    category: "Trending",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
  },
  {
    title: "Modern Loft in Downtown",
    category: "Iconic Cities",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Retreat",
    category: "Mountains",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Historic Villa in Tuscany",
    category: "Farms",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Secluded Treehouse Getaway",
    category: "Camping",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6784, 45.5152] },
  },
  {
    title: "Beachfront Paradise",
    category: "Trending",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
  },
  {
    title: "Rustic Cabin by the Lake",
    category: "Camping",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
  },
  {
    title: "Luxury Penthouse with City Views",
    category: "Iconic Cities",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    category: "Mountains",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.228, 46.0962] },
  },
  {
    title: "Safari Lodge in the Serengeti",
    category: "Trending",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] },
  },
  {
    title: "Historic Canal House",
    category: "Iconic Cities",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.9041, 52.3676] },
  },
  {
    title: "Private Island Retreat",
    category: "Boats",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.4419, -18.1416] },
  },
  {
    title: "Charming Cottage in the Cotswolds",
    category: "Farms",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.8433, 51.833] },
  },
  {
    title: "Historic Brownstone in Boston",
    category: "Iconic Cities",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] },
  },
  {
    title: "Beachfront Bungalow in Bali",
    category: "Boats",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Mountain View Cabin in Banff",
    category: "Mountains",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
  },
  {
    title: "Art Deco Apartment in Miami",
    category: "Iconic Cities",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] },
  },
  {
    title: "Tropical Villa in Phuket",
    category: "Boats",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3923, 7.8804] },
  },
  {
    title: "Historic Castle in Scotland",
    category: "Castles",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 57.12] },
  },
  {
    title: "Desert Oasis in Dubai",
    category: "Domes",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
  },
  {
    title: "Rustic Log Cabin in Montana",
    category: "Camping",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] },
  },
  {
    title: "Beachfront Villa in Greece",
    category: "Boats",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3289, 37.4467] },
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    category: "Camping",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0907, 9.9281] },
  },
  {
    title: "Historic Cottage in Charleston",
    category: "Castles",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-79.9311, 32.7765] },
  },
  {
    title: "Modern Apartment in Tokyo",
    category: "Iconic Cities",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    category: "Camping",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.5724, 43.1939] },
  },
  {
    title: "Luxury Villa in the Maldives",
    category: "Boats",
    description: "Indulge in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] },
  },
  {
    title: "Ski Chalet in Aspen",
    category: "Mountains",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Secluded Beach House in Costa Rica",
    category: "Boats",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0907, 9.9281] },
  },
  
  {
    title: "Luxury Beach Villa in Goa",
    description: "Relax in a beautiful beach villa with stunning coastal views.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      filename: "listingimage"
    },
    price: 8500,
    location: "Goa",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [73.8278, 15.4909] }
  },
  {
    title: "Mountain Cabin in Manali",
    description: "Enjoy peaceful mountain views and fresh air in this cozy cabin.",
    image: {
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
      filename: "listingimage"
    },
    price: 4500,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] }
  },
  {
    title: "City Apartment in Mumbai",
    description: "Stay close to shopping, restaurants, and famous city attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      filename: "listingimage"
    },
    price: 5200,
    location: "Mumbai",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Farmhouse Stay in Jaipur",
    description: "Experience a relaxing countryside stay surrounded by greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      filename: "listingimage"
    },
    price: 3800,
    location: "Jaipur",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Royal Heritage Fort Stay",
    description: "Discover historic architecture and a royal atmosphere.",
    image: {
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
      filename: "listingimage"
    },
    price: 6800,
    location: "Jaisalmer",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [70.9083, 26.9157] }
  },
  {
    title: "Lakeside Camping Retreat",
    description: "Enjoy a quiet outdoor getaway beside a beautiful lake.",
    image: {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d",
      filename: "listingimage"
    },
    price: 1800,
    location: "Nainital",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [79.4636, 29.3803] }
  },
  {
    title: "Desert Dome Escape",
    description: "Experience a unique dome stay beneath the desert sky.",
    image: {
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      filename: "listingimage"
    },
    price: 4200,
    location: "Jaisalmer",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [70.9024, 26.9157] }
  },
  {
    title: "Houseboat Stay in Srinagar",
    description: "Relax on a traditional houseboat surrounded by mountain scenery.",
    image: {
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      filename: "listingimage"
    },
    price: 3500,
    location: "Srinagar",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
  },
  {
    title: "Arctic Inspired Snow Retreat",
    description: "Enjoy a cozy winter-themed escape in a snowy mountain setting.",
    image: {
      url: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a",
      filename: "listingimage"
    },
    price: 6000,
    location: "Gulmarg",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [74.3805, 34.0484] }
  },
  {
    title: "Cozy Room in Bengaluru",
    description: "A comfortable room ideal for travelers exploring the city.",
    image: {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      filename: "listingimage"
    },
    price: 2200,
    location: "Bengaluru",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Beach Cottage in Kerala",
    description: "Unwind in a peaceful cottage near the Arabian Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "listingimage"
    },
    price: 4000,
    location: "Kovalam",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [76.9789, 8.4004] }
  },
  {
    title: "Forest Treehouse in Coorg",
    description: "Escape into nature in a treehouse surrounded by lush forests.",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      filename: "listingimage"
    },
    price: 3200,
    location: "Coorg",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [75.7382, 12.3375] }
  },
  {
    title: "Hilltop Cottage in Ooty",
    description: "Wake up to beautiful hills and cool weather in this cottage.",
    image: {
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
      filename: "listingimage"
    },
    price: 2900,
    location: "Ooty",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [76.6950, 11.4064] }
  },
  {
    title: "Heritage Home in Udaipur",
    description: "Explore historic streets and enjoy a traditional heritage stay.",
    image: {
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
      filename: "listingimage"
    },
    price: 5000,
    location: "Udaipur",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Luxury Waterfront Stay",
    description: "Enjoy a relaxing waterfront holiday with scenic views.",
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      filename: "listingimage"
    },
    price: 7500,
    location: "Alappuzha",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] }
  }
];

module.exports = { data: sampleListings };