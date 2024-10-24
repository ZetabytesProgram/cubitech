import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";

const About: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>About Us | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of About page */}
        <Box
          sx={{
            backgroundImage: `url('./about/block1.png')`,
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
            Journeying together, hand in hand
            <br />
            towards endless possibilities.
          </Typography>
        </Box>

        {/* Mission statement block */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          bgcolor={"primary.main"}
          color={"white"}
        >
          <Typography variant={"h5"} fontWeight={500}>
            Inspired by the Cubitech Vision, our mission is to simplify life
            through <br />
            seamless integration of emerging technologies.
          </Typography>
        </Box>

        {/* Developing Cubitech block */}
        <Box paddingX={"10%"} paddingY={"2%"} color={"primary.main"}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={6} textAlign={"left"}>
              <Image
                src={"./about/block2.svg"}
                alt={"Developing Cubitech"}
                width={480} // 1920
                height={270} // 1080
                style={{ display: "block", marginLeft: 0 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={"h4"} fontWeight={600} fontSize={32}>
                Developing Cubitech
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                color={"primary.dark"}
                mt={2}
              >
                As a fresh start-up, Cubitech is gaining recognition, with users
                seamlessly making the switch from conventional finance apps,
                embracing a new way to manage their finances.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Building Resilience block */}
        <Box
          paddingX={"10%"}
          paddingY={"2%"}
          bgcolor={"primary.light"}
          color={"primary.main"}
        >
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={6}>
              <Typography variant={"h4"} fontWeight={600} fontSize={32}>
                Building Resilience towards <br />
                Challenges
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                color={"primary.dark"}
                mt={2}
              >
                We're committed to strengthening the economic resilience
                <br />
                of this region for a sustainable and empowered future.
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign={"right"}>
              <Image
                src={"./about/block3.svg"}
                alt={"Building Resilience"}
                width={480} // 1920
                height={270} // 1080
              />
            </Grid>
          </Grid>
        </Box>

        {/* Cubitech Standards block */}
        <Box paddingX={"10%"} paddingY={"2%"} color={"primary.main"}>
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={6} textAlign={"left"}>
              <Image
                src={"./about/block4.svg"}
                alt={"Cubitech Standards"}
                width={480} // 1920
                height={270} // 1080
                style={{ display: "block", marginLeft: 0 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={"h4"} fontWeight={600} fontSize={32}>
                Cubitech Standards
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18}
                color={"primary.dark"}
                mt={2}
              >
                We embrace strong corporate governance to fulfill the Cubitech
                Vision, making life easier through the seamless integration of
                diverse technologies.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default About;
