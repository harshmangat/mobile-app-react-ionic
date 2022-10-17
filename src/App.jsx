import React from "react";
import {
  IonApp,
  setupIonicReact,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { homeOutline, logoAlipay, personOutline, headsetOutline, ellipsisHorizontalOutline } from "ionicons/icons";

import Home from "./pages/Home";
import Billing from "./pages/Billing";
import Account from "./pages/Account";
import Support from "./pages/Support";
import More from "./pages/More";



/* Core CSS required for Ionic components to work properly */
// import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";
// import "./theme/variables.css";

setupIonicReact();


function App() {
  return (
    <IonApp>
      
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/billing">
              <Billing />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/support">
              <Support />
            </Route>
            <Route exact path="/more">
              <More />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="billing" href="/billing">
              <IonIcon icon={logoAlipay} />
              <IonLabel>Billing</IonLabel>
            </IonTabButton>
            <IonTabButton tab="account" href="/account">
              <IonIcon icon={personOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
            <IonTabButton tab="support" href="/support">
              <IonIcon icon={headsetOutline} />
              <IonLabel>Support</IonLabel>
            </IonTabButton>
            <IonTabButton tab="more" href="/more">
              <IonIcon icon={ellipsisHorizontalOutline} />
              <IonLabel>More</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
