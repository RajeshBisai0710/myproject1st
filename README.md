<h1>Weather App</h1>
<h3>Overview:</h3>
This is a simple weather application built using HTML, CSS, and JavaScript that allows users to input their location and get real-time weather data (such as temperature, humidity, and weather description) fetched from the OpenWeatherMap API.

Features:
Location Input: Users can enter a city name to get the current weather.
Weather Display: Shows the weather description (e.g., Rainy, Sunny), temperature in Celsius, and humidity in percentage.
Responsive Design: The design adjusts based on the viewport size, ensuring it's easy to use on different devices.
<br>
<h3>Technologies Used:</h3>
HTML: Used for the structure of the webpage.
CSS: Used for styling the app, making it visually appealing and responsive.
JavaScript: Handles form submission, fetching data from the OpenWeatherMap API, and updating the DOM with weather details.
<br>
<h3>Files Breakdown:</h3>
1. HTML (index.html)
Contains the structure for the weather app.
Includes an input field for the user to type the location.
Displays weather-related information like temperature, humidity, and a description of the weather condition.
External link to the weather stylesheet (weather.css) and JavaScript file (weather.js).
<br>
2. CSS (weather.css)
Styles the layout and user interface.
The #container ensures the app is centered vertically and horizontally.
The #container-1 is the main section that contains the form and weather display elements.
Flexbox is used to arrange elements like the temperature and humidity sections in rows.
The app has a minimalistic, clean design with responsive features.
<br>
3. JavaScript (weather.js)
Handles the form submission event when the user enters a location.
Fetches weather data from the OpenWeatherMap API using the user's location.
Parses the data and updates the DOM with the weather information (temperature, humidity, and weather description).
Adds error handling in case the user enters an invalid location or the API request fails.
<br>
<h3>How to Use:</h3>
Clone or Download: Download or clone the repository to your local machine.
<br>
API Key: Make sure you have an API key for OpenWeatherMap. Replace the key (7088ac1089b5d73b28f5e264fc4db992) in the JavaScript file with your own key.
Run Locally: Open the index.html file in a web browser.
<br>
Enter a Location: Type a city name (e.g., "New York") into the input field and click "Get Weather."<br>
View Results: The app will display the weather information (temperature, humidity, and a description of the weather).
<br>
To Do:
Error Handling: Improve error handling for invalid city names or issues with fetching data from the API.
<br>
Weather Icons: Add weather icons dynamically based on the fetched weather description for a better visual experience.
<br>
Unit Conversion: Allow users to toggle between Celsius and Fahrenheit for temperature.
<br>
<h3>Example Output:</h3>
Form:<br>
Input: "London"<br>
Submit Button: "Get Weather"<br>
<h3>Result:</h3>
Temperature: "12°C"<br>
Humidity: "75%"<br>
Weather Description: "Rainy"<br>
<h3>Note:</h3>
Make sure the OpenWeatherMap API key is valid, and the API quota is not exceeded, otherwise, the app will not be able to fetch weather data.
