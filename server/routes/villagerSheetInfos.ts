import * as express from "express"
const router = express.Router();

/** Business layer */
const { getVillagerSheetInfos } = require("../controller/villagerSheetInfos");

// get all villager sheet data
router.get('/',getVillagerSheetInfos)

module.exports = router;