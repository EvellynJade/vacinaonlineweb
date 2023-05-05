// ** React Imports
import { useState, Fragment, forwardRef } from 'react'

// ** Next Imports
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
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

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// ** Configs
import themeConfig from '@/configs/theme';

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Data de Nascimento' fullWidth {...props} />
})

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

const RegisterPage = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const [date, setDate] = useState(null)

  // ** Hook
  const theme = useTheme()

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
                    width={90}
                    height={90}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.0 }}>
                    Vamos fazer o seu cadastro 🚀
                  </Typography>
                  <Typography variant='body2'>Torne o gerenciamento da sua vacina mais fácil!</Typography>
                </Box>
                <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                  <TextField autoFocus fullWidth id='username' label='Nome' sx={{ marginBottom: 2 }} />
                  <TextField autoFocus fullWidth id='cpf' label='Cpf' sx={{ marginBottom: 2 }} helperText='Somente números' />
                  <DatePickerWrapper sx={{ marginBottom: 2 }}>
                    <DatePicker
                      selected={date}
                      showYearDropdown
                      showMonthDropdown
                      id='account-date'
                      placeholderText='MM-DD-YYYY'
                      customInput={<CustomInput />}
                      onChange={date => setDate(date)}
                    />
                  </DatePickerWrapper>
                  <TextField fullWidth type='email' label='Email' sx={{ marginBottom: 2 }} />
                  <FormControl fullWidth>
                    <InputLabel htmlFor='auth-register-password'>Senha</InputLabel>
                    <OutlinedInput
                      label='Password'
                      value={values.password}
                      id='auth-register-password'
                      onChange={handleChange('password')}
                      type={values.showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label='toggle password visibility'
                          >
                            {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControlLabel 
                    sx={{ marginBottom: 2 }}
                    control={<Checkbox />}
                    label={
                      <Fragment>
                        <span>Eu concordo</span>
                        <Link href='/' passHref legacyBehavior >
                          <LinkStyled onClick={e => e.preventDefault()}> Política de privacidade e Termos</LinkStyled>
                        </Link>
                      </Fragment>
                    }
                  />
                  <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 3 }}>
                    Inscrever-se
                  </Button>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography variant='body2' sx={{ marginRight: 1 }}>
                      Já tem uma conta?
                    </Typography>
                    <Typography variant='body2'>
                      <Link passHref legacyBehavior  href='/login'>
                        <LinkStyled>Faça login em vez disso</LinkStyled>
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


export default RegisterPage
