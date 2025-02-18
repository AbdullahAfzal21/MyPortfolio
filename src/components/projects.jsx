import { Box, Typography, Grid, Card, Button, CardActions, CardContent, CardMedia } from "@mui/material";

// Import Images
import Speedo from "../../img/speedo.jpg";
import SocialApp from "../../img/social app.jpg";
import Livep from "../../img/livep.jpg";

import Projectbg from "../../img/web-project.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Project() {
  const location = useLocation();
     useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%",  marginTop:location.pathname === "/projects"? `60px`: "none"}}>
      {/* Background Section */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
    backgroundImage: location.pathname !== "/projects" ? `url(${Projectbg})` : "none",
    backgroundColor: location.pathname === "/projects" ? "#FFFFFF" : "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingBottom: "80px",
          display: "flex",
          justifyContent: "center",
          "::before":location.pathname !== "/projects" && {
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
            color:  location.pathname === "/projects"? `black`: "white",
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
              fontSize: { xs: "37px", sm: "38px", md: "40px" },
              py: "70px",
              fontWeight: "bold",
            }}
          >
            Projects
          </Typography>

          {/* Grid Section */}
          <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
    <Card sx={{ maxWidth: 320, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" }, overflow: "hidden", margin: "auto" }}>
      <CardMedia component="img" alt="Punjab College" height="160" image={Speedo} sx={{ objectFit: "cover", marginTop: "0px" }} />
      <CardContent>
        <Typography gutterBottom variant="h6">Speedo Bus Route System</Typography>
        <Typography gutterBottom variant="body2">HTML, CSS, DOM, JavaScript</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "justify" }}>
  Worked on a project where users can input their <span style={{ fontWeight: 'bold' }}>desired stops</span> to receive accurate <span style={{ fontWeight: 'bold' }}>bus numbers</span> and <span style={{ fontWeight: 'bold' }}>routes</span> for Speedo buses. This project enhanced my problem-solving and backend development skills.
</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>Sep 2024 – Sep 2024</Typography>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
    <Card sx={{ maxWidth: 320, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" }, overflow: "hidden", margin: "auto" }}>
      <CardMedia component="img" alt="Punjab College" height="160" image={SocialApp} sx={{ objectFit: "cover", marginTop: "0px" }} />
      <CardContent>
        <Typography gutterBottom variant="h6">Social App</Typography>
        <Typography gutterBottom variant="body2">MongoDB, Express, React, Node</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "justify" }}>
  Developed a <span style={{ fontWeight: 'bold' }}>MERN-stack social media app</span> with features like 
  <span style={{ fontWeight: 'bold' }}>sign-up</span>, 
  <span style={{ fontWeight: 'bold' }}>login</span>, 
  <span style={{ fontWeight: 'bold' }}>profile management</span>, 
  <span style={{ fontWeight: 'bold' }}>post creation</span>, and <span style={{ fontWeight: 'bold' }}>liking</span>  
   and <span style={{ fontWeight: 'bold' }}>interactions</span>.
  This project enhanced my backendand full-stack development skills
</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>Nov 2024 – Nov 2024</Typography>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
    <Card sx={{ maxWidth: 320, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" }, overflow: "hidden", margin: "auto" }}>
      <CardMedia component="img" alt="Punjab College" height="160" image={Livep} sx={{ objectFit: "cover", marginTop: "0px" }} />
      <CardContent>
        <Typography gutterBottom variant="h6">HRM Attendance Module</Typography>
        <Typography gutterBottom variant="body2">MUI, JavaScript, Node, MongoDB, React</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" ,textAlign: "justify"}}>
  Worked on the <span style={{ fontWeight: 'bold' }}>HRM Attendance module</span>, implementing features like 
  <span style={{ fontWeight: 'bold' }}> file uploads</span>, 
  <span style={{ fontWeight: 'bold' }}> date filters</span>, and 
  <span style={{ fontWeight: 'bold' }}> record filters</span>.
  Developed <span style={{ fontWeight: 'bold' }}>graphs</span> for visualizing attendance data and improving user experience.
</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>Dec 2024 – Jan 2025</Typography>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
</Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
