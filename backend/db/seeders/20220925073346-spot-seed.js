'use strict';


const { User } = require('../models')

const SpotUsers =
  {
    'demouser2': [
      {
        address: '100 Small Ave',
        city: 'Smalltown',
        state: 'California',
        country: 'USA',
        lat: 31.1194890,
        lng: -90.1295419,
        name: 'Smallest House',
        description: 'The smallest house in the whole world',
        price: 12.99
      },
      {
        address: '400 Beautiful St',
        city: 'Beautifultown',
        state: 'Maryland',
        country: 'France',
        lat: 76.1194890,
        lng: 78.1294319,
        name: 'Beautiful House',
        description: 'The most beautiful house in the whole world',
        price: 49.99
      }, {
        address: '1200 Luckbury Ave',
        city: 'Lucky',
        state: 'Pennsylvania',
        country: 'United States',
        lat: 76.1194890,
        lng: 78.1294319,
        name: 'Lucky House',
        description: 'The luckiest house in the whole workd',
        price: 49.99
      }
    ],
    'demouser1': [
      {
        address: '200 Big St',
        city: 'Bigville',
        state: 'New York',
        country: 'United States of America',
        lat: -61.1194890,
        lng: 90.1295419,
        name: 'Biggest House',
        description: 'The biggest house in the whole world',
        price: 1120.99
      },
      {
        address: '500 Amazing Pl',
        city: 'Amazingville',
        state: 'Wyoming',
        country: 'USA',
        lat: 56.1194890,
        lng: 32.1295419,
        name: 'Amazing House',
        description: 'The most amazing house in the whole world',
        price: 12.99
      },
      {
        address: '1300 Pool Pl',
        city: 'Poolville',
        state: 'California',
        country: 'USA',
        lat: 56.1194890,
        lng: 32.1295419,
        name: 'Pool House',
        description: 'Join us at our fantastic pool, where your cares will be washed away by rest and relaxation!',
        price: 12.99
      }
    ],
    'demouser3': [{
      address: '600 Cloud St',
      city: 'Cloudville',
      state: 'Monroe',
      country: 'Spain',
      lat: 35.1194890,
      lng: -10.1295419,
      name: 'An inviting house in the clouds',
      description: 'Join us in this amazing house above the clouds, where all the world can be seen below!',
      price: 99.99
    }],
    'demouser4': [
      {
        address: '700 Flower St',
        city: 'Flowerville',
        state: 'Florida',
        country: 'Denmark',
        lat: 50.1194890,
        lng: -55.1295419,
        name: 'Flower House: nights full of flowers!',
        description: 'Enter this enchanting home surrounded by a garden, handmade by ourselves',
        price: 99.99
      },
      {
        address: '800 Imposing Ave',
        city: 'Imposingville',
        state: 'Iowa',
        country: 'United States',
        lat: 45.1194890,
        lng: 90.1295419,
        name: 'An imposing house belies its comfortable interior',
        description: 'Though this house may look a little imposing from the outside, rest assured you\'ll have a relaxing stay!',
        price: 99.99
      },
      {
        address: '900 Library St',
        city: 'Booksville',
        state: 'Nevada',
        country: 'Peru',
        lat: -30.1194890,
        lng: -19.1295419,
        name: 'This cozy house is filled with books',
        description: 'The perfect getaway for a bookworm, or just someone nostalgic for the smell of a friendly bookstore. Curl up in a corner and enjoy a long getaway!',
        price: 99.99
      }
    ],
    'demouser5': [
      {
        address: '1000 Proper Rd',
        city: 'Properville',
        state: 'Pennsylvania',
        country: 'Germany',
        lat: 43.1194890,
        lng: -170.1295419,
        name: 'A well maintained, proper house',
        description: 'We keep this proper house perfectly maintained! You\'ll never see anything out of place here. Tired of the mess? Book a stay!',
        price: 99.99
      },
      {
        address: '1100 Rooftop St',
        city: 'Roofville',
        state: 'Rhode Island',
        country: 'United States',
        lat: 0.1194890,
        lng: -0.1295419,
        name: 'A rooftop house resembles a perfect treehouse!',
        description: 'Climb up into our house and get a closer look at the stairs! We have a rooftop deck, telescope, and garden patio, perfect for hosting small parties!',
        price: 99.99
      }
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
    for (let username in SpotUsers) {
      let user = await User.findOne({ where: { username: username }});
      for (let spotObj of SpotUsers[username]) {
        const {address, city, state, country, lat, lng, name, description, price } = spotObj;
        let spot = await user.createSpot({address: address, city: city, state: state, country: country, lat:lat, lng:lng, name:name, description:description, price:price })
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

    await queryInterface.bulkDelete('Spots', {
        name: ['Biggest House', 'Smallest House','Average House','Amazing House','Beautiful House','Lucky House','Biggest House','Pool House','An inviting house in the clouds','Flower House: nights full of flowers!','An imposing house belies its comfortable interior','This cozy house is filled with books','A well maintained, proper house','A rooftop house resembles a perfect treehouse!']
    }, {});
  }
};
