# FLYBIT Dynamics Backend Server

This is the backend server for FLYBIT Dynamics contact form with Nodemailer integration.

## Features

- ✅ Contact form processing
- 📧 Email notifications to business
- 📧 Confirmation emails to clients
- 🔒 Input validation
- 🌐 CORS enabled
- 📊 Health check endpoint

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and configure your email settings:

```bash
cp env.example .env
```

Edit `.env` file with your email credentials:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
TO_EMAIL=info@flybitdynamics.com

# Server Configuration
PORT=3001
NODE_ENV=development
```

### 3. Gmail App Password Setup

For Gmail, you'll need to create an App Password:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password in your `.env` file

### 4. Start the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/contact
Handles contact form submissions and sends emails.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "eventType": "Wedding",
  "eventDate": "2024-12-25",
  "city": "Mumbai",
  "message": "I need a drone light show for my wedding..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully. Check your email for confirmation."
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "FLYBIT Dynamics backend server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Email Templates

The server sends two types of emails:

1. **Business Notification**: Detailed form submission sent to your business email
2. **Client Confirmation**: Professional thank you email sent to the client

Both emails include:
- Contact information
- Event details
- Quick action links (email, phone, WhatsApp)
- Professional branding

## Frontend Integration

Update your frontend contact form to send requests to this backend:

```javascript
const response = await fetch('http://localhost:3001/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for sensitive data
- Consider rate limiting for production
- Validate all inputs on both frontend and backend 