import { google } from "googleapis"
import { GOOGLE_SHEET_AUTH_CONFIG, SHEET_RANGE_MAIN_PAGE } from "../../constants"


export const connectGoogleSheetsApi = async () => {
    const auth = await google.auth.getClient(GOOGLE_SHEET_AUTH_CONFIG)
    // connect to googlesheet 
    const sheets = google.sheets({ version: 'v4', auth })
    return sheets
}

// Fetch google sheet data
export const getGoogleSheetsData = async () => {
    const sheets = await connectGoogleSheetsApi()
    //query  
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: SHEET_RANGE_MAIN_PAGE
    })
}