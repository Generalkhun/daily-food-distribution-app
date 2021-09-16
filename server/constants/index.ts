// require('dotenv').config()
import { GoogleAuthOptions } from 'google-auth-library'
export const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

export const GOOGLE_SHEET_AUTH_CONFIG: GoogleAuthOptions = {
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
}

const TOTAL_HOUSE_NUM = 1000 // changable
export const SHEET_RANGE_MAIN_PAGE = `MainPage!A1:E${TOTAL_HOUSE_NUM}}`