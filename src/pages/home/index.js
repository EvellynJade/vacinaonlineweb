// ** MUI Imports
import Grid from '@mui/material/Grid';

// ** Components Imports
import CardsHome from '@/components/cardsHome'
// import NavBar from "@/components/navBar";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>
      {/* <NavBar></NavBar> */}
      <Grid container spacing={6}>
        <Grid item xs={12} md={3}>
          <CardsHome
            titulo="oii"
            descricao="aaaaa"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardsHome
            titulo="oii"
            descricao="bbbbbb"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardsHome
            titulo="oii"
            descricao="ccccc"
          />
        </Grid>
      </Grid>
      <Footer/>
    </>
  )
}