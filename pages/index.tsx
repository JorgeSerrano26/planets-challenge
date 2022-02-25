import type { NextPage, NextPageContext } from 'next'
import styles from '../styles/Home.module.scss'
import Planets from '../service/Planets';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { AppProvider } from '../contexts/appContext';
import { TPlanet } from '../types/global';

interface IHome {
  planets: TPlanet[]
}

const Home: NextPage<IHome> = ({ planets = [] }) => {
  return (
    <AppProvider planets={planets}>
      <Layout>
        <div className={styles.app}>
          <Header />
          {/*Content*/}
        </div>
      </Layout>
    </AppProvider>
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
