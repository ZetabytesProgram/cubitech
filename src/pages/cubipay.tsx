import ArrowForward from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";

const CubiPay: React.FC<any> = () => {
  const cubipayAvatars = [
    {
      alt: "Earn Rewards",
      src: "./cubipay/icon1.svg",
      width: 175,
      height: 175,
      title: "Earn Rewards",
      descr: `Receive 0.75% back in CubiPerk points for every dollar spent. Redeem points for rides, meals, or discounts.`,
    },
    {
      alt: "Seamless Transactions",
      src: "./cubipay/icon2.svg",
      width: 175,
      height: 175,
      title: "Seamless Transactions",
      descr: `Enjoy hassle-free payments for all your favourite CubiPay services, from essentials to shopping.`,
    },
    {
      alt: "Easy Payments",
      src: "./cubipay/icon3.svg",
      width: 175,
      height: 175,
      title: "Easy Payments",
      descr: `Simply scan QR codes in-store or pay online with your smartphone — look for the CubiPay logo!`,
    },
  ];

  const cubipaySafetyPledgeAvatars = [
    {
      alt: "Privacy Protection",
      src: "./cubipay/icon4.svg",
      width: 175,
      height: 175,
      title: "Privacy Protection",
      descr: `Verify your identity to secure your account. CubiPay is PCI DSS level 1 compliant.`,
    },
    {
      alt: "Fraud Prevention",
      src: "./cubipay/icon5.svg",
      width: 175,
      height: 175,
      title: "Fraud Prevention",
      descr: `24/7 monitoring for unauthorized activity. Shop confidently and report any issues.`,
    },
    {
      alt: "Account Access",
      src: "./cubipay/icon6.svg",
      width: 175,
      height: 175,
      title: "Account Access",
      descr: `Secure your funds with your CubiPay PIN and biometric features.`,
    },
  ];

  return (
    <>
      <Head>
        <title>Cubitech | CubiPay</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiPay page */}
        <Box
          sx={{
            backgroundImage: `url('./cubipay/block1.png')`,
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
            Spend Smart, Reap Rewards!
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
            Enjoy secure, rewarding payments for bills, rides, and shopping with
            CubiPay Wallet — your cashless journey starts here!
          </Typography>
        </Box>

        {/* "Why pay with CubiPay?" block */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          color={"primary.main"}
          textAlign={"center"}
        >
          <Typography variant={"h5"} fontWeight={600} marginBottom={"2.5%"}>
            Why pay with CubiPay?
          </Typography>

          <Grid container>
            {cubipayAvatars.map((avatar, index) => (
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
                    marginBottom: "1%",
                  }}
                  variant={"square"}
                />
                <Typography variant={"h5"} fontWeight={500} fontSize={20}>
                  {avatar.title}
                </Typography>
                <Typography
                  variant={"body1"}
                  sx={{ width: "90%", marginX: "5%", marginY: "2.5%" }}
                  fontSize={16}
                >
                  {avatar.descr}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CubiPay safety pledge */}
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
          <Grid container>
            {cubipaySafetyPledgeAvatars.map((avatar, index) => (
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
                  }}
                  variant={"square"}
                />
                <Typography variant={"h5"} fontWeight={500} fontSize={20}>
                  {avatar.title}
                </Typography>
                <Typography
                  variant={"body1"}
                  sx={{ width: "90%", marginX: "5%", marginY: "2.5%" }}
                  fontSize={16}
                >
                  {avatar.descr}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Register CubiPay block */}
        <Box paddingX={"10%"} paddingY={"2%"}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={8}>
              <Typography
                variant={"h4"}
                color={"primary.main"}
                fontWeight={600}
                marginBottom={"2%"}
              >
                Digitalise your payment with CubiPay
              </Typography>
              <Typography color={"primary.dark"} fontSize={18}>
                Start using CubiPay now!
              </Typography>
            </Grid>
            <Grid item xs={4} textAlign={"right"}>
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

export default CubiPay;
