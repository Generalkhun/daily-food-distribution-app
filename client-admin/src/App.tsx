import { ClassNames } from "@emotion/react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { useState } from "react";
import MapWithHomeLocations from "./components/MapWithHomeLocations";
import AppConsole from "./components/AppConsole";
import { villagerHomeListData } from "./mockData";
import { VillagerHomeData } from "./type";
import VillagerConsole from "./components/VillagerConsole";
import ModalSetting from "./components/ModalSetting";

const useStyles = makeStyles({
  mapContainer: {
    height: "90vh",
  },
});
function App() {
  const classes = useStyles();

  /**
   * Component states
   */
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openVillagerConsole, setOpenVillagerConsole] = useState(false);
  const [mapCenterLocation, setMapCenterLocation] = useState<[number, number]>([
    13.684634695264908, 100.47727857693796,
  ]);
  const [selectedVillagerInfo, setSelectedVillagerInfo] =
    useState<VillagerHomeData>({} as VillagerHomeData);
  const [isShowOnlyWaitingVillager, setIsShowOnlyWaitingVillager] =
    useState(false);

  const [isOpenModalSetting, setIsOpenModalSetting] = useState(false);
  
  /**
   * Functions 
   */
  const changeShowConditionHandler = () => {
    setIsShowOnlyWaitingVillager((prev) => !prev);
    setOpenVillagerConsole(false)

  };
  const onClickVillager = (villager: VillagerHomeData) => {
    setSelectedVillagerInfo(villager);
    setOpenVillagerConsole(true);
    setMapCenterLocation(villager.homeLocation);
  };
  const handleCloseModalSetting = ()  => {
    setIsOpenModalSetting(false)
  }

  const handleOpenModalSetting = ()  => {
    setIsOpenModalSetting(true)
  }

  return (
    <>
      <ModalSetting
        isOpenModal={isOpenModalSetting}
        handleCloseModal={handleCloseModalSetting}
        isShowOnlyWaitingVillager={isShowOnlyWaitingVillager}
        changeShowConditionHandler={changeShowConditionHandler}
      />
      <Grid container>
        <Grid item xs={12}>
          <AppConsole
            open={drawerOpen}
            setOpen={setDrawerOpen}
            setOpenVillagerConsole={setOpenVillagerConsole}
            mapCenterLocation={mapCenterLocation}
            villagerHomeListData={villagerHomeListData}
            onClickVillager={onClickVillager}
            selectedVillagerInfo={selectedVillagerInfo}
            isShowOnlyWaitingVillager={isShowOnlyWaitingVillager}
            handleOpenModalSetting={handleOpenModalSetting}
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
    </>
  );
}

export default App;
