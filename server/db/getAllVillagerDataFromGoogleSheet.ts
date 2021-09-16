import { SHEET_RANGE_MAIN_PAGE } from "../constants"
import { connectGoogleSheetsApi } from "./utils/googleSheetApi"

export const getAllVillagerDataFromGoogleSheet = async () => {

    const sheets = await connectGoogleSheetsApi()

    //query and return response
    return sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: SHEET_RANGE_MAIN_PAGE
    })
}