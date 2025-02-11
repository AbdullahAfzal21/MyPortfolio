import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
import Uni from "../../img/pu.png";
import Clg from "../../img/punjab college logo.svg";
import School from "../../img/mgs.png";
import { useLocation } from 'react-router-dom';

function Education() {
  const location = useLocation();

  return (
    <Box sx={{ marginBottom: "80px", textAlign: "center", marginTop: location.pathname === "/education" ? "70px" : "none" }}>
      <Typography
        variant="h4"
        sx={{
          textShadow: "3px 3px 5px rgba(0,0,0,0.4)",
          my: "70px",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        Education
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {[{
          img: Uni,
          alt: "University of Punjab",
          title: "University of Punjab",
          degree: "Bachelor of Business & Information Technology",
          year: "2021 – Present",
          description: "Currently in the 8th semester, specializing in IT, with a focus on software development, data analytics, and modern web technologies.",
          borderColor: "#0093dd"
        },
        {
          img: Clg,
          alt: "Punjab Group of Colleges",
          title: "Punjab Group of Colleges",
          degree: "Intermediate in Computer Science (ICS)",
          year: "2019 – 2021",
          description: "Specialized in Computer Science and Statistics, gaining a strong foundation in programming and logical reasoning. Scored 989 out of 1100.",
          borderColor: "#ef444b"
        },
        {
          img: School,
          alt: "Mumtaz Grammar School",
          title: "Mumtaz Grammar School",
          degree: "Matriculation in the Field of Computer Science",
          year: "2017 – 2019",
          description: "Developed strong problem-solving skills and gained early exposure to programming and computational thinking. Scored 931 out of 1100.",
          borderColor: "#1f1a17"
        }].map((edu, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                width: 320,
                boxShadow: 4,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 8,
                  transform: "scale(1.05)",
                  borderTop: `8px solid ${edu.borderColor}`,
                },
              }}
            >
              <CardMedia
                component="img"
                alt={edu.alt}
                height="140"
                image={edu.img}
                sx={{ objectFit: "contain", marginTop: "10px" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.2rem" }}>
                  {edu.title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1rem", mt: 1 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center", fontStyle: "italic", color: "text.secondary", mt: 1 }}>
                  {edu.year}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 2, fontSize: "0.9rem" }}>
                  {edu.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Education;
