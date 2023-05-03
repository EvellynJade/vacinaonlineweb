import NavBar from "@/components/navBar/navbar";
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const inter = Inter({ subsets: ['latin'] });

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Image
        src="/images/home_vacina.jpeg"
        alt="Imagem Inicial"
        width={1330}
        height={350}
      />
      <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Meu Perfil <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Página contendo o perfil do usuário e todas as suas informações.
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Vacinas <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Página contendo a sua carteira de vacinação. 
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Dependentes <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Página contendo as informações dos seus dependentes. 
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Sobre <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Página contendo as informações sobre o Vacina Online. 
            </p>
          </a>
      </div>
    </>
  )
}