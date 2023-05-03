// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from '@/configs/theme';

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

export default function Login() {
  // ** State
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <>
      <Box className='layout-wrapper' sx={{
        height: '100vh',
        backgroundColor: themeConfig.palette.secondary.light,
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(5)
      }}>
        <Box className='app-content' sx={{ overflowX: 'hidden', position: 'relative' }} >
          <Box className='content-center'>
            <Card sx={{ zIndex: 1 }}>
              <CardContent sx={{ padding: '2rem !important' }}>
                <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/images/logos/vacinalogo-removebg.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                  />
                </Box>
                <Box sx={{ mb: 2}}>
                  <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.0 }}>
                    Bem Vindo ao {themeConfig.templateName}! 👋🏻
                  </Typography>
                  <Typography variant='body2'>Por favor, entrar com sua conta</Typography>
                </Box>
                <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                  <TextField autoFocus fullWidth id='email' label='Email' sx={{ marginBottom: 2 }} />
                  <FormControl fullWidth>
                    <InputLabel htmlFor='auth-login-password'>Senha</InputLabel>
                    <OutlinedInput
                      label='password'
                      value={values.password}
                      id='auth-login-password'
                      onChange={handleChange('password')}
                      type={values.showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label='Alternar a visibilidade da senha'
                          >
                            {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Box
                    sx={{ mb: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
                  >
                    <FormControlLabel control={<Checkbox />} label='Lembre de mim' />
                    <Link passHref legacyBehavior href='/'>
                      <LinkStyled onClick={e => e.preventDefault()}>Esqueceu a senha?</LinkStyled>
                    </Link>
                  </Box>
                  <Button
                    fullWidth
                    size='large'
                    variant='contained'
                    sx={{ marginBottom: 4 }}
                    onClick={() => router.push('/')}
                  >
                    Entrar
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography variant='body2' sx={{ marginRight: 1 }}>
                      Novo em nossa plataforma?
                    </Typography>
                    <Typography variant='body2'>
                      <Link passHref legacyBehavior href='/pages/register'>
                        <LinkStyled>Criar Conta</LinkStyled>
                      </Link>
                    </Typography>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  )
}


