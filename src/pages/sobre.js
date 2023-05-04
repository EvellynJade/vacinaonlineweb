// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import FooterContent from "@/components/footer/footer";

// ** Demo Components Imports
import NavBar from "@/components/navBar/navbar";
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

const CardNavigationCenter = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <NavBar></NavBar>
        <Image
            src="/images/home_vacina.jpeg"
            alt="Vacina"
            className={styles.vacina}
            width={1310}
            height={400}
            priority
        />
        <Card>
        <TabContext value={value}>
            <TabList centered onChange={handleChange} aria-label='card navigation example'>
            <Tab value='1' label='Sobre' />
            <Tab value='2' label=' Desenvolvedores' />
            </TabList>
            <CardContent sx={{ textAlign: 'center' }}>
            <TabPanel value='1' sx={{ p: 0 }}>
                <Typography variant='h6' sx={{ marginBottom: 2 }}>
                O que fazemos?
                </Typography>
                <Typography variant='body2' sx={{ marginBottom: 4 }}>
                A página web do Vacina Online deve disponibilizar para o usuário, o acompanhamento 
                do histórico de vacinas já realizadas e as faltantes, substituindo assim o 
                cartão físico de vacinação. Deve atingir todos os grupos de usuários, 
                dos mais jovens aos mais velhos, possibilitando um melhor controle e segurança 
                das informações de vacinação, facilitando também o trabalho do profissional de saúde, 
                ou seja, auxilia o gerenciamento das vacinas das pessoas, 
                trazendo interfaces e funcionalidades simples e prática, visando uma utilização 
                fácil por meio do usuário, trazendo uma boa interface do usuário (UI) e, com isso, 
                criar uma melhor experiência do usuário (UX).
                </Typography>
            
            </TabPanel>
            
            <TabPanel value='2' sx={{ p: 0 }}>
                <Typography variant='h6' sx={{ marginBottom: 2 }}>
                O projeto de desenvolvimento de um sistema web para vacinação é uma iniciativa 
                criada pela equipe composta pelos estudantes:
                </Typography>
                <Typography variant='body2' sx={{ marginBottom: 4 }}>
                    -Evellyn Jade de Cerqueira
                    -Giselle Santos Ferreira
                    -Ivan Gomes Ferreira Junior
                    -Marlisson Alves Dos Santos
                    -Vinicius Bispo De Jesus
                </Typography>
            
            </TabPanel>
            </CardContent>
        </TabContext>
        </Card>

        <FooterContent></FooterContent>
    </>
  )
}

export default CardNavigationCenter
