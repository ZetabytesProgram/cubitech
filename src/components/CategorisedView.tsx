import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Add from "@mui/icons-material/Add";

interface CategorisedViewProps {
    imageSrc: string;
}

const CategorisedView: React.FC<CategorisedViewProps> = ({ imageSrc }) => {
  const cardLength = Array.from({ length: 12 });

  const card = (
    <>
      <Box width={"100%"} paddingBottom={"100%"} position={"relative"}>
        <CardMedia
          component="img"
          image={imageSrc}
          alt="CubiFood"
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
      <CardContent sx={{ borderTop: 1, borderColor: "divider", textAlign: 'left' }}>
        <Typography gutterBottom variant={"h6"} component={"div"} fontSize={16}>
          Menu Item Name
        </Typography>
        <Typography variant={"body2"} color={"text.secondary"}>
          $9.99
        </Typography>
        <Rating defaultValue={5} precision={0.5} sx={{ marginTop: "10%" }} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 0,
          paddingBottom: 3,
        }}
      >
        <Button startIcon={<Add />} size={'small'} variant={"contained"}>
          Add To Cart
        </Button>
      </CardActions>
    </>
  );

  return (
    <Box paddingX={"10%"} paddingBottom={"2%"} borderBottom={1} borderColor={'divider'}>
      <Grid container paddingY={"2%"} spacing={1}>
        {cardLength.map((_, index) => (
          <Grid item xs={2} key={index}>
            <Card variant={"outlined"} sx={{ borderRadius: 1.5 }}>
              {card}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorisedView;
