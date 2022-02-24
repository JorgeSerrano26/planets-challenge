import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Planets from '../service/Planets';

interface Planet {
  "name": string,
  "overview": {
    "content": string,
    "source": string
  },
  "structure": {
    "content": string,
    "source": string
  },
  "geology": {
    "content": string,
    "source": string
  },
  "rotation": string,
  "revolution": string,
  "radius": string,
  "temperature": string,
  "images": {
    "planet": string,
    "internal": string,
    "geology": string
  }
}
interface IHome {
  planets: Planet[]
}

const Home: NextPage<IHome> = ({ planets = [] }) => {

  return (
    <div className={styles.container}>
      <img src="/assets/background-stars.svg" />
      {planets.map(({ name, images }, index) => <img key={`image-${name}-${index}`} src={images.planet} alt={name} />)}
    </div>
  )
}

export async function getServerSideProps(_ctx: NextPageContext) {
  const planets = await Planets.get();

  return {
    props: {
      planets
    }
  }
}

export default Home
