// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

export default function Navigation() {
  return [
    {
      title: 'Início',
      icon: HomeOutline,
      path: '/typography'
    },
    {
      title: 'Configurações de Conta',
      icon: AccountCogOutline,
      path: '/pages/perfil'
    },
    {
      icon: Login,
      title: 'Sair',
      path: ''
    }
  ]
}


