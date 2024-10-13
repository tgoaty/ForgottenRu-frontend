import {MapContainer, TileLayer} from "react-leaflet";
import styles from "./Map.module.css"
import {useEffect, useState} from "react";
import {MarkI} from "../../shared/types/main-types.ts";
import axios from "axios";
import {endpoints} from "../../shared/api/api-config.ts";
import MarkOnMap from "../../entities/MarkOnMap/MarkOnMap.tsx";

const Map = () => {
    const [marks, setMarks] = useState<null | MarkI[]>(null);
    useEffect(() => {
        axios.get(endpoints.marks)
            .then(result => setMarks(result.data));
    }, [])

    return (
        <MapContainer className={styles.map} center={[53.350, 83.776]} zoom={16} scrollWheelZoom={false}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marks && marks.map((mark) => (
                <div key={mark.id}><MarkOnMap id={mark.id} lat={mark.lat} lng={mark.lng} date={mark.date}
                                              title={mark.title}/></div>))}
        </MapContainer>
    );
};

export default Map;