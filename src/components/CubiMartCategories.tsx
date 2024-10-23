import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CubiMartCategories: React.FC<any> = () => {
  const categories = [
    { name: "Food and Beverage", src: "./cubimart/food_and_beverage.svg" },
    { name: "Toys and Baby Products", src: "./cubimart/toys_and_baby_products.svg" },
    { name: "Kids' Fashion", src: "./cubimart/kids_fashion.svg" },
    { name: "Video Games & Hobbies", src: "./cubimart/video_games_and_hobbies.svg" },
    { name: "Sports & Outdoors", src: "./cubimart/sports_and_outdoors.svg" },
    { name: "Multimedia & Entertainment", src: "./cubimart/multimedia_and_entertainment.svg" },
    { name: "Electronics & Gadgets", src: "./cubimart/electronics_and_gadgets.svg" },
    { name: "Pet Supplies", src: "./cubimart/pet_supplies.svg" },
    { name: "Men's Apparel", src: "./cubimart/men_apparel.svg" },
    { name: "Women's Apparel", src: "./cubimart/women_apparel.svg" },
    { name: "Accessories & Jewellery", src: "./cubimart/accessories_and_jewellery.svg" },
    { name: "Miscellaneous", src: "./cubimart/miscellaneous.svg" },
  ];

  return (
    <Box paddingX={"10%"} paddingY={"2.5%"}>
      <Typography
        variant={"h4"}
        fontWeight={600}
        fontSize={26}
        color={"primary.main"}
        textAlign={"center"}
      >
        Categories
      </Typography>

      <Grid container paddingY={"2%"}>
        {categories.map((category, index) => (
          <Grid item xs={2} key={index} paddingY={'1%'}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                key={index}
                alt={category.name}
                src={category.src}
                variant={"circular"}
                sx={{ width: 100, height: 100, bgcolor: 'primary.light' }}
              />
              <Typography color={"primary.main"} marginTop={1} textAlign={'center'}>{category.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiMartCategories;
