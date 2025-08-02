require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();

const PORT = 3000;
const apiKey = process.env.API_KEY;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "Missing city" });

  try {
    const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    const geoRes = await fetch(geoURL);
    const geoData = await geoRes.json();

    if (!geoData.length) return res.status(404).json({ error: "City not found" });

    const { lat, lon } = geoData[0];
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
