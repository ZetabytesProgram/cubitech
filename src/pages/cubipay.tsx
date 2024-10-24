import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";

const CubiPay: React.FC<any> = () => {
  const cubipayAvatars = [
    {
      alt: "Earn Rewards",
      src: "./cubipay/earn_rewards.svg",
      width: 175,
      height: 175,
      title: "Earn Rewards",
      descr: `Receive 0.75% back in CubiPerk points for every dollar spent. Redeem points for rides, meals, or discounts.`,
    },
    {
      alt: "Seamless Transactions",
      src: "./cubipay/seamless_transactions.svg",
      width: 175,
      height: 175,
      title: "Seamless Transactions",
      descr: `Enjoy hassle-free payments for all your favourite CubiPay services, from essentials to shopping.`,
    },
    {
      alt: "Easy Payments",
      src: "./cubipay/easy_payments.svg",
      width: 175,
      height: 175,
      title: "Easy Payments",
      descr: `Simply scan QR codes in-store or pay online with your smartphone — look for the CubiPay logo!`,
    },
  ];

  const cubipaySafetyPledgeAvatars = [
    {
      alt: "Privacy Protection",
      src: "./cubipay/privacy_protection.svg",
      width: 175,
      height: 175,
      title: "Privacy Protection",
      descr: `Verify your identity to secure your account. CubiPay is PCI DSS level 1 compliant.`,
    },
    {
      alt: "Fraud Prevention",
      src: "./cubipay/fraud_prevention.svg",
      width: 175,
      height: 175,
      title: "Fraud Prevention",
      descr: `24/7 monitoring for unauthorized activity. Shop confidently and report any issues.`,
    },
    {
      alt: "Account Access",
      src: "./cubipay/account_access.svg",
      width: 175,
      height: 175,
      title: "Account Access",
      descr: `Secure your funds with your CubiPay PIN and biometric features.`,
    },
  ];

  return (
    <>
      <Head>
        <title>CubiPay | Cubitech</title>
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
          <Typography variant={"h5"} fontWeight={600}>
            Why pay with CubiPay?
          </Typography>

          <Grid container paddingY={"2.5%"}>
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

        {/* How CubiPay works block */}
        <Box paddingX={"10%"}
          paddingY={"2.5%"}
          bgcolor={'primary.light'}
          color={'primary.main'}>
            <Typography variant={'h6'} fontWeight={400}>How CubiPay Wallet works</Typography>
            <Grid container paddingY={'2.5%'}>
              <Grid item xs={6}>
                <Typography variant={"h5"} fontWeight={500}>
                Effortless Transactions
                </Typography>
                <Typography fontSize={18} marginTop={"2.5%"}>
                Easily split the bill after a meal — send or request transfers instantly with no fees involved.
                </Typography>
              </Grid>
              <Grid item xs={6}></Grid>
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
            CubiPay Safety Pledge
          </Typography>
          <Grid container paddingY={"2.5%"}>
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
      </main>
    </>
  );
};

export default CubiPay;
