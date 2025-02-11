import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Avatar, Typography } from '@mui/material';
import Education from './education';
import Skills from './skills';
import Experience from './experience';
import Objective from './objective';
import Projects from './projects';
import Homebg from "../../img/coding-background.jpg";
import Avatarpic from "../../img/1735124747507.jpg";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "520px", md: "650px" }, 
            position: "relative",
            backgroundImage: `url(${Homebg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.75)", 
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              color: "white",
              zIndex: 1,
              padding: { xs: "15px", md: "20px" }, 
              textAlign: "center",
              width: { xs: "90%", sm: "80%", md: "60%" }, 
              borderRadius: "12px",
              backgroundColor: "rgba(0,0,0,0.3)", 
              boxShadow: "0px 4px 15px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Abdullah Afzal"
              src={Avatarpic}
              sx={{
                width: { xs: 110, sm: 140, md: 200 }, height: { xs: 110, sm: 140, md: 200 },
                mb: 2,
              }}
            />
            <Typography 
              variant="h4" 
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }, 
                fontWeight: "bold", 
                mb: 1,
                textShadow: "2px 2px 5px rgba(0,0,0,0.4)" 
              }}
            >
              MERN Stack Developer
            </Typography>
            <Typography 
              variant='body1' 
              sx={{ 
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" }, 
                mb: 2, 
                mt: 1,
                lineHeight: 1.6 
              }}
            >
 Skilled in creating dynamic web applications using React, back-end technologies such as Node.js with Express , and databases including MongoDB and SQL . Passionate about building scalable, user-focused solutions.
            </Typography>
          </Box>
        </Box>


        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Objective />
      </Box>
    </>
  );
};

export default Home;
