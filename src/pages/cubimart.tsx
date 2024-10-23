import CategorisedView from "@/components/CategorisedView";
import CubiMartBargainBlitz from "@/components/CubiMartBargainBlitz";
import CubiMartCategories from "@/components/CubiMartCategories";
import { merriWeather } from "@/styles/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";

const CubiMart: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiMart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiMart page */}
        <Box
          sx={{
            backgroundImage: `url('./cubimart/block1.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
            marginTop: "-75px",
          }}
        />

        {/* CubiMart slogan block */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          bgcolor={"white"}
          color={"primary.main"}
          textAlign={"center"}
        >
          <Typography
            variant={"h5"}
            fontStyle={"italic"}
            fontFamily={merriWeather.style.fontFamily}
            fontWeight={700}
            fontSize={32}
          >
            Shop the Beat of Your Life!
          </Typography>
        </Box>

        {/* CubiMart Bargain Blitz block */}
        <CubiMartBargainBlitz />

        {/* CubiMart categories block */}
        <CubiMartCategories />

        {/* Categorised View block */}
        <CategorisedView imageSrc={"./cubitech_brands/cubimart_light.svg"} />
      </main>
    </>
  );
};

export default CubiMart;
