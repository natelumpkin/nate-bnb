import { csrfFetch } from "./csrf";

import normalizeReviews from "./utils/normalizeReviews";

const USER_REVIEWS = '/reviews/getCurrentUserReviews';
const SPOT_REVIEWS = '/reviews/getReviewsBySpotId';
const CREATE_REVIEW = '/reviews/createReviewBySpotId';
const DELETE_REVIEW = '/reviews/deleteReviewById';
const ADD_REVIEW_IMAGE = 'reviews/addReviewImage';
const DELETE_REVIEW_IMAGE = 'reviews/deleteReviewImage';

// ACTION CREATORS

const loadUserReviews = (reviewData) => {
  return {
    type: USER_REVIEWS,
    reviewData
  }
};

const loadSpotReviews = (spotId) => {
  return {
    type: SPOT_REVIEWS,
    spotId
  }
};

const addReview = (reviewData) => {
  return {
    type: CREATE_REVIEW,
    reviewData
  }
};

const removeReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
};

const addImage = (imageData) => {
  return {
    type: ADD_REVIEW_IMAGE,
    imageData
  }
};

const removeImage = (imageId) => {
  return {
    type: DELETE_REVIEW_IMAGE,
    imageId
  }
};

// THUNKS

export const getUserReviews = () => async (dispatch) => {
  const response = await csrfFetch('api/reviews/current');

  const reviewData = await response.json();

  dispatch(loadUserReviews(reviewData));

  return reviewData;
}

// INITIAL STATE AND REDUCER

const initialState = {
  spot: {}, // object containing spot's reviews by review Id
  user: {} // object containing user's reviews
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REVIEWS: {
      const newState = {
        spot: {},
        user: {}
      };
      // load in Spot Reviews from previous state
      for (let spotReviewId in state.spot) {
        newState.spot[spotReviewId] = {
          ...newState.spot[spotReviewId],
          User: {
            ...newState.spot[spotReviewId].User
          },
          ReviewImages: [
            ...newState.spot[spotReviewId].ReviewImages
          ]
        }
      }
      // Add normalized user data under user key
      newState.user = normalizeReviews(action.reviewData);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reviewReducer;
