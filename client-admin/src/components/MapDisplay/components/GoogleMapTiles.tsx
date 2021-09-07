import { ReactElement } from "react";
import GoogleMapReact from "google-map-react";
// import { GOOGLE_MAP_API_KEY } from "../constants";

interface Props {}
const GOOGLE_MAP_API_KEY = "AIzaSyBD0A2vHn4TKvncYUTb1wQy6NH1Af9B6gI";
function GoogleMapTiles({}: Props): ReactElement {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={{
          lat: 13.684634695264908,
          lng: 100.47727857693796,
        }}
        defaultZoom={13}
      >
        {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapTiles;
