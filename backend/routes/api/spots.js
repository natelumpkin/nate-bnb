const express = require('express');
const { requireAuth } = require('../../utils/auth')
const { User, Spot, Review, SpotImage, Booking, ReviewImage, sequelize } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {

  const spots = await Spot.findAll({
    attributes: {
      include: [
        [sequelize.fn('AVG',sequelize.col('stars')),'avgRating'],
      ]
    },
    group: "Spot.id",
    include: [{
      model: SpotImage,
    },
    {
      model: Review,
      attributes: []
    }]
  });

  // spots.toJSON()
  let spotList = [];
  spots.forEach(spot => {
    spotList.push(spot.toJSON());
  })

  spotList.forEach(spot => {
    // iterate over spot.SpotImages
    spot.SpotImages.forEach(spotImage => {
      if (spotImage.preview) {
        spot.previewImage = spotImage.url
      } else {
        spot.previewImage = 'No preview image available'
      }
    })
    delete spot.SpotImages;
    if (!spot.previewImage) {
      spot.previewImage = 'No preview image available'
    }

    // if spotimage.preview = true,
    // set previewImage = spotimage.url
    // if spotimate.preview = false,
    // set previewImage = 'No preview image available'
  })




  return res.json({
    Spots: spotList
  });
});

router.get('/current', requireAuth, async (req, res) => {
  let currentId = req.user.id;
  const spots = await Spot.findAll({
    where: {
      ownerId: currentId
    },
    attributes: {
      include: [
        [sequelize.fn('AVG',sequelize.col('stars')),'avgRating'],
      ]
    },
    group: "Spot.id",
    include: [{
      model: SpotImage,
    },
    {
      model: Review,
      attributes: []
    }]
  })

  let spotList = [];
  spots.forEach(spot => {
    spotList.push(spot.toJSON());
  })

  spotList.forEach(spot => {
    // iterate over spot.SpotImages
    spot.SpotImages.forEach(spotImage => {
      if (spotImage.preview) {
        spot.previewImage = spotImage.url
      } else {
        spot.previewImage = 'No preview image available'
      }
    })
    delete spot.SpotImages;
    if (!spot.previewImage) {
      spot.previewImage = 'No preview image available'
    }
  })

  res.json({
    Spots: spotList
  })
})

router.get('/:spotId', async(req, res) => {
  const spot = await Spot.findByPk(req.params.spotId, {
    attributes: {
      include: [
        [sequelize.fn('COUNT',sequelize.col('review')),'numReviews'],
        [sequelize.fn('AVG',sequelize.col('stars')),'avgRating']
      ]
    },
    group: "Spot.id",
    include: [{
      model: SpotImage,
      attributes: ['url']
    },
    {
      model: Review,
      attributes: []
    },
    {
      model: User,
      as: 'Owner',
      attributes: ['id','firstName','lastName']
    }]
  });
  if (spot) {
  res.json(spot);
  } else {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: 404
    })
  }
})

router.post('/', requireAuth, async (req, res) => {

  const {
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  } = req.body;

  let spot = await Spot.create({
    ownerId: req.user.id,
    address: address,
    city: city,
    state: state,
    country: country,
    lat: lat,
    lng: lng,
    name: name,
    description: description,
    price: price
  })

  res.status(201)
  return res.json(spot);
})

router.put('/:spotId', requireAuth, async (req, res) => {

  const {
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  } = req.body;

  const spot = await Spot.findByPk(req.params.spotId);

  if (!spot) {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: 404
    })
  }

  if (spot.ownerId !== req.user.id) {
    res.status(403);
    res.json({
      message: "Forbidden",
      statusCode: 403
    })
  }

  await spot.update({
    address: address,
    city: city,
    state: state,
    country: country,
    lat: lat,
    lng: lng,
    name: name,
    description: description,
    price: price
  })

  res.json(spot);

})



module.exports = router;
