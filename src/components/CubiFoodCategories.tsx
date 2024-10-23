import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CubiFoodCategories: React.FC<any> = () => {
  const categories = [
    { name: "Beverage", src: "./cubifood/beverage.svg" },
    { name: "Indian", src: "./cubifood/indian.svg" },
    { name: "Chinese", src: "./cubifood/chinese.svg" },
    { name: "Japanese", src: "./cubifood/japanese.svg" },
    { name: "Korean", src: "./cubifood/korean.svg" },
    { name: "Malay", src: "./cubifood/malay.svg" },
    { name: "Thai", src: "./cubifood/thai.svg" },
    { name: "Western", src: "./cubifood/western.svg" },
  ];

  return (
    <Box paddingX={"10%"} paddingY={"2.5%"} color={"#30a66a"}>
      <Typography
        variant={"h4"}
        fontWeight={600}
        fontSize={26}
        textAlign={"center"}
      >
        Categories
      </Typography>

      <Grid container paddingY={"2%"}>
        {categories.map((category, index) => (
          <Grid item xs={1.5} key={index}>
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
                sx={{ width: 100, height: 100, bgcolor: "#ecf8f2" }}
              />
              <Typography marginTop={1}>{category.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiFoodCategories;
