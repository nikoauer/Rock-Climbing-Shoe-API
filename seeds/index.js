const sequelize = require('../config/connection');
const Shoes = require("../models/Shoe");
const shoeData = require ("./shoeData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const rockclimbingShoes = await Shoes.bulkCreate(shoeData)
    .then(() => {
        console.log("Shoe data has been successfuly seeded into database")
    }).catch((error) => {
        console.log("Error seeding data", error)
    });
}

seedDatabase();
