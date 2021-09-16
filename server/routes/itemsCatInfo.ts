import * as express from "express"
const router = express.Router();


/** Business layer */
const { addItemCatInfo, deleteItemCatInfo } = require("../controller/itemCatInfo");

// add all villager sheet data
router.get('/',addItemCatInfo)

// delete all villager sheet data
router.get('/',deleteItemCatInfo)

module.exports = router;
