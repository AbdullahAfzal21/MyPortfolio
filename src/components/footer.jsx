import { Box, Typography, Link} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: { xs: '10px', sm: '0' } }}>
        © 2025 Abdullah Afzal. All rights reserved.
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row' },
          alignItems: 'center',
          marginBottom: { xs: '10px', sm: '0' },
        }}
      >
        <Link href="https://github.com/AbdullahAfzal21" target="_blank" sx={{ color: 'white', margin: '10px' }}>
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/abdullah-afzal-344960270/" target="_blank" sx={{ color: 'white', margin: '10px' }}>
          <LinkedInIcon />
        </Link>
        <Link href="mailto:abdullah.bhatti32176@gmail.com" sx={{ color: 'white', margin: '10px' }}>
          <EmailIcon />
        </Link>
        <Link href="tel:+923150783267" sx={{ color: 'white', margin: '10px' }}>
          <PhoneIcon />
        </Link>
      </Box>


    </Box>
  );
}

export default Footer;
