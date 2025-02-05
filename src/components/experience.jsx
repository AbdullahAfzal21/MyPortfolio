import { Container, Grid, Typography, Box } from "@mui/material";
import Seebiz from "../../img/seebiz.png";

function Experience() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3, 
        pt: {xs: 8, md: 0},
        pb: {xs: 3, md: 0}
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textShadow: "3px 3px 5px rgba(0,0,0,0.4)",
          textAlign: "center",
          fontSize: { xs: "36px", md: "40px" }, 
          mb: 10,
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
                width: { xs: "180px", md: "250px" }, 
                height: { xs: "180px", md: "250px" },
                borderRadius: "50%",
                boxShadow: 3,
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box display={{ xs: "flex",justifyContent: "space-between" }}>
              <Box>
            <Typography variant="h5" fontWeight="bold">
              Seebiz Pvt Limited
            </Typography>
            <Typography variant="h6" sx={{ my: "5px" }}>
              MERN Stack Trainee
            </Typography>
            </Box>
            <Box>
            <Typography variant="body1"  sx={{fontSize:{xs:"0.9rem" , md: "1rem"},pt: 1}}>
            Aug 2024 – Feb 2025
      <br />

              Lahore, Pakistan
            </Typography>
            </Box>

            </Box>
            <Typography variant="body1" color="black" sx={{ mb: 3 }}>
              I completed <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong> training at Seebiz Pvt. Limited, where I gained extensive experience in full-stack web development. The training lasted <strong>6 months</strong>, divided into structured phases. The first <strong>1.5 months</strong> focused on <strong>HTML, CSS, and JavaScript</strong>, covering <strong>DOM manipulation</strong> and responsive design using <strong>Bootstrap</strong> and <strong>MUI</strong>. The next <strong>1 month</strong> was dedicated to <strong>Advanced JavaScript</strong>, exploring ES6+ features, asynchronous programming, and APIs. The final <strong>3.5 months</strong> were centered on <strong>MERN Stack</strong>, where I built multiple applications, worked on <strong>RESTful APIs</strong>, and developed a <strong>live project</strong>. This hands-on experience enhanced my skills in backend and frontend integration, database management, and modern web development practices.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Experience;
