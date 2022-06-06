import styles from "../styles/infoBlock.module.css";

const InfoBlock = () => {
    return (
    <section className={styles.info}>
        <div className={styles["info-wrapper"]}>
            <div className={styles["info-item"]}>
                <h3>IP ADDRESS</h3>
                <p>192.212.174.101</p>
            </div>
            <div className={styles["info-item"]}>
                <h3>LOCATION</h3>
                <p>Brooklyn, NY 10001</p>
            </div>
            <div className={styles["info-item"]}>
                <h3>TIMEZONE</h3>
                <p>UTC -05:00</p>
            </div>
            <div className={styles["info-item"]}>
                <h3>ISP</h3>
                <p>SpaceX Starlink</p>
            </div>
        </div>
    </section>)
}

export default InfoBlock;