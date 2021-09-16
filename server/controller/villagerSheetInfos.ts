import { getAllVillagerDataFromGoogleSheet } from "../db/getAllVillagerDataFromGoogleSheet";

export const getVillagerSheetInfos = async (req, res) => {
    
    // get all data from sheet
    const { data } = await getAllVillagerDataFromGoogleSheet();
    res.json({
        data
    })
}