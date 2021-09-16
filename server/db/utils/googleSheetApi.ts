import { google } from "googleapis"
import { GOOGLE_SHEET_AUTH_CONFIG } from "../../constants"


export const connectGoogleSheetsApi = async () => {
    const auth = await google.auth.getClient(GOOGLE_SHEET_AUTH_CONFIG)
    // connect to googlesheet 
    const sheets = google.sheets({ version: 'v4', auth })
    return sheets
}