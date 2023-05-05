// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 1,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align='center'>
            {'Copyright © '}
              Vacina Online
            {' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>  
        </Container>
      </Box>
    </Box>
  )
}