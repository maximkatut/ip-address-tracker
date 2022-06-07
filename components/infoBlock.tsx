import { IData } from "../pages";
import styles from "../styles/infoBlock.module.css";

const InfoBlock = ({ data }: { data: IData }) => {
  const { ip, location, isp } = data;
  const { region, city, postalCode, timezone } = location;
  return (
    <section className={styles.info}>
      <div className={styles["info-wrapper"]}>
        <div className={styles["info-item"]}>
          <h2>IP ADDRESS</h2>
          <p>{ip}</p>
        </div>
        <div className={styles["info-item"]}>
          <h2>LOCATION</h2>
          <p>
            {city}, {region} {postalCode}
          </p>
        </div>
        <div className={styles["info-item"]}>
          <h2>TIMEZONE</h2>
          <p>UTC {timezone}</p>
        </div>
        <div className={styles["info-item"]}>
          <h2>ISP</h2>
          <p>{isp}</p>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
