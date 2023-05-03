// ** MUI Imports
import Grid from '@mui/material/Grid';

// ** Demo Components Imports
import CardVacinas from 'src/components/cards/vacinas';
import CardDependentes from '@/components/cards/dependentes';
import CardSobre from '@/components/cards/sobre';
import CardPerfil from '@/components/cards/perfil';
import NavBar from "@/components/navBar/navbar";
import FooterContent from "@/components/footer/footer";


export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      
        <Grid container spacing={6}>
          <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardPerfil />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardVacinas />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardDependentes />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardSobre />
          </Grid>
        </Grid>

      <FooterContent></FooterContent>
    </>
  )
}