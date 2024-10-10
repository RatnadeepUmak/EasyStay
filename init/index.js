const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then(() =>{
        console.log("connection successful with DB");
    })
    .catch((err) =>{
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/easystay");
}

const initDB = async () =>{
      await Listing.deleteMany({});
      initData.data = initData.data.map((obj) => ({...obj, owner: "66f6b9830b90572fbf635988"}));
      await Listing.insertMany(initData.data);
      console.log("Data was initialize");
}

initDB();