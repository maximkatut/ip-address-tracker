import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";

import styles from "../styles/map.module.css";
import "leaflet/dist/leaflet.css";

interface ILatLng {
  lat: number;
  lng: number;
}

const myIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconAnchor: [23, 56],
});

const MapUpdater = (latLng: ILatLng) => {
  const map = useMap();
  map.flyTo(latLng);
  return <></>;
};

const MapBlock = ({ lat, lng }: ILatLng) => {
  return (
    <MapContainer
      className={styles["map-container"]}
      center={[lat, lng]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={myIcon} />
      <MapUpdater lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default MapBlock;
