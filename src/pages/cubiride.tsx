import ArrowForward from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";

const CubiRide: React.FC<any> = () => {
  const cubirideAvatars = [
    {
      alt: "Fare Estimate Preview",
      src: "./cubiride/fare_estimate_preview.svg",
      width: 175,
      height: 175,
      title: "Fare Estimate Preview",
      descr: `Know your fare upfront before booking (excluding tolls and extra fees).`,
    },
    {
      alt: "Real-Time Ride Tracking",
      src: "./cubiride/real_time_ride_tracking.svg",
      width: 175,
      height: 175,
      title: "Real-Time Ride Tracking",
      descr: `Track your ride, view trip history, and get live updates on your driver.`,
    },
    {
      alt: "Seamless Payments",
      src: "./cubiride/seamless_payments.svg",
      width: 175,
      height: 175,
      title: "Seamless Payments",
      descr: `Pay easily via CubiPay or card in the app — no cash required.`,
    },
  ];

  const cubirideEverydayAvatars = [
    {
      alt: "CubiMatch",
      src: "./cubiride/cubi_match.svg",
      width: 175,
      height: 175,
      title: "CubiMatch",
      descr: "Connect with the nearest taxi or car at a fixed fare.",
    },
    {
      alt: "CubiShare",
      src: "./cubiride/cubi_share.svg",
      width: 175,
      height: 175,
      title: "CubiShare",
      descr:
        "Save by sharing a ride with others on your route, with a short wait.",
    },
    {
      alt: "CubiCar",
      src: "./cubiride/cubi_car.svg",
      width: 175,
      height: 175,
      title: "CubiCar",
      descr: "Dependable transportation for your everyday journeys and needs.",
    },
  ];

  const cubiridePremiumAvatars = [
    {
      alt: "CubiSuite",
      src: "./cubiride/cubi_suite.svg",
      width: 175,
      height: 175,
      title: "CubiSuite",
      descr:
        "Experience top-tier luxury with a first-class vehicle, perfect for executive travel.",
    },
    {
      alt: "CubiBusiness",
      src: "./cubiride/cubi_business.svg",
      width: 175,
      height: 175,
      title: "CubiBusiness",
      descr:
        "Enjoy a roomy and comfortable ride, perfect for business meetings and events.",
    },
    {
      alt: "CubiPremium",
      src: "./cubiride/cubi_premium.svg",
      width: 175,
      height: 175,
      title: "CubiPremium",
      descr:
        "Upgrade your travel with a luxurious and comfortable private ride.",
    },
  ];

  const cubirideSafetyPledgeAvatars = [
    {
      alt: "Safety Alert Button",
      src: "./cubiride/safety_alert_button.svg",
      width: 175,
      height: 175,
      title: "Safety Alert Button",
      descr:
        "Alert emergency contacts or authorities with just one tap during your ride.",
    },
    {
      alt: "Private Number Protection",
      src: "./cubiride/private_number_protection.svg",
      width: 175,
      height: 175,
      title: "Private Number Protection",
      descr:
        "Your phone number stays hidden, keeping your contact data secure beyond your trip.",
    },
    {
      alt: "Real-time Ride Sharing",
      src: "./cubiride/real_time_ride_sharing.svg",
      width: 175,
      height: 175,
      title: "Real-time Ride Sharing",
      descr:
        "Let friends or family track your ride in real-time for extra peace of mind.",
    },
  ];

  return (
    <>
      <Head>
        <title>CubiRide | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiRide page */}
        <Box
          sx={{
            backgroundImage: `url('./cubiride/block1.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
            marginTop: "-75px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.35)", // Adjust the alpha value for transparency
            }}
          ></div>
          <Typography
            variant={"h1"}
            fontWeight={600}
            fontSize={54}
            color={"white"}
            style={{
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              marginTop: "500px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Ride with CubiRide — safe and smooth.
          </Typography>
        </Box>

        {/* Mission statement block */}
        <Box
          paddingX={"10%"}
          paddingY={"2%"}
          bgcolor={"primary.main"}
          color={"#fff"}
        >
          <Typography variant="h5" fontWeight={500}>
            With CubiRide, we use analytics to make your journeys safer,
            smoother, and more personalised.
          </Typography>
        </Box>

        {/* "Why choose CubiRide?" block */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          color={"primary.main"}
          textAlign={"center"}
        >
          <Typography variant={"h5"} fontWeight={600}>
            Why choose CubiRide?
          </Typography>

          <Grid container paddingY={"2.5%"}>
            {cubirideAvatars.map((avatar, index) => (
              <Grid
                item
                xs={4}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Avatar
                  key={index} // Key should be unique, ideally use a unique identifier from your data
                  alt={avatar.alt}
                  src={avatar.src}
                  component={"div"}
                  sx={{
                    width: avatar.width,
                    height: avatar.height,
                    marginBottom: "2.5%",
                  }}
                  variant={"square"}
                />
                <Typography variant={"h5"} fontWeight={500} fontSize={20}>
                  {avatar.title}
                </Typography>
                <Typography
                  variant={"body1"}
                  sx={{ width: "90%", marginX: "5%", marginTop: "2.5%" }}
                  fontSize={16}
                >
                  {avatar.descr}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CubiRide passenger types block */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          bgcolor={"primary.light"}
          color={"primary.main"}
          textAlign={"center"}
        >
          <Typography variant={"h5"} fontWeight={600}>
            CubiRide: A Ride for Every Need
          </Typography>

          {/* Everyday Rides block */}
          <Box paddingY={"3%"}>
            <Typography variant={"h5"} fontWeight={500}>
              Everyday Rides
            </Typography>
            <Grid container paddingY={"2.5%"}>
              {cubirideEverydayAvatars.map((avatar, index) => (
                <Grid
                  item
                  xs={4}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  key={index} // Key should be unique, ideally use a unique identifier from your data
                >
                  <Avatar
                    alt={avatar.alt}
                    src={avatar.src}
                    component={"div"}
                    sx={{
                      width: avatar.width,
                      height: avatar.height,
                      marginBottom: "2.5%",
                    }}
                    variant={"square"}
                  />
                  <Typography
                    variant={"h5"}
                    fontWeight={500}
                    fontSize={20}
                  >
                    {avatar.title}
                  </Typography>
                  <Typography
                    variant={"body1"}
                    sx={{ width: "90%", marginX: "5%", marginTop: "2.5%" }}
                    fontSize={16}
                  >
                    {avatar.descr}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Premium Rides block */}
          <Box paddingY={"3%"}>
            <Typography variant={"h5"} fontWeight={500}>
              Premium Rides
            </Typography>
            <Grid container paddingY={"2.5%"}>
              {cubiridePremiumAvatars.map((avatar, index) => (
                <Grid
                  item
                  xs={4}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  key={index} // Key should be unique, ideally use a unique identifier from your data
                >
                  <Avatar
                    alt={avatar.alt}
                    src={avatar.src}
                    component={"div"}
                    sx={{
                      width: avatar.width,
                      height: avatar.height,
                      marginBottom: "2.5%",
                    }}
                    variant={"square"}
                  />
                  <Typography
                    variant={"h5"}
                    fontWeight={500}
                    fontSize={20}
                  >
                    {avatar.title}
                  </Typography>
                  <Typography
                    variant={"body1"}
                    sx={{ width: "90%", marginX: "5%", marginTop: "2.5%" }}
                    fontSize={16}
                  >
                    {avatar.descr}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* CubiRide safety pledge */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          bgcolor={"#00897b"}
          color={"white"}
          textAlign={"center"}
        >
          <Typography variant={"h5"} fontWeight={600}>
            CubiRide Safety Pledge
          </Typography>
          <Grid container paddingY={"2.5%"}>
            {cubirideSafetyPledgeAvatars.map((avatar, index) => (
              <Grid
                item
                xs={4}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                key={index} // Key should be unique, ideally use a unique identifier from your data
              >
                <Avatar
                  alt={avatar.alt}
                  src={avatar.src}
                  component={"div"}
                  sx={{
                    width: avatar.width,
                    height: avatar.height,
                    marginBottom: "2.5%",
                  }}
                  variant={"square"}
                />
                <Typography variant={"h5"} fontWeight={500} fontSize={20}>
                  {avatar.title}
                </Typography>
                <Typography
                  variant={"body1"}
                  sx={{ width: "90%", marginX: "5%", marginTop: "2.5%" }}
                  fontSize={16}
                >
                  {avatar.descr}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Join Cubitech block */}
        <Box paddingX={"10%"} paddingY={"2%"}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={7}>
              <Typography
                variant={"h4"}
                color={"primary.main"}
                fontWeight={600}
                marginBottom={"2%"}
              >
                Travel with CubiRide
              </Typography>
              <Typography color={"primary.dark"} fontSize={18}>
                Dependable and secure transportation to take you wherever you
                need to be.
              </Typography>
            </Grid>
            <Grid item xs={5} textAlign={"right"}>
              <Button
                startIcon={<ArrowForward />}
                color={"primary"}
                variant={"contained"}
                size={"large"}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default CubiRide;
