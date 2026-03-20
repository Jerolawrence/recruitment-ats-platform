# Setup Guide for Recruitment ATS Platform

## Prerequisites
- Ensure you have Node.js (version 14.x or higher) installed.
- Install npm (Node package manager), which comes with Node.js.
- A GitHub account for cloning the repository.
- Recommended: Use a code editor like VSCode or Atom.

## Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Jerolawrence/recruitment-ats-platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recruitment-ats-platform
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Environment Configuration
- Create a `.env` file in the root directory.
- Add the following environment variables:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

## Starting Services
- Start the development server:
   ```bash
   npm start
   ```
- To run the application in production mode:
   ```bash
   npm run build
   npm start
   ```

## Verification
- After starting the server, open your browser and visit `http://localhost:3000`.
- You should see the homepage of the recruitment ATS platform.

## Troubleshooting
- If you encounter issues, check the console for errors.
- Ensure all dependencies are correctly installed and that you are using the correct Node.js version.

## Development Mode
- For development mode, use:
   ```bash
   npm run dev
   ```
- This will enable hot reloading for easier development.

## Production Build
- To create a production build, run:
   ```bash
   npm run build
   ```
- Ensure you have the correct environment variables set before building.

## Support Information
- For further assistance, please reach out via issues on GitHub or contact support at support@example.com. 

---
_Last updated: 2026-03-20 00:41:16 (UTC)_