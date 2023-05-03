// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'

const AppBar = () => {
  return [
    {
      title: 'Página Inicial',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Meu Perfil',
      icon: AccountCogOutline,
      path: '/'
    },
    {
      sectionTitle: 'Pages'
    },
    {
        title: 'Cadastrar Dependentes',
        icon: AccountPlusOutline,
        path: '/pages/register',
        openInNewTab: true
    },
    {
      title: 'Sair',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    }
  ]
}

export default AppBar
