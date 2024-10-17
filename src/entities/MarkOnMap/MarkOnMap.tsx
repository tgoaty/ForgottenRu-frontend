import {Marker, Popup} from "react-leaflet";
import {MarkI} from "../../shared/types/main-types.ts";
import {FC} from "react";
import L from "leaflet";

const createMarkerIcon = (type: string) => {
    return new L.Icon({
        iconUrl: `/markIcons/${type}`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
};


const MarkOnMap: FC<MarkI> = ({id, date, lat, lng, images, title, type, description}) => {
    const markerIcon = createMarkerIcon(type)
    return (
        <Marker icon={markerIcon} key={id} position={[lat, lng]}>
            <Popup>
                {
                    images !== undefined && <img src={images[0]} alt="image of place"/>
                }
                <h3>{title}</h3>
                {
                    description !== undefined && <p>{description}</p>
                }
                <p>{date}</p>
            </Popup>
        </Marker>
    );
};

export default MarkOnMap;