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
    <Box sx={{ marginBottom: "80px", textAlign: "center" ,   marginTop:location.pathname === "/education"? `70px`: "none"}}>
      <Typography
        variant="h4"
        sx={{
          textShadow: "3px 3px 5px rgba(0,0,0,0.4)",
          my: "70px",
          fontSize: "40px",
          fontWeight: "bold"
        }}
      >
        Education
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {/** University Card */}
        <Grid item>
          <Card
            sx={{
              width: 320,
              boxShadow: 4,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 8,
                transform: "scale(1.05)",
                borderTop: "8px solid #0093dd",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="University of Punjab"
              height="140"
              image={Uni}
              sx={{ objectFit: "contain", marginTop: "10px" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                University of Punjab
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Bachelor of Business & Information Technology
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "text.secondary",
                  mt: 1,
                }}
              >
                 2021 – Present
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                Currently in the 8th semester, specializing in IT, with a focus on software development, data analytics, and modern web technologies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              width: 320,
              boxShadow: 4,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 8,
                transform: "scale(1.05)",
                borderTop: "8px solid #ef444b",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="Punjab Group of Colleges"
              height="140"
              image={Clg}
              sx={{ objectFit: "contain", marginTop: "10px" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Punjab Group of Colleges
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Intermediate in Computer Science (ICS)
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "text.secondary",
                  mt: 1,
                }}
              >
                2019 – 2021
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
              Specialized in Computer Science and Statistics, gaining a strong foundation in programming and logical reasoning. Scored 989 out of 1100.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mumtaz Grammar School */}
        <Grid item>
          <Card
            sx={{
              width: 320,
              boxShadow: 4,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 8,
                transform: "scale(1.05)",
                borderTop: "8px solid #1f1a17",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="Mumtaz Grammar School"
              height="140"
              image={School}
              sx={{ objectFit: "contain", marginTop: "10px" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Mumtaz Grammar School
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", textAlign: "center" }}>
              Matriculation in the Field of Computer Science
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "text.secondary",
                  mt: 1,
                }}
              >
                2017 – 2019
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                Developed strong problem-solving skills and gained early exposure to programming and computational thinking. Scored 931 out of 1100.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
