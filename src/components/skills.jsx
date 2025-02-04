import { Box, Typography, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Skillsbg from "../../img/Skills.jpg";

const skills = [
  "Node.js",
  "HTML5",
  "MySQL",
  "Express.js",
  "CSS",
  "Bootstrap",
  "React.js",
  "JavaScript",
  "MongoDB",
  "Material UI",
  "Problem Solving",
  "Redux",
  "REST API",
  "Git",
  "WebSockets",
];


function Skills() {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
           maxHeight: "900px",
            position: "relative",
            backgroundImage: `url(${Skillsbg})`,
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
              Skills
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              {skills.map((skill, index) => (
                <Grid item xs={6} sm={6} md={4} key={index} sx={{ display: "flex", alignItems: "center",mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center",marginLeft:"30%"  }}>
                    <CheckCircleIcon sx={{ color: "#4CAF50", marginRight: 1 }} />
                    <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" } }}>{skill}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Skills;