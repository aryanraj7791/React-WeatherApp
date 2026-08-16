# 🌤️ Weather App

A simple weather app made with **React** that lets you search for a city and check its current weather. It uses the **OpenWeatherMap API** to get the weather data and **Material UI** for the interface.

## ✨ Features

* 🔍 Search weather by city name
* 🌡️ Shows current temperature
* ☁️ Shows weather conditions
* 💧 Shows humidity
* 🌬️ Shows pressure
* 🌦️ Displays weather icons
* 📱 Responsive design
* 🎨 Built with Material UI

## 🛠️ Technologies Used

* React
* JavaScript
* Material UI
* Vite
* CSS
* OpenWeatherMap API
* Fontsource Roboto

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aryanraj7791/React-WeatherApp.git
```

Go to the project folder:

```bash
cd React-Material-UI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file in the root folder and add:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

You can get an API key from [OpenWeatherMap](https://openweathermap.org/api).

There is also a `.env.example` file in the project that shows which environment variable is needed.

### 4. Run the app

```bash
npm run dev
```

The app will run on the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📁 Project Structure

```text
React-Material-UI/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── InfoBox.css
│   ├── InfoBox.jsx
│   ├── main.jsx
│   ├── SearchBox.css
│   ├── SearchBox.jsx
│   └── WeatherApp.jsx
│
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 🔄 How It Works

1. Enter the name of a city in the search box.
2. The app sends a request to the OpenWeatherMap API.
3. The API returns the current weather data.
4. The app displays the weather information on the screen.

## 🔮 Future Improvements

Some things I would like to add in the future:

* 📅 5-day weather forecast
* 📍 Weather based on current location
* ⭐ Save favorite cities
* 🌙 Dark mode
* 🌡️ Celsius and Fahrenheit options

## 👨‍💻 Author

**Aryan Raj**

If you like the project, feel free to ⭐ the repository.
