// const fs = require("fs");
// const resturant=[];
// const image=["first","sec","third","forth","fifth","six","seven","eight","nine","ten"];
// const rest_name = [
//   "The Spice Garden",
//   "Urban Tandoor",
//   "Grill & Chill Bistro",
//   "Ocean Breeze Café",
//   "Royal Curry House",
//   "The Hungry Panda",
//   "Golden Fork Diner",
//   "Saffron Flavors",
//   "Street Eats Hub",
//   "Moonlight Kitchen",
//   "Taste of Tradition",
//   "Fusion Feast",
//   "Curry & Claypot",
//   "The Flavor Factory",
//   "Harvest Table",
//   "Fire & Smoke Grill",
//   "Savory Street",
//   "The Coastal Bite",
//   "Rustic Rasoi",
//   "Heavenly Delights"
// ];
// const food_type=["Indian",
//   "Chinese",
//   "Italian",
//   "Mexican",
//   "Thai",
//   "Japanese",
//   "American",
//   "Mediterranean",
//   "French",
//   "Korean"]
// const delhiLocation = [
//   "Kashi Vishwanath Temple",
//   "Dashashwamedh Ghat",
//   "Manikarnika Ghat",
//   "Assi Ghat",
//   "Ramnagar Fort",
//   "Sarnath",
//   "Tulsi Manas Temple",
//   "Bharat Kala Bhavan Museum",
//   "Banaras Hindu University (BHU)",
//   "Durga Kund Temple"
// ];




// for(let i=0; i<100; i++) {

//     const obj={};
//     obj["image"]=image[Math.floor(Math.random()*10)];
//     obj["name"]=rest_name[Math.floor(Math.random()*20)];
//     obj["rating"]=Math.floor(Math.random()*5+1);
//     obj["food_type"]=food_type[Math.floor(Math.random()*10)];
//     obj["price_for_two"]=Math.floor(Math.random()*(2500-100+1)+100);
//     obj["delhiLocation"]=delhiLocation[Math.floor(Math.random()*10)];
//     obj["distance"]=(Math.random()*10+1).toFixed(1);
//     obj["offer"]=Math.floor(Math.random()*30+1);
//     obj["alcohol"]=Math.random()>0.7;
//     obj["resturant_open_time"]=Math.floor(Math.random()*24);
//     obj["resturanr_close_time"]=(obj["resturant_open_time"]+12)%24;

//     resturant.push(obj);
    
// }


// // console.log(resturant)
// const jsonData = JSON.stringify(resturant, null, 2);

// // Save into file
// fs.writeFileSync("restaurants.json", jsonData);

// console.log(jsonData);





