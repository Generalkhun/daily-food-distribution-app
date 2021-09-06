import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
interface Props {}

const MapWithHomeLocations = (props: Props) => {
  return (
    <MapContainer
      style={{ height: "90vh", width: "100%" }}
      center={[13.684634695264908, 100.47727857693796]}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[13.684634695264908, 100.47727857693796]}>
        <Popup>
          <p>
            A pretty CSS3 popup. <br /> Easily customizable.
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithHomeLocations;
