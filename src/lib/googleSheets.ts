interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
  date?: string;
}

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Sheet1'; // Replace with your sheet name
const GOOGLE_SHEETS_API_KEY = 'YOUR_API_KEY'; // Replace with your API key

export async function submitToGoogleSheets(formData: FormData) {
  try {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const values = [
      [
        date,
        time,
        formData.name,
        formData.email,
        formData.phone,
        formData.eventType,
        formData.message,
        formData.date || 'Not specified'
      ]
    ];

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:H:append?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values
        })
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
}
