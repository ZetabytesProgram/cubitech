import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface PromotionsProps {
  promotionTitle: string;
  bgColor: string;
  titleColor: string;
  imageSrc: string;
}

const Promotions: React.FC<PromotionsProps> = ({
  promotionTitle,
  bgColor,
  titleColor,
  imageSrc,
}) => {
  const cardLength = Array.from({ length: 4 });

  const card = (
    <>
      <Box width={"100%"} paddingBottom={"100%"} position={"relative"}>
        <CardMedia
          component="img"
          image={imageSrc}
          alt="Promotion"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
          }}
        />
      </Box>
      <CardContent sx={{ borderTop: 1, borderColor: "divider" }}>
        <Typography gutterBottom variant={"h6"} component={"div"} fontSize={18}>
          Promotion Name
        </Typography>
        <Typography variant={"body2"} color={"text.secondary"} fontSize={14}>
          Description
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Box paddingX={"10%"} paddingY={"2.5%"} bgcolor={bgColor}>
      <Typography
        variant={"h4"}
        fontWeight={600}
        fontSize={26}
        textAlign={"left"}
        color={titleColor}
      >
        {promotionTitle}
      </Typography>

      <Grid container paddingY={"2%"} spacing={1}>
        {cardLength.map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card variant={"outlined"} sx={{ borderRadius: 1.5 }}>
              {card}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotions;
