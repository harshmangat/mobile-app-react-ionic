import React from "react";

import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItemDivider,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  notificationsOutline,
  wifiOutline,
  rocketOutline,
  alertCircleOutline,
} from "ionicons/icons";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zipply</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={notificationsOutline} color="dark" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonToolbar className=".ion-margin-top" style={{ marginTop: "10px" }}>
          <IonTitle size="large">Hi Victoria</IonTitle>
        </IonToolbar>
        <IonText style={{ marginLeft: "16px", fontWeight: "600" }}>
          Friday, October 14
        </IonText>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard style={{ display: "flex", height: "80px" }}>
                <IonButtons>
                  <IonButton>
                    <IonIcon
                      style={{ fontSize: "30px", color: "green" }}
                      slot="start"
                      icon={wifiOutline}
                    ></IonIcon>
                  </IonButton>
                </IonButtons>

                <div>
                  <IonTitle
                    style={{
                      fontSize: "12px",
                      margin: "-17px 0 5px 14px",
                      padding: "0",
                      opacity: "0.6",
                    }}
                  >
                    Network Status
                  </IonTitle>
                  <IonTitle
                    style={{
                      fontSize: "18px",
                      margin: "1px 0 0 9px",
                      padding: "0",
                    }}
                  >
                    Excellent
                  </IonTitle>
                  <IonTitle
                    style={{
                      fontSize: "12px",
                      color: "green",
                      margin: "25px 0 0 9px",
                      padding: "0",
                    }}
                  >
                    Troubleshoot
                  </IonTitle>
                </div>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard style={{ display: "flex", height: "80px" }}>
                <IonButtons>
                  <IonButton>
                    <IonIcon
                      style={{ fontSize: "30px", color: "green" }}
                      slot="start"
                      icon={rocketOutline}
                    ></IonIcon>
                  </IonButton>
                </IonButtons>

                <div>
                  <IonTitle
                    style={{
                      fontSize: "12px",
                      margin: "-17px 0 5px 14px",
                      padding: "0",
                      opacity: "0.6",
                    }}
                  >
                    Last Speed Test
                  </IonTitle>
                  <IonTitle
                    style={{
                      fontSize: "18px",
                      margin: "1px 0 0 9px",
                      padding: "0",
                    }}
                  >
                    80Mbps
                  </IonTitle>
                  <IonTitle
                    style={{
                      fontSize: "12px",
                      color: "green",
                      margin: "25px 0 0 9px",
                      padding: "0",
                    }}
                  >
                    Test Again
                  </IonTitle>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" style={{ height: "300px", margin: "0" }}>
              <div
                style={{
                  width: "100%",
                  padding: "6px",
                  borderTop: "1px solid grey",
                }}
              >
                <h3 style={{ opacity: "0.6" }}>My Payment</h3>
                <p
                  style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}
                >
                  Ziply Fibre Gig Internet
                </p>
                <h2
                  style={{
                    margin: "3px 0 0 0",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  $60.00
                </h2>
                <h5 style={{ margin: "0" }}>
                  {" "}
                  <IonIcon icon={alertCircleOutline} /> Autoplay Schedule for
                  Oct 2022
                </h5>
                <p style={{ color: "green", margin: "2px 0 0 0" }}>
                  Manage Autoplay
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  <IonButtons>
                    <IonButton
                      style={{
                        color: "#fff",
                        width: "300px",
                        borderRadius: "50px",
                        backgroundColor: "green",
                      }}
                    >
                      Make a Payment
                    </IonButton>
                  </IonButtons>
                </div>
              </div>
            </IonCol>
            <IonCol
              size="12"
              style={{ height: "300px", marginTop: "-80px", padding: "0" }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div style={{ padding: "6px" }}>
                  <h4 style={{ opacity: "0.6", margin: "0" }}>Special Offer</h4>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      margin: "6px 0 0 0",
                    }}
                  >
                    Apply Ziply Fibre Voice For Just 120 $/mo
                  </p>
                  <p style={{ margin: "3px  0 0 0", opacity: "0.7" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius fuga ut officiis consequatur sint explicabo quaerat
                    repellat numquam mollitia quas!
                  </p>
                </div>
                <div>
                  <img
                    src="https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg"
                    alt=""
                    style={{
                      width: "190px",
                      height: "130px",
                      marginTop: "32px",
                    }}
                  />
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
