import CategorisedView from "@/components/CategorisedView";
import CubiFoodCategories from "@/components/CubiFoodCategories";
import CubiFoodTopTreasures from "@/components/CubiFoodTopTreasures";
import Promotions from "@/components/Promotions";
import { merriWeather } from "@/styles/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";

const CubiFood: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiFood page */}
        <Box
          sx={{
            backgroundImage: `url('./cubifood/block1.png')`,
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

        {/* CubiFood slogan block */}
        <Box
          paddingX={"10%"}
          paddingY={"2.5%"}
          bgcolor={"white"}
          color={"#30a66a"}
          textAlign={"center"}
        >
          <Typography
            variant={"h5"}
            fontStyle={"italic"}
            fontFamily={merriWeather.style.fontFamily}
            fontWeight={700}
            fontSize={32}
          >
            Eat Smart. Pay Easy. Enjoy Every Bite.
          </Typography>
        </Box>

        {/* Promotions block */}
        <Promotions
          promotionTitle={"Promotions"}
          bgColor={"#30a66a"}
          titleColor={"white"}
          imageSrc={"./cubitech_brands/cubifood_light.svg"}
        />

        {/* CubiFood Top Treasures block */}
        <CubiFoodTopTreasures />

        {/* CubiFood categories block */}
        <CubiFoodCategories />

        {/* Categorised View block */}
        <CategorisedView imageSrc={"./cubitech_brands/cubifood_light.svg"} />
      </main>
    </>
  );
};

export default CubiFood;
