import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';

import styles from "../styles/map.module.css";
import 'leaflet/dist/leaflet.css';

const myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconAnchor: [23, 56]
});

const MapBlock = () => {
    return (
        <MapContainer className={styles["map-container"]} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} icon={myIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
 
export default MapBlock;