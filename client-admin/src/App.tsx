import { ClassNames } from "@emotion/react";
import {
  Fade,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Switch,
} from "@material-ui/core";
import { useState } from "react";
import MapWithHomeLocations from "./components/MapWithHomeLocations";
import Console from "./components/Console";
import { villagerHomeListData } from "./mockData";
import { VillagerHomeData } from "./type";
import VillagerConsole from "./components/VillagerConsole";

const useStyles = makeStyles({
  mapContainer: {
    height: "90vh",
  },
});
function App() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openVillagerConsole, setOpenVillagerConsole] = useState(false);
  const [mapCenterLocation, setMapCenterLocation] = useState<[number, number]>([
    13.684634695264908, 100.47727857693796,
  ]);
  const [selectedVillagerInfo, setSelectedVillagerInfo] = useState<VillagerHomeData>({} as VillagerHomeData);
  const onClickVillager = (villager: VillagerHomeData) => {
    setSelectedVillagerInfo(villager);
    setOpenVillagerConsole(true);
    setMapCenterLocation(villager.homeLocation);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Console
          open={drawerOpen}
          setOpen={setDrawerOpen}
          setOpenVillagerConsole={setOpenVillagerConsole}
          mapCenterLocation={mapCenterLocation}
          villagerHomeListData={villagerHomeListData}
          onClickVillager={onClickVillager}
          selectedVillagerInfo={selectedVillagerInfo}
        />
      </Grid>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={4}>
          <VillagerConsole
            selectedVillagerInfo={selectedVillagerInfo}
            openVillagerConsole={openVillagerConsole}
            setOpenVillagerConsole={setOpenVillagerConsole}
          />
        </Grid>
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
