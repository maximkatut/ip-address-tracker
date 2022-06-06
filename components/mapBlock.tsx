import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import styles from "../styles/map.module.css";
import "leaflet/dist/leaflet.css";

const myIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconAnchor: [23, 56],
});

const MapBlock = ({ lat, lng }: { lat: number; lng: number }) => {
  console.log(lat, lng);
  return (
    <MapContainer
      className={styles["map-container"]}
      center={[lat, lng]}
      zoom={9}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={myIcon} />
    </MapContainer>
  );
};

export default MapBlock;
