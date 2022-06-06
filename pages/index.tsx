import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic'

import SearchForm from '../components/searchForm';
import InfoBlock from '../components/infoBlock';
import styles from "../styles/home.module.css"

const title = 'IP Address Tracker';

const Map = dynamic(() => import('../components/mapBlock'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <main className={styles.main}>
        <SearchForm title={title}/>
        <InfoBlock/>
        <Map />
      </main>

      <footer className={styles.footer}>
        <p className={styles.description}>Developed by <a href="https://maxbaravy.com">Max Baravy</a></p>
      </footer>
    </div>
  )
}

export default Home;
