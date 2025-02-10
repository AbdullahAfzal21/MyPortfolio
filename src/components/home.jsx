import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Avatar, Typography } from '@mui/material';
import Education from './education';
import Skills from './skills';
import Experience from './experience';
// import Education from './education';

import Objective from './objective';
import Projects from './projects';
import Homebg from "../../img/coding-background.jpg"
import Avatarpic from "../../img/1735124747507.jpg"


const Home = () => {
  return (
    <>
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
        height: "600px",
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
            backgroundColor: "black",
            opacity: 0.8,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            color: "white",
            zIndex: 1,
            padding: "20px",
            textAlign: "center",
            width: { xs: "80%", sm: "80%", md: "70%" },
            borderRadius: "10px",
            backgroundColor: "rgba(0,0,0,0.2)",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Abdullah Afzal"
            src={Avatarpic}
            sx={{ width: { xs: 120, sm: 150, md: 200 }, height: { xs: 120, sm: 150, md: 200 }, mb: 2 }}
          />
          <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Mern Stack Developer</h1>
          <Typography variant='body1' sx={{ fontSize: {xs:"1rem", sm: "1.1rem", md: "1.3rem"}, mb: 2 ,mt: 1}}>
          Skilled in creating dynamic web applications using modern front-end frameworks like React , back-end technologies such as Node.js with Express
, and databases including MongoDB and SQL . Passionate about building scalable, user-focused solutions.
          </Typography>
        </Box>
      </Box>
      <Education/>
      <Skills />
      <Experience />
      <Projects/>
        <Objective/>
        </Box>
    </>
  );
};

export default Home;
