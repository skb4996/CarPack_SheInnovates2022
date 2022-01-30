
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import GeneratingMobile from "./components/GeneratingMobile";
import IMac1 from "./components/IMac1";
import GeneratingDesktop from "./components/GeneratingDesktop";
import AdaDesktop from "./components/AdaDesktop";
import PaidDesktop from "./components/PaidDesktop";
import WalkingDesktop from "./components/WalkingDesktop";
import MobileHomePage from "./components/MobileHomePage";
import WalkingMobile from "./components/WalkingMobile";
import AdaMobile from "./components/AdaMobile";
import PaidMobile from "./components/PaidMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/generatingmobile">
          <GeneratingMobile
            loadingBar="/img/loading-bar@2x.png"
            generatingParkingL="Generating Parking List (please wait until you are closer to your destination)"
            spanText1={
              <>
                Destination: <br />
              </>
            }
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            carRearWhite1="/img/car-rear-white-1@2x.png"
          />
        </Route>
        <Route path="/:path(|desktophomepage)">
          <IMac1
            overlapGroup="/img/background@1x.png"
            carparktitle="/img/carparktitle@1x.png"
            logo="/img/logo@1x.png"
            destinationInput="/img/destination---input@1x.png"
          />
        </Route>
        <Route path="/generatingdesktop">
          <GeneratingDesktop
            spanText1="Destination:  "
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            carRearWhite1="/img/car-rear-white-1@2x.png"
            generatingParkingL="Generating Parking List (please wait until you are closer to your destination)"
            unknown1="/img/unknown-1@2x.png"
          />
        </Route>
        <Route path="/adadesktop">
          <AdaDesktop
            carRearWhite2="/img/car-rear-white-1@2x.png"
            spanText1="Destination:  "
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            place="NO"
            component1Props={adaDesktopData.component1Props}
          />
        </Route>
        <Route path="/paiddesktop">
          <PaidDesktop
            spanText1="Destination:  "
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            carRearWhite1="/img/car-rear-white-1@2x.png"
            payprompt="Do you need free parking?"
            yes="YES"
            place="NO"
          />
        </Route>
        <Route path="/walkingdesktop">
          <WalkingDesktop
            spanText1="Destination:  "
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            carRearWhite1="/img/car-rear-white-1@2x.png"
            howFarAreYouWillingToWalk="How far are you willing to walk?"
            minutes="MINUTES"
          />
        </Route>
        <Route path="/mobilehomepage">
          <MobileHomePage
            carparktitle="CarPark"
            versiontext="Version 1.0.0"
            logo="/img/logo@2x.png"
            componentProps={mobileHomePageData.componentProps}
          />
        </Route>
        <Route path="/walkingmobile">
          <WalkingMobile
            spanText1={
              <>
                Destination: <br />
              </>
            }
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            howFarAreYouWillingToWalk="How far are you willing to walk?"
            minutes="MINUTES"
            carRearWhite1="/img/car-rear-white-1@2x.png"
          />
        </Route>
        <Route path="/adamobile">
          <AdaMobile
            place="NO"
            yes="YES"
            spanText1={
              <>
                Destination: <br />
              </>
            }
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            adaprompt="Are you looking for ADA parking?"
            carRearWhite1="/img/car-rear-white-1@2x.png"
          />
        </Route>
        <Route path="/paidmobile">
          <PaidMobile
            place="NO"
            yes="YES"
            spanText1={
              <>
                Destination: <br />
              </>
            }
            spanText2="4227 Fifth Avenue Pittsburgh, PA 15260"
            payprompt="Do you need free parking?"
            logo="/img/car-rear-white-1@2x.png"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const component1Data = {
    adaprompt: "Are you looking for ADA parking?",
    yes: "YES",
};

const adaDesktopData = {
    component1Props: component1Data,
};

const componentData = {
    inputType: "text",
    inputPlaceholder: "Enter Destination...",
};

const mobileHomePageData = {
    componentProps: componentData,
};

