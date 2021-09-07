import { Grid, Avatar, ListItemText, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement } from "react";
import { StyledBadgeUrgent } from "./StyledBadgeUrgent";
import {StyledBadgeNormal} from './StyledBadgeNormal'

interface Props {
  key: number;
  personName: string;
  foodRecieveStatus: boolean;
  personImgUrl: string;
}
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  });
});
function VillagerHome(props: Props) {
  const { personName, foodRecieveStatus, personImgUrl } = props;
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} lg={4}>
          {foodRecieveStatus?<StyledBadgeNormal
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar
            alt={personName}
            src={personImgUrl}
            className={classes.large}
          />
        </StyledBadgeNormal> : <StyledBadgeUrgent
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar
            alt={personName}
            src={personImgUrl}
            className={classes.large}
          />
        </StyledBadgeUrgent>
          }
        
      </Grid>
      <Grid item xs={12} lg={4}>
        <ListItemText primary={personName} style={{ paddingLeft: 20 }} />
      </Grid>
    </Grid>
  );
}

export default VillagerHome;
