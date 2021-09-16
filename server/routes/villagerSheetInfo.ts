import * as express from "express"
const router = express.Router();

/** Business layer */
const { addVillagerSheetInfo, deleteVillagerSheetInfo } = require("../controller/villagerSheetInfo");

// add all villager sheet data
router.get('/',addVillagerSheetInfo)

// delete all villager sheet data
router.get('/',deleteVillagerSheetInfo)

module.exports = router;