const resturant=[
  {
    "image": "eight",
    "name": "Ocean Breeze Café",
    "rating": 3,
    "food_type": "Mexican",
    "price_for_two": 1378,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "9.7",
    "offer": 11,
    "alcohol": false,
    "resturant_open_time": 2,
    "resturanr_close_time": 14
  },
  {
    "image": "ten",
    "name": "Harvest Table",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 801,
    "delhiLocation": "Durga Kund Temple",
    "distance": "2.4",
    "offer": 6,
    "alcohol": false,
    "resturant_open_time": 22,
    "resturanr_close_time": 10
  },
  {
    "image": "nine",
    "name": "Rustic Rasoi",
    "rating": 4,
    "food_type": "Mediterranean",
    "price_for_two": 2498,
    "delhiLocation": "Assi Ghat",
    "distance": "10.3",
    "offer": 7,
    "alcohol": false,
    "resturant_open_time": 22,
    "resturanr_close_time": 10
  },
  {
    "image": "third",
    "name": "Golden Fork Diner",
    "rating": 4,
    "food_type": "Indian",
    "price_for_two": 123,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "3.0",
    "offer": 24,
    "alcohol": false,
    "resturant_open_time": 12,
    "resturanr_close_time": 0
  },
  {
    "image": "third",
    "name": "Grill & Chill Bistro",
    "rating": 3,
    "food_type": "Japanese",
    "price_for_two": 1850,
    "delhiLocation": "Durga Kund Temple",
    "distance": "5.8",
    "offer": 4,
    "alcohol": false,
    "resturant_open_time": 13,
    "resturanr_close_time": 1
  },
  {
    "image": "ten",
    "name": "The Hungry Panda",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": 2249,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "7.9",
    "offer": 10,
    "alcohol": false,
    "resturant_open_time": 21,
    "resturanr_close_time": 9
  },
  {
    "image": "sec",
    "name": "The Flavor Factory",
    "rating": 2,
    "food_type": "Mexican",
    "price_for_two": 832,
    "delhiLocation": "Sarnath",
    "distance": "7.5",
    "offer": 22,
    "alcohol": false,
    "resturant_open_time": 13,
    "resturanr_close_time": 1
  },
  {
    "image": "ten",
    "name": "Saffron Flavors",
    "rating": 3,
    "food_type": "Japanese",
    "price_for_two": 1884,
    "delhiLocation": "Kashi Vishwanath Temple",
    "distance": "8.1",
    "offer": 5,
    "alcohol": false,
    "resturant_open_time": 19,
    "resturanr_close_time": 7
  },
  {
    "image": "eight",
    "name": "The Flavor Factory",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": 1714,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "6.9",
    "offer": 3,
    "alcohol": false,
    "resturant_open_time": 15,
    "resturanr_close_time": 3
  },
  {
    "image": "fifth",
    "name": "Taste of Tradition",
    "rating": 2,
    "food_type": "Korean",
    "price_for_two": 666,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "5.7",
    "offer": 14,
    "alcohol": false,
    "resturant_open_time": 15,
    "resturanr_close_time": 3
  },
  {
    "image": "third",
    "name": "Grill & Chill Bistro",
    "rating": 3,
    "food_type": "Mediterranean",
    "price_for_two": 2151,
    "delhiLocation": "Sarnath",
    "distance": "8.7",
    "offer": 21,
    "alcohol": false,
    "resturant_open_time": 12,
    "resturanr_close_time": 0
  },
  {
    "image": "fifth",
    "name": "Street Eats Hub",
    "rating": 2,
    "food_type": "Korean",
    "price_for_two": 119,
    "delhiLocation": "Manikarnika Ghat",
    "distance": "5.0",
    "offer": 13,
    "alcohol": true,
    "resturant_open_time": 13,
    "resturanr_close_time": 1
  },
  {
    "image": "forth",
    "name": "Savory Street",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 459,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "3.2",
    "offer": 1,
    "alcohol": false,
    "resturant_open_time": 10,
    "resturanr_close_time": 22
  },
  {
    "image": "first",
    "name": "The Spice Garden",
    "rating": 5,
    "food_type": "Chinese",
    "price_for_two": 1528,
    "delhiLocation": "Manikarnika Ghat",
    "distance": "10.0",
    "offer": 23,
    "alcohol": false,
    "resturant_open_time": 10,
    "resturanr_close_time": 22
  },
  {
    "image": "first",
    "name": "Fusion Feast",
    "rating": 1,
    "food_type": "Thai",
    "price_for_two": 2068,
    "delhiLocation": "Assi Ghat",
    "distance": "10.4",
    "offer": 19,
    "alcohol": true,
    "resturant_open_time": 6,
    "resturanr_close_time": 18
  },
  {
    "image": "forth",
    "name": "Royal Curry House",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 2401,
    "delhiLocation": "Manikarnika Ghat",
    "distance": "9.4",
    "offer": 20,
    "alcohol": false,
    "resturant_open_time": 11,
    "resturanr_close_time": 23
  },
  {
    "image": "nine",
    "name": "The Flavor Factory",
    "rating": 3,
    "food_type": "Korean",
    "price_for_two": 1636,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "4.6",
    "offer": 23,
    "alcohol": false,
    "resturant_open_time": 11,
    "resturanr_close_time": 23
  },
  {
    "image": "eight",
    "name": "Grill & Chill Bistro",
    "rating": 5,
    "food_type": "American",
    "price_for_two": 938,
    "delhiLocation": "Kashi Vishwanath Temple",
    "distance": "7.6",
    "offer": 29,
    "alcohol": false,
    "resturant_open_time": 2,
    "resturanr_close_time": 14
  },
  {
    "image": "seven",
    "name": "Taste of Tradition",
    "rating": 3,
    "food_type": "Thai",
    "price_for_two": 784,
    "delhiLocation": "Ramnagar Fort",
    "distance": "4.1",
    "offer": 7,
    "alcohol": false,
    "resturant_open_time": 19,
    "resturanr_close_time": 7
  },
  {
    "image": "fifth",
    "name": "Fire & Smoke Grill",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 924,
    "delhiLocation": "Ramnagar Fort",
    "distance": "3.3",
    "offer": 5,
    "alcohol": false,
    "resturant_open_time": 0,
    "resturanr_close_time": 12
  },
  {
    "image": "sec",
    "name": "The Coastal Bite",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 2178,
    "delhiLocation": "Kashi Vishwanath Temple",
    "distance": "6.9",
    "offer": 15,
    "alcohol": false,
    "resturant_open_time": 10,
    "resturanr_close_time": 22
  },
  {
    "image": "seven",
    "name": "The Hungry Panda",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": 2404,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "2.4",
    "offer": 18,
    "alcohol": false,
    "resturant_open_time": 8,
    "resturanr_close_time": 20
  },
  {
    "image": "forth",
    "name": "Moonlight Kitchen",
    "rating": 5,
    "food_type": "Chinese",
    "price_for_two": 1989,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "1.8",
    "offer": 10,
    "alcohol": true,
    "resturant_open_time": 4,
    "resturanr_close_time": 16
  },
  {
    "image": "eight",
    "name": "Golden Fork Diner",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 2488,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "2.7",
    "offer": 14,
    "alcohol": false,
    "resturant_open_time": 7,
    "resturanr_close_time": 19
  },
  {
    "image": "fifth",
    "name": "Royal Curry House",
    "rating": 5,
    "food_type": "Thai",
    "price_for_two": 1058,
    "delhiLocation": "Kashi Vishwanath Temple",
    "distance": "3.4",
    "offer": 7,
    "alcohol": true,
    "resturant_open_time": 14,
    "resturanr_close_time": 2
  },
  {
    "image": "forth",
    "name": "Fire & Smoke Grill",
    "rating": 3,
    "food_type": "Indian",
    "price_for_two": 900,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "10.7",
    "offer": 22,
    "alcohol": false,
    "resturant_open_time": 18,
    "resturanr_close_time": 6
  },
  {
    "image": "sec",
    "name": "Harvest Table",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": 679,
    "delhiLocation": "Sarnath",
    "distance": "10.7",
    "offer": 4,
    "alcohol": true,
    "resturant_open_time": 11,
    "resturanr_close_time": 23
  },
  {
    "image": "forth",
    "name": "Curry & Claypot",
    "rating": 1,
    "food_type": "Italian",
    "price_for_two": 2338,
    "delhiLocation": "Assi Ghat",
    "distance": "10.2",
    "offer": 30,
    "alcohol": false,
    "resturant_open_time": 19,
    "resturanr_close_time": 7
  },
  {
    "image": "fifth",
    "name": "Harvest Table",
    "rating": 1,
    "food_type": "Thai",
    "price_for_two": 1497,
    "delhiLocation": "Durga Kund Temple",
    "distance": "8.2",
    "offer": 5,
    "alcohol": false,
    "resturant_open_time": 3,
    "resturanr_close_time": 15
  },
  {
    "image": "fifth",
    "name": "Fire & Smoke Grill",
    "rating": 4,
    "food_type": "American",
    "price_for_two": 1388,
    "delhiLocation": "Assi Ghat",
    "distance": "6.8",
    "offer": 13,
    "alcohol": true,
    "resturant_open_time": 18,
    "resturanr_close_time": 6
  },
  {
    "image": "third",
    "name": "Savory Street",
    "rating": 3,
    "food_type": "American",
    "price_for_two": 1917,
    "delhiLocation": "Assi Ghat",
    "distance": "6.8",
    "offer": 21,
    "alcohol": false,
    "resturant_open_time": 20,
    "resturanr_close_time": 8
  },
  {
    "image": "sec",
    "name": "Fusion Feast",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 1206,
    "delhiLocation": "Durga Kund Temple",
    "distance": "6.4",
    "offer": 28,
    "alcohol": false,
    "resturant_open_time": 15,
    "resturanr_close_time": 3
  },
  {
    "image": "fifth",
    "name": "Rustic Rasoi",
    "rating": 3,
    "food_type": "Italian",
    "price_for_two": 1561,
    "delhiLocation": "Sarnath",
    "distance": "8.7",
    "offer": 9,
    "alcohol": false,
    "resturant_open_time": 2,
    "resturanr_close_time": 14
  },
  {
    "image": "first",
    "name": "Moonlight Kitchen",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 950,
    "delhiLocation": "Manikarnika Ghat",
    "distance": "10.3",
    "offer": 15,
    "alcohol": true,
    "resturant_open_time": 3,
    "resturanr_close_time": 15
  },
  {
    "image": "forth",
    "name": "Royal Curry House",
    "rating": 2,
    "food_type": "Indian",
    "price_for_two": 283,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "6.7",
    "offer": 16,
    "alcohol": false,
    "resturant_open_time": 4,
    "resturanr_close_time": 16
  },
  {
    "image": "sec",
    "name": "The Spice Garden",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 1452,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "8.8",
    "offer": 23,
    "alcohol": false,
    "resturant_open_time": 6,
    "resturanr_close_time": 18
  },
  {
    "image": "forth",
    "name": "Grill & Chill Bistro",
    "rating": 3,
    "food_type": "Mediterranean",
    "price_for_two": 1304,
    "delhiLocation": "Ramnagar Fort",
    "distance": "8.7",
    "offer": 17,
    "alcohol": true,
    "resturant_open_time": 3,
    "resturanr_close_time": 15
  },
  {
    "image": "first",
    "name": "Savory Street",
    "rating": 2,
    "food_type": "Chinese",
    "price_for_two": 473,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "6.3",
    "offer": 19,
    "alcohol": false,
    "resturant_open_time": 8,
    "resturanr_close_time": 20
  },
  {
    "image": "ten",
    "name": "Taste of Tradition",
    "rating": 1,
    "food_type": "Thai",
    "price_for_two": 1841,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "5.0",
    "offer": 15,
    "alcohol": false,
    "resturant_open_time": 21,
    "resturanr_close_time": 9
  },
  {
    "image": "seven",
    "name": "The Spice Garden",
    "rating": 5,
    "food_type": "Italian",
    "price_for_two": 212,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "2.4",
    "offer": 27,
    "alcohol": false,
    "resturant_open_time": 1,
    "resturanr_close_time": 13
  },
  {
    "image": "eight",
    "name": "Grill & Chill Bistro",
    "rating": 5,
    "food_type": "French",
    "price_for_two": 2428,
    "delhiLocation": "Ramnagar Fort",
    "distance": "7.4",
    "offer": 11,
    "alcohol": true,
    "resturant_open_time": 21,
    "resturanr_close_time": 9
  },
  {
    "image": "fifth",
    "name": "Saffron Flavors",
    "rating": 5,
    "food_type": "French",
    "price_for_two": 803,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "8.5",
    "offer": 3,
    "alcohol": true,
    "resturant_open_time": 4,
    "resturanr_close_time": 16
  },
  {
    "image": "forth",
    "name": "Moonlight Kitchen",
    "rating": 2,
    "food_type": "Indian",
    "price_for_two": 878,
    "delhiLocation": "Durga Kund Temple",
    "distance": "7.0",
    "offer": 26,
    "alcohol": true,
    "resturant_open_time": 8,
    "resturanr_close_time": 20
  },
  {
    "image": "sec",
    "name": "Rustic Rasoi",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 880,
    "delhiLocation": "Durga Kund Temple",
    "distance": "9.9",
    "offer": 5,
    "alcohol": false,
    "resturant_open_time": 17,
    "resturanr_close_time": 5
  },
  {
    "image": "nine",
    "name": "Fusion Feast",
    "rating": 1,
    "food_type": "Korean",
    "price_for_two": 1051,
    "delhiLocation": "Sarnath",
    "distance": "3.1",
    "offer": 6,
    "alcohol": true,
    "resturant_open_time": 23,
    "resturanr_close_time": 11
  },
  {
    "image": "first",
    "name": "The Hungry Panda",
    "rating": 3,
    "food_type": "Mexican",
    "price_for_two": 1153,
    "delhiLocation": "Ramnagar Fort",
    "distance": "5.5",
    "offer": 22,
    "alcohol": false,
    "resturant_open_time": 17,
    "resturanr_close_time": 5
  },
  {
    "image": "sec",
    "name": "Ocean Breeze Café",
    "rating": 3,
    "food_type": "French",
    "price_for_two": 107,
    "delhiLocation": "Manikarnika Ghat",
    "distance": "6.9",
    "offer": 25,
    "alcohol": true,
    "resturant_open_time": 8,
    "resturanr_close_time": 20
  },
  {
    "image": "ten",
    "name": "Grill & Chill Bistro",
    "rating": 4,
    "food_type": "Chinese",
    "price_for_two": 2110,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "1.2",
    "offer": 26,
    "alcohol": false,
    "resturant_open_time": 19,
    "resturanr_close_time": 7
  },
  {
    "image": "forth",
    "name": "Grill & Chill Bistro",
    "rating": 1,
    "food_type": "Thai",
    "price_for_two": 157,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "3.4",
    "offer": 2,
    "alcohol": true,
    "resturant_open_time": 5,
    "resturanr_close_time": 17
  },
  {
    "image": "sec",
    "name": "Heavenly Delights",
    "rating": 5,
    "food_type": "Thai",
    "price_for_two": 2361,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "2.6",
    "offer": 22,
    "alcohol": false,
    "resturant_open_time": 7,
    "resturanr_close_time": 19
  },
  {
    "image": "third",
    "name": "Fusion Feast",
    "rating": 2,
    "food_type": "Indian",
    "price_for_two": 137,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "3.1",
    "offer": 28,
    "alcohol": true,
    "resturant_open_time": 4,
    "resturanr_close_time": 16
  },
  {
    "image": "fifth",
    "name": "Heavenly Delights",
    "rating": 5,
    "food_type": "Mediterranean",
    "price_for_two": 1748,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "4.3",
    "offer": 27,
    "alcohol": false,
    "resturant_open_time": 0,
    "resturanr_close_time": 12
  },
  {
    "image": "ten",
    "name": "Royal Curry House",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 657,
    "delhiLocation": "Kashi Vishwanath Temple",
    "distance": "10.0",
    "offer": 1,
    "alcohol": false,
    "resturant_open_time": 6,
    "resturanr_close_time": 18
  },
  {
    "image": "sec",
    "name": "Street Eats Hub",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 1509,
    "delhiLocation": "Durga Kund Temple",
    "distance": "9.7",
    "offer": 25,
    "alcohol": false,
    "resturant_open_time": 6,
    "resturanr_close_time": 18
  },
  {
    "image": "fifth",
    "name": "The Hungry Panda",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 1593,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "8.6",
    "offer": 9,
    "alcohol": false,
    "resturant_open_time": 14,
    "resturanr_close_time": 2
  },
  {
    "image": "nine",
    "name": "Golden Fork Diner",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 1693,
    "delhiLocation": "Manikarnika Ghat",
    "distance": "8.2",
    "offer": 26,
    "alcohol": false,
    "resturant_open_time": 19,
    "resturanr_close_time": 7
  },
  {
    "image": "sec",
    "name": "Taste of Tradition",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 1355,
    "delhiLocation": "Kashi Vishwanath Temple",
    "distance": "2.8",
    "offer": 14,
    "alcohol": true,
    "resturant_open_time": 18,
    "resturanr_close_time": 6
  },
  {
    "image": "forth",
    "name": "Saffron Flavors",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 2197,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "11.0",
    "offer": 8,
    "alcohol": false,
    "resturant_open_time": 9,
    "resturanr_close_time": 21
  },
  {
    "image": "nine",
    "name": "Curry & Claypot",
    "rating": 2,
    "food_type": "French",
    "price_for_two": 1581,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "8.7",
    "offer": 21,
    "alcohol": true,
    "resturant_open_time": 3,
    "resturanr_close_time": 15
  },
  {
    "image": "first",
    "name": "The Flavor Factory",
    "rating": 3,
    "food_type": "Korean",
    "price_for_two": 1378,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "5.6",
    "offer": 20,
    "alcohol": true,
    "resturant_open_time": 8,
    "resturanr_close_time": 20
  },
  {
    "image": "third",
    "name": "Taste of Tradition",
    "rating": 3,
    "food_type": "French",
    "price_for_two": 1456,
    "delhiLocation": "Assi Ghat",
    "distance": "10.9",
    "offer": 26,
    "alcohol": false,
    "resturant_open_time": 3,
    "resturanr_close_time": 15
  },
  {
    "image": "seven",
    "name": "Curry & Claypot",
    "rating": 1,
    "food_type": "Mexican",
    "price_for_two": 2092,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "9.1",
    "offer": 16,
    "alcohol": false,
    "resturant_open_time": 18,
    "resturanr_close_time": 6
  },
  {
    "image": "sec",
    "name": "Curry & Claypot",
    "rating": 4,
    "food_type": "Mexican",
    "price_for_two": 207,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "8.3",
    "offer": 16,
    "alcohol": true,
    "resturant_open_time": 14,
    "resturanr_close_time": 2
  },
  {
    "image": "eight",
    "name": "Golden Fork Diner",
    "rating": 4,
    "food_type": "American",
    "price_for_two": 1851,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "5.2",
    "offer": 29,
    "alcohol": false,
    "resturant_open_time": 1,
    "resturanr_close_time": 13
  },
  {
    "image": "fifth",
    "name": "The Hungry Panda",
    "rating": 2,
    "food_type": "Japanese",
    "price_for_two": 589,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "6.7",
    "offer": 25,
    "alcohol": true,
    "resturant_open_time": 15,
    "resturanr_close_time": 3
  },
  {
    "image": "eight",
    "name": "Moonlight Kitchen",
    "rating": 2,
    "food_type": "Korean",
    "price_for_two": 452,
    "delhiLocation": "Durga Kund Temple",
    "distance": "4.1",
    "offer": 19,
    "alcohol": true,
    "resturant_open_time": 8,
    "resturanr_close_time": 20
  },
  {
    "image": "seven",
    "name": "Saffron Flavors",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 536,
    "delhiLocation": "Durga Kund Temple",
    "distance": "8.1",
    "offer": 11,
    "alcohol": true,
    "resturant_open_time": 20,
    "resturanr_close_time": 8
  },
  {
    "image": "third",
    "name": "The Flavor Factory",
    "rating": 4,
    "food_type": "Japanese",
    "price_for_two": 1188,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "9.7",
    "offer": 3,
    "alcohol": false,
    "resturant_open_time": 16,
    "resturanr_close_time": 4
  },
  {
    "image": "sec",
    "name": "Urban Tandoor",
    "rating": 2,
    "food_type": "Korean",
    "price_for_two": 1631,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "3.5",
    "offer": 22,
    "alcohol": false,
    "resturant_open_time": 5,
    "resturanr_close_time": 17
  },
  {
    "image": "eight",
    "name": "The Coastal Bite",
    "rating": 3,
    "food_type": "Chinese",
    "price_for_two": 1989,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "4.0",
    "offer": 22,
    "alcohol": true,
    "resturant_open_time": 0,
    "resturanr_close_time": 12
  },
  {
    "image": "ten",
    "name": "Savory Street",
    "rating": 2,
    "food_type": "Korean",
    "price_for_two": 2393,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "9.9",
    "offer": 20,
    "alcohol": false,
    "resturant_open_time": 13,
    "resturanr_close_time": 1
  },
  {
    "image": "fifth",
    "name": "The Spice Garden",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 1445,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "5.6",
    "offer": 21,
    "alcohol": true,
    "resturant_open_time": 22,
    "resturanr_close_time": 10
  },
  {
    "image": "third",
    "name": "Moonlight Kitchen",
    "rating": 4,
    "food_type": "Indian",
    "price_for_two": 1777,
    "delhiLocation": "Durga Kund Temple",
    "distance": "7.6",
    "offer": 30,
    "alcohol": true,
    "resturant_open_time": 9,
    "resturanr_close_time": 21
  },
  {
    "image": "sec",
    "name": "The Spice Garden",
    "rating": 5,
    "food_type": "French",
    "price_for_two": 871,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "6.6",
    "offer": 11,
    "alcohol": false,
    "resturant_open_time": 20,
    "resturanr_close_time": 8
  },
  {
    "image": "third",
    "name": "Street Eats Hub",
    "rating": 1,
    "food_type": "Korean",
    "price_for_two": 1766,
    "delhiLocation": "Durga Kund Temple",
    "distance": "9.3",
    "offer": 22,
    "alcohol": false,
    "resturant_open_time": 7,
    "resturanr_close_time": 19
  },
  {
    "image": "sec",
    "name": "Golden Fork Diner",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 1359,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "4.0",
    "offer": 27,
    "alcohol": false,
    "resturant_open_time": 4,
    "resturanr_close_time": 16
  },
  {
    "image": "seven",
    "name": "The Spice Garden",
    "rating": 3,
    "food_type": "French",
    "price_for_two": 2016,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "8.6",
    "offer": 28,
    "alcohol": false,
    "resturant_open_time": 8,
    "resturanr_close_time": 20
  },
  {
    "image": "eight",
    "name": "Moonlight Kitchen",
    "rating": 4,
    "food_type": "French",
    "price_for_two": 2476,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "4.2",
    "offer": 29,
    "alcohol": false,
    "resturant_open_time": 20,
    "resturanr_close_time": 8
  },
  {
    "image": "nine",
    "name": "Moonlight Kitchen",
    "rating": 1,
    "food_type": "Japanese",
    "price_for_two": 2300,
    "delhiLocation": "Sarnath",
    "distance": "5.0",
    "offer": 11,
    "alcohol": false,
    "resturant_open_time": 21,
    "resturanr_close_time": 9
  },
  {
    "image": "sec",
    "name": "The Hungry Panda",
    "rating": 3,
    "food_type": "Mediterranean",
    "price_for_two": 299,
    "delhiLocation": "Manikarnika Ghat",
    "distance": "2.1",
    "offer": 26,
    "alcohol": false,
    "resturant_open_time": 16,
    "resturanr_close_time": 4
  },
  {
    "image": "fifth",
    "name": "Taste of Tradition",
    "rating": 5,
    "food_type": "Mexican",
    "price_for_two": 199,
    "delhiLocation": "Ramnagar Fort",
    "distance": "10.7",
    "offer": 2,
    "alcohol": true,
    "resturant_open_time": 17,
    "resturanr_close_time": 5
  },
  {
    "image": "nine",
    "name": "Fire & Smoke Grill",
    "rating": 3,
    "food_type": "Mediterranean",
    "price_for_two": 1168,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "3.3",
    "offer": 17,
    "alcohol": false,
    "resturant_open_time": 15,
    "resturanr_close_time": 3
  },
  {
    "image": "sec",
    "name": "Ocean Breeze Café",
    "rating": 5,
    "food_type": "Japanese",
    "price_for_two": 1192,
    "delhiLocation": "Kashi Vishwanath Temple",
    "distance": "4.9",
    "offer": 9,
    "alcohol": true,
    "resturant_open_time": 21,
    "resturanr_close_time": 9
  },
  {
    "image": "nine",
    "name": "Taste of Tradition",
    "rating": 3,
    "food_type": "American",
    "price_for_two": 2190,
    "delhiLocation": "Assi Ghat",
    "distance": "5.9",
    "offer": 30,
    "alcohol": false,
    "resturant_open_time": 7,
    "resturanr_close_time": 19
  },
  {
    "image": "six",
    "name": "Urban Tandoor",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 2141,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "2.9",
    "offer": 15,
    "alcohol": true,
    "resturant_open_time": 20,
    "resturanr_close_time": 8
  },
  {
    "image": "fifth",
    "name": "Saffron Flavors",
    "rating": 1,
    "food_type": "Indian",
    "price_for_two": 1955,
    "delhiLocation": "Ramnagar Fort",
    "distance": "10.1",
    "offer": 6,
    "alcohol": false,
    "resturant_open_time": 19,
    "resturanr_close_time": 7
  },
  {
    "image": "forth",
    "name": "Fusion Feast",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 1187,
    "delhiLocation": "Assi Ghat",
    "distance": "1.9",
    "offer": 26,
    "alcohol": true,
    "resturant_open_time": 22,
    "resturanr_close_time": 10
  },
  {
    "image": "seven",
    "name": "Taste of Tradition",
    "rating": 2,
    "food_type": "Italian",
    "price_for_two": 700,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "1.5",
    "offer": 29,
    "alcohol": false,
    "resturant_open_time": 11,
    "resturanr_close_time": 23
  },
  {
    "image": "seven",
    "name": "Golden Fork Diner",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 877,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "5.7",
    "offer": 17,
    "alcohol": true,
    "resturant_open_time": 15,
    "resturanr_close_time": 3
  },
  {
    "image": "fifth",
    "name": "Golden Fork Diner",
    "rating": 5,
    "food_type": "Mediterranean",
    "price_for_two": 1474,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "10.0",
    "offer": 20,
    "alcohol": false,
    "resturant_open_time": 22,
    "resturanr_close_time": 10
  },
  {
    "image": "seven",
    "name": "The Coastal Bite",
    "rating": 5,
    "food_type": "Indian",
    "price_for_two": 179,
    "delhiLocation": "Tulsi Manas Temple",
    "distance": "7.5",
    "offer": 3,
    "alcohol": false,
    "resturant_open_time": 20,
    "resturanr_close_time": 8
  },
  {
    "image": "sec",
    "name": "Taste of Tradition",
    "rating": 3,
    "food_type": "Mediterranean",
    "price_for_two": 587,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "10.7",
    "offer": 14,
    "alcohol": true,
    "resturant_open_time": 23,
    "resturanr_close_time": 11
  },
  {
    "image": "seven",
    "name": "Heavenly Delights",
    "rating": 4,
    "food_type": "Indian",
    "price_for_two": 1249,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "1.9",
    "offer": 8,
    "alcohol": false,
    "resturant_open_time": 6,
    "resturanr_close_time": 18
  },
  {
    "image": "ten",
    "name": "Harvest Table",
    "rating": 4,
    "food_type": "Chinese",
    "price_for_two": 1802,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "8.8",
    "offer": 19,
    "alcohol": false,
    "resturant_open_time": 17,
    "resturanr_close_time": 5
  },
  {
    "image": "ten",
    "name": "Rustic Rasoi",
    "rating": 1,
    "food_type": "Chinese",
    "price_for_two": 720,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "1.5",
    "offer": 10,
    "alcohol": false,
    "resturant_open_time": 10,
    "resturanr_close_time": 22
  },
  {
    "image": "ten",
    "name": "Taste of Tradition",
    "rating": 2,
    "food_type": "French",
    "price_for_two": 369,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "8.0",
    "offer": 30,
    "alcohol": true,
    "resturant_open_time": 20,
    "resturanr_close_time": 8
  },
  {
    "image": "six",
    "name": "Grill & Chill Bistro",
    "rating": 2,
    "food_type": "Thai",
    "price_for_two": 1118,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "10.7",
    "offer": 12,
    "alcohol": false,
    "resturant_open_time": 3,
    "resturanr_close_time": 15
  },
  {
    "image": "eight",
    "name": "Ocean Breeze Café",
    "rating": 2,
    "food_type": "Korean",
    "price_for_two": 1793,
    "delhiLocation": "Banaras Hindu University (BHU)",
    "distance": "1.2",
    "offer": 9,
    "alcohol": false,
    "resturant_open_time": 4,
    "resturanr_close_time": 16
  },
  {
    "image": "sec",
    "name": "Street Eats Hub",
    "rating": 2,
    "food_type": "American",
    "price_for_two": 770,
    "delhiLocation": "Bharat Kala Bhavan Museum",
    "distance": "10.2",
    "offer": 20,
    "alcohol": false,
    "resturant_open_time": 3,
    "resturanr_close_time": 15
  },
  {
    "image": "ten",
    "name": "Grill & Chill Bistro",
    "rating": 4,
    "food_type": "Mexican",
    "price_for_two": 447,
    "delhiLocation": "Dashashwamedh Ghat",
    "distance": "2.8",
    "offer": 21,
    "alcohol": false,
    "resturant_open_time": 5,
    "resturanr_close_time": 17
  }
];




