'use strict';

// 先產生陣列資料，我忽略部分我認為題目不需要的部分
const data = require('../public/jsons/restaurant.json');
const restaurants = data.results.map((item) => ({
  name: item.name,
  category: item.category,
  image: item.image,
  location: item.location,
  phone: item.phone,
  google_map: item.google_map,
  description: item.description,
  createdAt: new Date(),
  updatedAt: new Date()
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Restaurants', restaurants, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Restaurants', null, {})
  }
};
