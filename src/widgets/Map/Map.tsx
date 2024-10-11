import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import styles from "./Map.module.css"

const Map = () => {
    return (
        <MapContainer className={styles.map} center={[53.350, 83.776]} zoom={16} scrollWheelZoom={false}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[53.7454, 84.8744]}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;