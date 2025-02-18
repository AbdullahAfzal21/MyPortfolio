import { Container, Grid, Typography, Box } from "@mui/material";
import Seebiz from "../../img/seebiz.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Experience() {

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const location = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: location.pathname === "/experience" ? { xs: "70px", md: "60px" } : "none",
        px: { xs: 2, sm: 3, md: 5 },
        pt: { xs: 7, md: 9 },
        pb: { xs: 6, md: 9 }
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textShadow: "3px 3px 5px rgba(0,0,0,0.4)",
          textAlign: "center",
          fontSize: { xs: "37px", sm: "38px", md: "40px" },
          mb: { xs: 8, md: 8 },
          fontWeight: "600",
        }}
      >
        Experience
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            sx={{ mb: { xs: 3, md: 0 } }}
          >
            <Box
              component="img"
              src={Seebiz}
              alt="Seebiz logo"
              sx={{
                width: { xs: "130px", sm: "150px", md: "200px" },
                height: { xs: "130px", sm: "150px", md: "200px" },
                borderRadius: "50%",
                boxShadow: 3,
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }}>
              <Box>
                <Typography variant="h6" fontWeight="600" sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem" } }}>
                  Seebiz Pvt Limited
                </Typography>
                <Typography variant="body1" sx={{ my: "3px", fontSize: { xs: "1rem", sm: "1rem" } }}>
                  MERN Stack Trainee
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" }, pt: 1, textAlign: { xs: "left", sm: "right" } }}>
                  Aug 2024 – Feb 2025
                  <br />
                  Lahore, Pakistan
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" color="black" sx={{ mt: 2, fontSize: { xs: "1rem", sm: "1rem" }, lineHeight: { xs: 1.4, sm: 1.6 }, textAlign: "justify", fontWeight: "500" }}>
              I completed MERN Stack (MongoDB, Express.js, React.js, Node.js) training at Seebiz Pvt. Limited, where I gained extensive experience in full-stack web development. The training lasted 6 months, divided into structured phases. The first 1.5 months focused on HTML, CSS, and JavaScript, covering DOM manipulation and responsive design using Bootstrap and MUI. The next 1 month was dedicated to Advanced JavaScript, exploring ES6+ features, asynchronous programming, and APIs. The final 3.5 months were centered on MERN Stack, where I built multiple applications, worked on RESTful APIs, and developed a live project. This hands-on experience enhanced my skills in backend and frontend integration, database management, and modern web development practices.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Experience;