function get(rest) {
      
    const root=document.querySelector("#root")
    rest.forEach(element => {
        //create a card
        //1.image
        //2. card_content
            //i.card_header (name and rating)
            //ii. card_footer (food_type and price)
            //iii. card-location (resturant location, distance)


            const card=document.createElement("div");
            card.className="card";

            const image=document.createElement("img");
            image.src=`../pic/${element.image}.jpeg`;

            const card_content=document.createElement("div");
            card_content.className="card_content";
                
           




            const card_header=document.createElement("div");
             card_header.classList.add("card-header");

             const h3=document.createElement("h3");
            h3.textContent=`${element.name}`

            const rate=document.createElement("span");
            rate.textContent=`${element.rating}`;
            rate.classList.add("rating");

            card_header.append(h3,rate);



             const card_footer=document.createElement("div");
             card_footer.classList.add("card-footer");

             const food=document.createElement("span");
             food.textContent=`${element.food_type}`;

             const price=document.createElement("span");
             price.textContent=`₹ ${element.price_for_two}`;
             
             card_footer.append(food,price);


             const card_location=document.createElement("div");
             card_location.classList.add("card-location");

             const location=document.createElement("span");
             location.textContent=`${element.delhiLocation} `;

             const distance=document.createElement("span");
             distance.textContent=`${element.distance} km`
             
             card_location.append(location,distance);

             card_content.append(card_header,card_footer,card_location);

             card.append(image,card_content);
             root.append(card);

    });
}

get(resturant);


document.getElementById("alcohol").addEventListener("click",(event)=> {
          
   const result= resturant.filter((num )=> {
           return  num.alcohol   === true;
       
    })
           document.getElementById("root").innerHTML="";

           get(result);


})
const filterPanel = document.getElementById("filterPanel");

document.getElementById("filter").addEventListener("click", (event) => {
    filterPanel.style.display = "block"; 
});


document.getElementById("applyFilter").addEventListener("click", (event) => {
  
  const ele = document.querySelector('input[name="sort"]:checked')?.value;

  if (ele === 'rating-high') {
    resturant.sort((a, b) => b.rating - a.rating);
  }
  else if (ele === 'rating-low') {
    resturant.sort((a, b) => a.rating - b.rating);
  }
  else if (ele === 'distance') {
    resturant.sort((a, b) => a.distance - b.distance); // nearest first
  }
  else if (ele === 'price') {
    resturant.sort((a, b) => a.price_for_two - b.price_for_two);
  }


  document.getElementById("root").innerHTML = "";
  

  get(resturant);

  
  filterPanel.style.display = "none";
});

