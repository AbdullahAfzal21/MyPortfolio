import {  CardContent, Typography, Grid, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const CareerObjectives = () => {
  const objectives = [
    "To become a proficient full-stack developer by  modern web technologies like React, Node.js, and MongoDB.",
    "To contribute to innovative web applications by building efficient, scalable, and user-friendly solutions.",
    "To continuously enhance my problem-solving skills in JavaScript, React, and backend development.",
    "To gain expertise in API development, authentication, and state management using JWT, Redux, and Express.js.",
    "To work in a dynamic environment where I can learn, grow, and apply my technical skills to real-world projects.",
    "To explore advanced topics like cloud computing, microservices, and DevOps for scaling web applications .",
    "To stay updated with the latest trends in web development and implement best practices for optimized performance."
  ];
  const location = useLocation();
  return (
    <Box sx={{ width: "100%",   py: 7, px:4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",marginTop:location.pathname === "/objective"? `50px`: "none"  }}>
      <Typography
        variant="h4"
        sx={{
          textShadow: "3px 3px 5px rgba(0,0,0,0.4)",
          textAlign: "center",
       my:4,
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        Objectives
      </Typography>


        <CardContent>
          <Grid container spacing={2} justifyContent="center">
            {objectives.map((objective, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}  >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: 2,
                    bgcolor: "#ffffff",
                    borderRadius: 2,
                    boxShadow: 2,
                    borderTop: "10px solid #121212", mt: 2 ,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.05)" ,    borderTop: "10px solid #121212"},
                  }}
                >
                  <Typography variant="body2">{objective}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>

    </Box>
  );
};

export default CareerObjectives;
