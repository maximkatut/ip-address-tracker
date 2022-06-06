import { IData } from "../pages";
import styles from "../styles/infoBlock.module.css";

const InfoBlock = ({ data }: { data: IData }) => {
  const { ip, location, isp } = data;
  const { region, city, postalCode, timezone } = location;
  return (
    <section className={styles.info}>
      <div className={styles["info-wrapper"]}>
        <div className={styles["info-item"]}>
          <h3>IP ADDRESS</h3>
          <p>{ip}</p>
        </div>
        <div className={styles["info-item"]}>
          <h3>LOCATION</h3>
          <p>
            {city}, {region} {postalCode}
          </p>
        </div>
        <div className={styles["info-item"]}>
          <h3>TIMEZONE</h3>
          <p>UTC {timezone}</p>
        </div>
        <div className={styles["info-item"]}>
          <h3>ISP</h3>
          <p>{isp}</p>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
