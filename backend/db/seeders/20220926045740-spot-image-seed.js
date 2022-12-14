'use strict';

const { Spot } = require('../models');
const spot = require('../models/spot');

const spotImages = {
  "Biggest House": [
    {
      preview: true,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_21db1d5eb6f39b51cd445f92677a86aa_01d6b678_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  "Smallest House": [
    {
      preview: true,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_21eabf7a3ff3cb9e98f5acf1e0cae8ab_4baecf94_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  "Beautiful House": [
    {
      preview: true,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_3246b9a0202172250d2e71413abf8180_d1d501f7_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  "Amazing House": [
    {
      preview: true,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_4b486da86f0dbfa647a2b405854ea6c8_78c4be14_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'An inviting house in the clouds': [
    {
      preview: true,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_5cb53a63c9147f628c8046b3e7aa86e0_6c09acb4_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'Flower House: nights full of flowers!': [
    {
      preview: true,
      url: 'https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_67111920b000dd160a239e772a9dcdbf_28531d19_1280.jpeg'
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'An imposing house belies its comfortable interior': [
    {
      preview: true,
      url: 'https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_8627cacd9f94c5d79294f4075f31b64a_a7fe15d6_1280.jpeg'
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'This cozy house is filled with books': [
    {
      preview: true,
      url: 'https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_9730a538b8816c614b59c679424d9661_291329cf_1280.jpeg'
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'A well maintained, proper house': [
    {
      preview: true,
      url: 'https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_b544012fa120bdfb02fb3edeffec5a7e_499d30fa_1280.jpeg'
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'A rooftop house resembles a perfect treehouse!': [
    {
      preview: true,
      url: 'https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_cceaa2669b5d1261912ccd1319d4a288_56632cb7_1280.jpeg'
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'Lucky House': [
    {
      preview: true,
      url: 'https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_dfa951f282a620dd97a38fd25b7291c8_d7304296_1280.jpeg'
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
  ],
  'Pool House': [
    {
      preview: true,
      url: 'https://nlumpkinbucket.s3.us-west-1.amazonaws.com/natebnb-main-images/tumblr_f0fbfee0147b486df6d2687358cbe483_e0261a33_1280.jpeg'
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_069463f2d7d25be54473563bddf11d33_349a1684_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_1a36d644dd3375cd76cf4f34fac11224_a0f1c035_500.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_3c3453410ef214313e58198f4500ffda_d4a6287b_1280.jpeg"
    },
    {
      preview: false,
      url: "https://nlumpkinbucket.s3.us-west-1.amazonaws.com/tumblr_faf9a455132dd8e67fe9f07d668333a0_fdc909cc_1280.jpeg"
    },
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
   for (let spotName in spotImages) {
    const spot = await Spot.findOne({ where: { name: spotName }});
    for (let spotImage of spotImages[spotName]) {
      const { preview, url } = spotImage;
      await spot.createSpotImage({ preview: preview, url: url})
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
    await queryInterface.bulkDelete('SpotImages',{
      url: [
        'some url',
        "https://64.media.tumblr.com/9730a538b8816c614b59c679424d9661/82bcfdf3f12283ea-eb/s1280x1920/291329cfd56c2d36eed0c2d25b87613377b3c2ef.jpg",
        "https://64.media.tumblr.com/f0fbfee0147b486df6d2687358cbe483/a7a1fb2b21ad7404-db/s1280x1920/e0261a334bb329b5e47e7c1194d83fe71c3e3a5b.jpg",
        "https://64.media.tumblr.com/5cb53a63c9147f628c8046b3e7aa86e0/2f708bffdb6ba444-0c/s1280x1920/6c09acb4bf0067d90d1e906d28ea32c771d0829f.jpg",
        "https://64.media.tumblr.com/67111920b000dd160a239e772a9dcdbf/dbbec85ffccf652e-d7/s1280x1920/28531d199395159c4d8a98d530d0e2a71392dc81.jpg",
        "https://64.media.tumblr.com/8627cacd9f94c5d79294f4075f31b64a/5d4b8caae1bf6c04-18/s1280x1920/a7fe15d65d40029e6f1bfa5bfd21c083e8fe6852.jpg",
        'https://64.media.tumblr.com/21eabf7a3ff3cb9e98f5acf1e0cae8ab/95f4cff538f909a1-a7/s1280x1920/4baecf94dd6e5ce2c5c886ca05efc38b64fefa56.jpg',
        'https://64.media.tumblr.com/3246b9a0202172250d2e71413abf8180/8be5a862f566a89f-3e/s1280x1920/d1d501f72409bcf63d5ed99fbb5f5877504315fc.jpg',
        'https://64.media.tumblr.com/4b486da86f0dbfa647a2b405854ea6c8/9014fe13bc027a87-05/s1280x1920/78c4be144b50a665feb5c59be7031e787e509a6f.jpg',
        'https://64.media.tumblr.com/cceaa2669b5d1261912ccd1319d4a288/7a3057dd3c89efc8-4f/s1280x1920/56632cb7e7ab01958ab4b6a062ddcf7723143065.jpg',
        'https://64.media.tumblr.com/dfa951f282a620dd97a38fd25b7291c8/ea20320b70bb7938-84/s1280x1920/d73042963c91e7bfb41919fb18a60fbd34c74480.jpg',
        'https://64.media.tumblr.com/21db1d5eb6f39b51cd445f92677a86aa/ec2968e846c6cf45-ac/s1280x1920/01d6b6784e4a31ea6434072768260576442a23b4.jpg',
        'https://64.media.tumblr.com/b544012fa120bdfb02fb3edeffec5a7e/435cacf7506b01d4-72/s1280x1920/499d30fa01022ddb7331b78aec187d2c8a6063cd.jpg'
      ]
    })
  }
};
