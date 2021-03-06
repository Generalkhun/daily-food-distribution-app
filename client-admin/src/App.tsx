import { ClassNames } from "@emotion/react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { useState } from "react";
import MapWithHomeLocations from "./components/MapWithHomeLocations";
import Console from "./components/Console";
import { villagerHomeListData } from "./mockData";
import { VillagerHomeData } from "./type";

const useStyles = makeStyles({
  mapContainer: {
    height: "90vh",
  },
});
function App() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mapCenterLocation, setMapCenterLocation] = useState<[number, number]>([
    13.684634695264908, 100.47727857693796,
  ]);
  const [selectedVillagerInfo, setSelectedVillagerInfo] = useState({});
  const onClickVillager = (villager: VillagerHomeData) => {
    console.log("villager", villager);
    setSelectedVillagerInfo(villager);
    setMapCenterLocation(villager.homeLocation);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Console
          open={drawerOpen}
          setOpen={setDrawerOpen}
          mapCenterLocation={mapCenterLocation}
          villagerHomeListData={villagerHomeListData}
          onClickVillager={onClickVillager}
          selectedVillagerInfo={selectedVillagerInfo}
        />
      </Grid>
      <Grid item xs={12} style={{ paddingTop: 80 }}>
        <Paper className={classes.mapContainer}>
          <MapWithHomeLocations
            setDrawerOpen={setDrawerOpen}
            mapCenterLocation={mapCenterLocation}
            villagerHomeListData={villagerHomeListData}
            onClickVillager={onClickVillager}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
