import { ClassNames } from "@emotion/react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import MapWithHomeLocations from "./components/MapWithHomeLocations";
import NavBar from "./components/NavBar";

const useStyles = makeStyles({
  mapContainer:{
    height: '90vh'
  }
})
function App() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} lg={9}>
        <Paper className ={classes.mapContainer}>
          <MapWithHomeLocations />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
