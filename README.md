# Weather App

A simple web application that fetches current weather data by city using the OpenWeatherMap API. The API key is securely hidden on the backend with a Node.js server.

---

## Features

- Search weather by city name
- Displays temperature (°C), weather description, and icon
- API key is hidden in backend and never exposed in frontend
- Backend uses Express.js to proxy API requests
- Frontend uses vanilla JavaScript, HTML, and CSS

---

## Project Structure

```
weatherapp/
├── server.js          # Backend server with API proxy
├── .env               # Environment variables (API key) - not committed
├── public/            # Frontend static files
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── package.json
└── .gitignore
```

---

## Getting Started

### Prerequisites

- Node.js installed (v12+ recommended)
- OpenWeatherMap API key (https://openweathermap.org/api)

### Installation

1. Clone the repo

   ```bash
   git clone <your-repo-url>
   cd weatherapp
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root folder and add your API key:

   ```
   API_KEY=your_openweathermap_api_key_here
   ```

4. Run the server

   ```bash
   node server.js
   ```

5. Open your browser and visit

   ```
   http://localhost:3000
   ```

---

## Usage

- Enter a city name in the search input
- Click “Search”
- Weather data will display below

---

## Security Notes

- The API key is stored securely on the backend in `.env`
- `.env` is included in `.gitignore` to avoid accidental commits

---

## Technologies Used

- Node.js
- Express.js
- dotenv
- node-fetch
- HTML, CSS, JavaScript

##Screenshots

<img width="976" height="632" alt="Screenshot 2025-08-01 at 8 58 01 PM" src="https://github.com/user-attachments/assets/f6a66264-ecce-4ac4-9b04-436e8ce5c560" />

