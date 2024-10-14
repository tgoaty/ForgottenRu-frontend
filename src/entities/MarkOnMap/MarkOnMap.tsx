import {Marker, Popup} from "react-leaflet";
import {MarkI} from "../../shared/types/main-types.ts";
import {FC} from "react";

const MarkOnMap: FC<MarkI> = ({id, date, lat, lng, images, title, description}) => {
    return (
        <Marker key={id} position={[lat, lng]}>
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