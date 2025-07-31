#!/bin/bash

echo "🚁 Setting up FLYBIT Dynamics Backend Server..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "📝 Creating .env file from template..."
    cp env.example .env
    echo "✅ .env file created. Please edit it with your email credentials."
else
    echo "✅ .env file already exists."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit the .env file with your email credentials"
echo "2. For Gmail, create an App Password in your Google Account settings"
echo "3. Run 'npm run dev' to start the development server"
echo "4. The server will run on http://localhost:3001"
echo ""
echo "📧 Email Configuration Required:"
echo "   - EMAIL_USER: Your Gmail address"
echo "   - EMAIL_PASS: Your Gmail App Password"
echo "   - TO_EMAIL: Where to send business notifications (default: info@flybitdynamics.com)"
echo ""
echo "🔗 Gmail App Password Setup:"
echo "   1. Go to Google Account → Security"
echo "   2. Enable 2-Factor Authentication"
echo "   3. Go to App passwords"
echo "   4. Generate password for 'Mail'"
echo "   5. Use this password in your .env file" 