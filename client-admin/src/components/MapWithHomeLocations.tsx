import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  CircleMarker,
} from "react-leaflet";

import { VillagerHomeData } from "../type";
import "leaflet/dist/leaflet.css";
interface Props {
  mapCenterLocation: [number, number];
  villagerHomeListData: Array<VillagerHomeData>;
  onClickVillager: (villager: VillagerHomeData) => void;
}
const compareLatLng = (
  latlngA: [number, number],
  latlngB: [number, number]
) => {
  if (latlngA[0] === latlngB[0] && latlngA[1] === latlngB[1]) {
    return true;
  }
  return false;
};

const MapWithHomeLocations = (props: Props) => {
  function ChangeView({ center, zoom }: any) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  const { mapCenterLocation, villagerHomeListData, onClickVillager } = props;
  const handleClickLocation = (event: any, villager: VillagerHomeData) => {
    console.log("this is", villager);
    onClickVillager(villager);
  };
  return (
    <MapContainer
      style={{ height: "90vh", width: "100%" }}
      center={mapCenterLocation}
      zoom={18}
      scrollWheelZoom={true}
    >
      <ChangeView center={mapCenterLocation} zoom={18} />
      {/* Map Tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker on focus location */}
      {/* <Marker position={mapCenterLocation}>
        <Popup>
          <p>
            A pretty CSS3 popup. <br /> Easily customizable.
          </p>
        </Popup>
      </Marker> */}
      {/* Add other location with status */}

      {villagerHomeListData.map((villager, index) => {
        const isSameLocWithFocusLoc = compareLatLng(
          villager.homeLocation,
          mapCenterLocation
        );
        return (
          // <>
          // {isSameLocWithFocusLoc?<CircleMarker
          //   key={index}
          //   center={villager.homeLocation}
          //   pathOptions={{ color: villager.isFoodRecieved ? "green" : "red" }}
          //   radius={isSameLocWithFocusLoc? 10:5}
          // >
          // </CircleMarker>:<CircleMarker
          //   key={index}
          //   center={villager.homeLocation}
          //   pathOptions={{ color: villager.isFoodRecieved ? "green" : "red" }}
          //   radius={5}
          // >
          //   {/* <Popup>{villager.isFoodRecieved ? "ได้รับแล้ว" : "รออาหาร"}</Popup> */}
          // </CircleMarker>}
          // </>
          <CircleMarker
            key={index}
            center={villager.homeLocation}
            pathOptions={{ color: villager.isFoodRecieved ? "green" : "red" }}
            radius={isSameLocWithFocusLoc ? 12 : 5}
            eventHandlers={{
              click: (event) => handleClickLocation(event, villager),
            }}
          ></CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default MapWithHomeLocations;
