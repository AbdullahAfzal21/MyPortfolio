import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Uni from "../../img/pu.png"
import Clg from "../../img/punjab college logo.svg"
import School from "../../img/mgs.png"


function Summary() {
  return (
    <div style={{marginBottom:"80px"}}>
    <Typography
      variant="h4"
      sx={{
        textShadow: "3px 3px 5px rgba(0,0,0,0.4)", 
        textAlign:"center",my:"70px",fontSize:"40px"
      }}
    >
      Education
    </Typography>

      <Grid container spacing={10} sx={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={12} sm={3}>
        <Card sx={{ maxWidth: "100%"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Uni}
        sx={{objectFit: "contain",marginTop:"10px"}}
      />
      <CardContent>
        <Typography  variant="h6" component="div">
University of Punjab
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
        Bachelor of Business & Information Technology
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
    </div>
  );
}

export default Summary;
