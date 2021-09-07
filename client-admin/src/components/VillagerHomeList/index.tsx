import { ListItem, ListItemIcon, ListItemText, Avatar } from "@material-ui/core";
import React from "react";
import { VillagerHomeData } from "../../type";
import VillagerHome from "./components/VillagerHome";

interface Props {
  villagerHomeListData: Array<VillagerHomeData>;
}

const VillagerHomeList = (props: Props) => {
  const { villagerHomeListData } = props;
  console.log("villagerHomeListData", villagerHomeListData);

  return (
    <>
      {villagerHomeListData.map((villagerHomeData: VillagerHomeData, index) => (
        <ListItem button key={villagerHomeData.homeId}>
            <VillagerHome
                key={index}
                personName={villagerHomeData.homeRepresentativesName}
                foodRecieveStatus={villagerHomeData.isFoodRecieved}
                personImgUrl={villagerHomeData.homeRepresentativesImg}
            />
        
        </ListItem>
      ))}
    </>
    // {villagerHomeListData.map((villagerHomeData:VillagerHomeData, index) => (
    //     <ListItem button key={villagerHomeData.homeId}>
    //       <ListItemIcon>
    //         {index % 2 === 0 ? <HomeIcon /> : <HomeIcon />}
    //       </ListItemIcon>
    //       <ListItemText primary={villagerHomeData.homeRepresentativesName} />
    //     </ListItem>
    //   ))}
  );
};

export default VillagerHomeList;
