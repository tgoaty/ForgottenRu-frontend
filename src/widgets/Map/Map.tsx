import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import styles from "./Map.module.css"

const Map = () => {
    return (
        <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;