import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import { initialState } from "../const";
import SearchForm from "../components/searchForm";
import InfoBlock from "../components/infoBlock";
import styles from "../styles/home.module.css";
import { detectAdBlock } from "../utils/adBlockerChecker";

const title = "IP Address Tracker";

const Map = dynamic(() => import("../components/mapBlock"), { ssr: false });

export interface IData {
  ip: string;
  location: {
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
  isp: string;
}

const Home: NextPage = () => {
  const [isAdBlock, setIsAdBlock] = useState<boolean>(false);
  useEffect(() => {
    detectAdBlock().then((isAdBlock) => {
      setIsAdBlock(isAdBlock);
    });
  }, []);
  const [data, setData] = useState<IData>(initialState);
  return (
    <div className={styles.container}>
      {isAdBlock && (
        <div className={styles.popup}>Please, turn off AdBlocker!</div>
      )}
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchForm title={title} setData={setData} />
        <InfoBlock data={data} />
        <Map lat={data.location.lat} lng={data.location.lng} />
      </main>

      <footer className={styles.footer}>
        <p className={styles.description}>
          Developed with ❤️ by <a href="https://maxbaravy.com">Max Baravy</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
