import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Thunks and Utils
import { getAllSpots } from "../../store/spot";

// Components
import SpotCard from "./SpotCard";

// CSS
import './LandingPage.css';

const LandingPage = () => {
  // landing page will display on map at exact route '/'
  // display a div with a map of spotcards
  // one spotcard for each spot in getAllSpots

  // get the list of all spots by dispatching getallspots thunk on load
  // listen for changes in case a spot is deleted
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSpots());
  }, []);

  const allSpots = useSelector(state => state.spots.allSpots);
  // console.log('LANDING PAGE allSpots store: ', allSpots)


  const spotsArray = [];
  for (let spot in allSpots) {
    spotsArray.push(allSpots[spot]);
  }
  // console.log('LANDING PAGE spotsArray after pushing spots data: ', spotsArray)

  return (
    <div className="flex outer-container">
      <div id="landing-grid" className="grid landing-page">
      {
        spotsArray.map(spot => (
          <SpotCard key={spot.id} spot={spot}/>
        ))
      }
      </div>
    </div>
  )
};

export default LandingPage;
