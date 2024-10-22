import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Footer: React.FC<any> = () => {
  return (
    <Box
      paddingX={"5%"}
      paddingY={"3%"}
      bgcolor={"primary.dark"}
      color={"white"}
    >
      <Grid container>
        <Grid item xs={3}>
          <Avatar
            alt={"Cubitech"}
            src={"./cubitech_brands/cubitech_dark.svg"}
            component={"div"}
            sx={{
              width: 189, // 1704
              height: 44, // 400
            }}
            variant={"square"}
          />
          <Typography mt={4} mb={2} fontSize={16}>
            12 Marina Blvd,
            <br />
            Singapore 018982
          </Typography>
          <Typography fontSize={16}>
            Stay connected with us <br />
            for latest updates!
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Link href={"/about"}>
            <Typography>About Us</Typography>
          </Link>
          <Typography>Help Centre</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography fontWeight={600}>Consumers</Typography>
          <Typography>CubiFood</Typography>
          <Typography>CubiMart</Typography>
          <Typography>CubiRide</Typography>
          <Typography>CubiPay</Typography>
          <Typography>CubiPerk</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography fontWeight={600}>Quick Links</Typography>
          <Typography>Help Centre</Typography>
          <Typography>Developer Portal</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
