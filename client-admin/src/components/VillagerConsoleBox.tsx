import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { VillagerHomeData } from "../type";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
interface Props {
  selectedVillagerInfo: VillagerHomeData;
}

export default function VillagerConsoleBox(props: Props) {
  const classes = useStyles();
  const { selectedVillagerInfo } = props;
  const lat = (selectedVillagerInfo.homeLocation||[0,0])[0]
  const lng = (selectedVillagerInfo.homeLocation||[0,0])[1]
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={selectedVillagerInfo.homeRepresentativesImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {selectedVillagerInfo.homeRepresentativesName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`เบอร์ติดต่อ: ${selectedVillagerInfo.homeRepresentativesContactNum}`}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary" component="p">
            {"จำนวนสมาชิกในบ้าน:" +
              " " +
              selectedVillagerInfo.numberOfFamilyMember}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary" component="p">
            {`สถานะ: ${
              selectedVillagerInfo.isFoodRecieved
                ? "ได้รับข้าวแล้ว"
                : "ยังไม่ได้รับข้าว"
            }`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
          >
            ดูเส้นทางจาก goole map
          </a>
        </Button>
        <Button size="small" color="primary">
          <img
            width="40"
            height="20"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
          />
          {"ติดต่อไลน์ >"}
        </Button>
      </CardActions>
    </Card>
  );
}
