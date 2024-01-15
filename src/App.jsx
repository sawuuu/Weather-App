import { SearchBar } from './components/SearchBar.jsx';
import { WeatherInfo } from './components/WeatherInfo.jsx';
import { useState } from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState('');
	const [wind, setWind] = useState('');
	const [humidity, setHumidity] = useState('');
	const [error, setError] = useState(false);

	const handleError = () => {
		setError(true);
	};

	const handleCityChange = event => {
		setCity(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setError(false);

		fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
			.then(res => res.json())
			.then(res => {
				if (res.cod === 200) {
					console.log(res);
					setTemp(Math.round(res.main.temp));
					setWind(Math.round(res.wind.speed));
					setHumidity(res.main.humidity);
				} else {
					handleError();
				}
			});
	};

	return (
		<div className={'flex flex-col items-center justify-center gap-16'}>
			<header className={'mt-4'}>
				<h1 className={'mt-16 text-5xl font-bold text-white'}>Weather App</h1>
			</header>
			<main className={'flex h-auto w-[300px] flex-col items-center rounded-2xl bg-gray-200 px-4 py-2 sm:w-[500px]'}>
				<SearchBar handleSubmit={handleSubmit} handleCityChange={handleCityChange} error={error} />
				{error && <p className={'text-2xl text-red-500'}>City not found</p>}
				{temp !== '' && <WeatherInfo temp={temp} wind={wind} humidity={humidity} />}
			</main>
		</div>
	);
}

export default App;
