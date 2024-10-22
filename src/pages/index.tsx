import CubiFoodPeekView from "@/components/CubiFoodPeekView";
import CubiMartPeekView from "@/components/CubiMartPeekView";
import Promotions from "@/components/Promotions";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";

const Index: React.FC<any> = () => {
  // Cubitech services avatar data
  const cubitechServicesAvatars = [
    {
      alt: "CubiFood",
      src: "./cubitech_brands/cubifood_light.svg",
      width: 189, // 1704
      height: 44, // 400
      marginRight: 2,
    },
    {
      alt: "CubiMart",
      src: "./cubitech_brands/cubimart_light.svg",
      width: 189, // 1704
      height: 44, // 400
      marginRight: 2,
    },
    {
      alt: "CubiRide",
      src: "./cubitech_brands/cubiride_light.svg",
      width: 189, // 1704
      height: 44, // 400
      marginRight: 2,
    },
    {
      alt: "CubiPay",
      src: "./cubitech_brands/cubipay_light.svg",
      width: 189, // 1704
      height: 44, // 400
      marginRight: 2,
    },
    {
      alt: "CubiGift",
      src: "./cubitech_brands/cubigift_light.svg",
      width: 189, // 1704
      height: 44, // 400
      marginRight: 2,
    },
    {
      alt: "CubiPerk",
      src: "./cubitech_brands/cubiperk_light.svg",
      width: 189, // 1704
      height: 44, // 400
      marginRight: 0,
    },
  ];

  return (
    <>
      <Head>
        <title>Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of Index page */}
        <Box
          sx={{
            backgroundImage: `url('./index/block1.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
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
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust the alpha value for transparency
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
            Cubitech: Beyond Fintech,
            <br />
            Infinite Possibilities for Your Life!
          </Typography>
        </Box>

        {/* Cubitech services block */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          bgcolor={"primary.light"}
          textAlign={"center"}
        >
          {/* Cubitech Slogan */}
          <Typography
            variant={"h5"}
            color={"primary"}
            fontSize={24}
            fontWeight={500}
          >
            One platform, countless solutions - from essentials to
            opportunities.
          </Typography>

          {/* Array of Cubitech brand avatars */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5%",
            }}
          >
            {cubitechServicesAvatars.map((avatar, index) => (
              <Avatar
                key={index} // Key should be unique, ideally use a unique identifier from your data
                alt={avatar.alt}
                src={avatar.src}
                component={"div"}
                sx={{
                  width: avatar.width,
                  height: avatar.height,
                  marginRight: avatar.marginRight,
                }}
                variant={"square"}
              />
            ))}
          </div>
        </Box>

        {/* Promotions block */}
        <Promotions
          promotionTitle={"Weekly Promotions"}
          bgColor={"primary.main"}
          titleColor={"white"}
          imageSrc={"./cubitech_brands/cubitech_light.svg"}
        />

        {/* CubiFood Peek Menu block */}
        <CubiFoodPeekView />

        {/* CubiMart Peek Menu block */}
        <CubiMartPeekView />

        {/* CubiRide block */}
        <Box paddingX={"10%"} paddingY={"4%"} bgcolor={"primary.light"}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={6} textAlign={"left"}>
              <Image
                src="/index/block2.svg"
                width={480} // 1920
                height={270} // 1080
                alt="JustCubi"
                style={{ display: "block" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ width: "85%", marginLeft: "15%" }}>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize={28}
                  color="primary.main"
                >
                  Rushing off to somewhere?
                  <br />
                  <Box
                    component="span"
                    sx={{ display: "block", marginTop: "1.25%" }}
                  >
                    Let CubiRide take you to your destination!
                  </Box>
                </Typography>

                <Typography
                  fontWeight={500}
                  color="primary.dark"
                  fontSize={18}
                  sx={{ marginY: "3%" }}
                >
                  Elevate Your Journey: From CubiEconomy to
                  <br />
                  CubiFirst Class
                </Typography>

                <Button variant="contained" size="large" color="primary">
                  Book A Ride Now!
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* CubiPerk block */}
        <Box paddingX={"10%"} paddingY={"4%"} bgcolor={"primary.main"}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={6}>
              <Box sx={{ width: "85%", marginRight: "15%" }}>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize={28}
                  color="white"
                >
                  Get more from Cubitech!
                  <br />
                  <Box
                    component="span"
                    sx={{ display: "block", marginTop: "1.25%" }}
                  >
                    Boost your points with our loyalty program.
                  </Box>
                </Typography>

                <Typography
                  fontWeight={500}
                  fontSize={18}
                  color="#b3cdff"
                  sx={{ marginY: "3%" }}
                >
                  Exchange your airline miles to CubiPerk points today!
                </Typography>

                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    marginTop: "3%",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
              <Image
                src="/index/block3.svg"
                width={480} // 1920
                height={270} // 1080
                alt="CubiRewards"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Join Cubitech block */}
        <Box paddingX={"10%"} paddingY={"2%"}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={6}>
              <Typography
                variant={"h4"}
                color={"primary.main"}
                fontWeight={600}
                marginBottom={"2%"}
              >
                Join Cubitech Today
              </Typography>
              <Typography color={"primary.dark"} fontSize={18}>
                Join us for exclusive promotions and the latest updates on
                events!
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign={"right"}>
              <Button
                startIcon={<ArrowForward />}
                color={"primary"}
                variant={"contained"}
                size={"large"}
              >
                Register Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default Index;
