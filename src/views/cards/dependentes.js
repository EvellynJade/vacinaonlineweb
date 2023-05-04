// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardDependentes = () => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: theme => `${theme.spacing(2.75, 4, 2.25)} !important`
        }}
      >
        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
          Meus Dependentes
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 4 }}>
          Página contendo as informações dos meus dependentes.
        </Typography>
        <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
          Entrar
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardDependentes
