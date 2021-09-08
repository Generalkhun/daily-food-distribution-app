import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { VillagerHomeData } from "../type";
import { Divider, FormControlLabel, Switch } from "@material-ui/core";
import ModalConfirmStatusChange from "./ModalConfirmStatusChange";

const useStyles = makeStyles({
  root: {
    maxWidth: 425,
  },
  media: {
    height: 200,
  },
});
interface Props {
  selectedVillagerInfo: VillagerHomeData;
}

export default function VillagerConsoleBox(props: Props) {
  const classes = useStyles();
  const { selectedVillagerInfo } = props;
  const lat = (selectedVillagerInfo.homeLocation || [0, 0])[0];
  const lng = (selectedVillagerInfo.homeLocation || [0, 0])[1];

  const [isGetFood, setIsGetFood] = useState<boolean>(
    selectedVillagerInfo.isFoodRecieved || true
  );

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleGetFoodStatus = () => {
    setIsGetFood((prevStatus) => !prevStatus);
    handleOpenModal();
    console.log("ส่งแล้วว");
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <ModalConfirmStatusChange
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={selectedVillagerInfo.homeRepresentativesImg}
            title="ข้อมูลตัวแทนบ้าน"
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
        <CardActions>
          <FormControlLabel
            control={
              <Switch checked={isGetFood} onChange={toggleGetFoodStatus} />
            }
            label="ส่งสำเร็จแล้ว"
          />
        </CardActions>
      </Card>
    </>
  );
}
