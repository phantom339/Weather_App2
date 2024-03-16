document.addEventListener("DOMContentLoaded", function () {
    
    function fetchWeatherData(location) {
        const apiKey = '2cf28692fff4463e29fc09f122a35d33'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                
                const locationName = data.name;
                const temperature = Math.round(data.main.temp - 273.15); 
                const condition = data.weather[0].description;

                
                document.querySelector('.location').textContent = `Location: ${locationName}`;
                document.querySelector('.temperature').textContent = `Temperature: ${temperature}°C`;
                document.querySelector('.condition').textContent = `Condition: ${condition}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data. Please try again.');
            });
    }


    document.getElementById('searchButton').addEventListener('click', function () {
        const locationInput = document.getElementById('locationInput').value.trim();
        if (locationInput !== '') {
            fetchWeatherData(locationInput);
        } else {
            alert('Please enter a location.');
        }
    });
});
