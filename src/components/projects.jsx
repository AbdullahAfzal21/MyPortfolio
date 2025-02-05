import { Box, Typography, Grid, Card, Button, CardActions, CardContent, CardMedia } from "@mui/material";

import Uni from "../../img/pu.png"
import Clg from "../../img/punjab college logo.svg"
import School from "../../img/mgs.png"
import Projectbg from "../../img/web-project.jpg";



function Project() {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
           maxHeight: "900px",
            position: "relative",
            backgroundImage: `url(${Projectbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingBottom:"80px",
            display: "flex",
            justifyContent: "center",

            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0.7,
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              color: "white",
              zIndex: 1,
              textAlign: "center",
              width: { xs: "90%", sm: "100%", md: "75%" },
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textShadow: "3px 3px 5px rgba(0,0,0,0.4)",
                textAlign: "center",
                fontSize: "42px",
                py: "70px",
              }}
            >
  Project
            </Typography>

            <Grid container spacing={10} sx={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={12} sm={3}>
        <Card
  color="neutral"
  orientation="vertical"
  size="lg"
/>
        </Grid >
        <Grid item xs={12} sm={3}>
        <Card sx={{ maxWidth: "100%"}}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Clg }
        sx={{objectFit: "contain",marginTop:"10px"}}
      />
      <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        Punjab Group of Colleges 
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
    ICS,Stats
  </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={School}
 sx={{objectFit: "contain",marginTop:"10px"}}
      />
      <CardContent>
      <Typography  variant="h6" component="div">
Mumtaz Grammer School
  </Typography>
  <Typography gutterBottom variant="h7" component="div">
Matric with Computer Science
  </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
           
     
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Project;