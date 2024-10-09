import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Index: React.FC<any> = () => {
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
              backgroundColor: "rgba(0, 0, 0, 0.25)", // Adjust the alpha value for transparency
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
      </main>
    </>
  );
};

export default Index;
