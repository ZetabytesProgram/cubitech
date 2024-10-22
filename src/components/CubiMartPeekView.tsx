import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubitech.module.scss";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const CubiMartPeekView: React.FC<any> = () => {
  const cardLength = Array.from({ length: 6 });

  const card = (
    <>
      <Box width={"100%"} paddingBottom={"100%"} position={"relative"}>
        <CardMedia
          component="img"
          image="./cubitech_brands/cubimart_light.svg"
          alt="CubiMart"
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
      <CardContent
        sx={{ borderTop: 1, borderColor: "divider", textAlign: "left" }}
      >
        <Typography gutterBottom variant={"h6"} component={"div"} fontSize={16}>
          Menu Item Name
        </Typography>
        <Typography variant={"body2"} color={"text.secondary"}>
          $9.99
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 0,
          paddingBottom: 3,
        }}
      >
        <Button startIcon={<Add />} size={"small"} variant={"contained"}>
          Add To Cart
        </Button>
      </CardActions>
    </>
  );

  return (
    <Box paddingX={"10%"} paddingY={"2.5%"}>
      <Typography
        variant={"h4"}
        fontWeight={700}
        fontSize={30}
        color={"primary.main"}
        letterSpacing={0.5}
        className={styles.codecPro}
      >
        CUBI
        <Typography
          component={"span"}
          fontWeight={700}
          fontSize={30}
          color={"#ac0052"}
          letterSpacing={0.5}
          className={styles.codecPro}
        >
          Mart
        </Typography>
    </Typography>

      <Grid container paddingTop={"2%"} spacing={1}>
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

export default CubiMartPeekView;
