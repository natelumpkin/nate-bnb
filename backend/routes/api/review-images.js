const express = require('express');
const { requireAuth } = require('../../utils/auth')
const { User, Spot, Review, SpotImage, Booking, ReviewImage, sequelize } = require('../../db/models');

const router = express.Router();

router.delete('/:imageId', requireAuth, async (req, res) => {
  const image = await ReviewImage.findByPk(req.params.imageId,
    {
      include: {
        model: Review
      }
    });

  if (!image) {
    res.status(404);
    return res.json({
      message: "Review Image couldn't be found",
      statusCode: 404
    })
  }

  if (image.Review.userId !== req.user.id) {
    res.status(403);
    return res.json({
      message: "Forbidden"
    })
  }

  await image.destroy();

  return res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})

module.exports = router;
