'use strict';

const { User, Spot } = require('../models')

const UserSpotBookings = {
  "demouser1": [
    {"Smallest House": {
      startDate: "2022-04-30",
      endDate: "2022-05-30"
    }},
    {"Smallest House": {
      startDate: "2022-05-31",
      endDate: "2022-06-30"
    }}
  ],
  "demouser2": [
    {"Beautiful House": {
      startDate: "2022-07-30",
      endDate: "2022-08-30"
    }},
    {"Biggest House": {
      startDate: "2022-09-30",
      endDate: "2022-10-30"
    }}
  ],
  "demouser3": [
    {"Average House": {
      startDate: "2022-11-30",
      endDate: "2022-12-30"
    }}
  ]
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   for (let username in UserSpotBookings) {
    const user = await User.findOne({ where: { username: username}})

    for (let i = 0; i < UserSpotBookings[username].length; i++) {
      let spotObj = UserSpotBookings[username][i]

      for (let spotname in spotObj) {

        let spot = await Spot.findOne({where: {name: spotname}});
        let spotId = spot.id;

        const {startDate, endDate} = spotObj[spotname];

        await user.createBooking({spotId: spotId, startDate: startDate, endDate:endDate});
      }
    }
   }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bookings',{
      startDate: [
        "2022-04-30",
        "2022-03-31",
        "2022-07-30",
        "2022-09-30",
        "2022-11-30"
      ]
    })
  }
};