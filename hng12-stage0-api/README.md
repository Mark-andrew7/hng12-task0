HNG12 Task 0 - Public API
Project Description
This is a simple Node.js API built to serve basic information including the current date, your registered email address, and the GitHub repository URL. The API is deployed on Render and is accessible via a public URL.

Setup & Installation Instructions
Prerequisites
Node.js (v14 or higher)
npm (Node Package Manager)

Steps to Run Locally
Clone the repository: git clone https://github.com/Mark-andrew7/hng12-task0.git
Navigate to the project folder: cd hng12-task0
Install dependencies: npm install
Set up the environment:

Create a .env file in the root directory.
Add your email and GitHub URL in the .env file:
        EMAIL=your-email@example.com
        GITHUB_URL=https://github.com/your-username/your-repo

Run the server: npm start
Visit the API at http://localhost:3000/

API Documentation
Endpoint
URL: GET http://localhost:3000/
Request
Method: GET
URL Params: None
Response
Status Code: 200 OK
Body Example:
    {
        "email": "kamaumark19@gmail.com",
        "current_datetime": "2025-01-29T17:29:30.785Z",
        "github_url": "https://github.com/Mark-andrew7/hng12-task0"
    }   

Deployed API URL: https://hng12-task0-1.onrender.com/
GitHub Repository: https://github.com/Mark-andrew7/hng12-task0
Backlink: https://hng.tech/hire/nodejs-developers

