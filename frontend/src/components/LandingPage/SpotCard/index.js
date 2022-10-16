import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  console.log('SPOT CARD spot PROP: ', spot)
  return (
    <Link>
      <div className="spotcard-top-holder">
        <div className="spotcard-preview-image-holder">
          <img src={spot.url} alt='preview image of spot'/>
        </div>
      <div className="spotcard-bottom-holder">
        <div>{spot.city},{spot.state}</div>
        <div>{spot.avgRating}</div>
        <div>${spot.price} night</div>
      </div>
      </div>
    </Link>
  )
};

export default SpotCard;
