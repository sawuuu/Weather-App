export function WeatherInfo({ temp, wind, humidity }) {
	let temperatureInfo;
	let temperatureIcon;

	if (temp < 0) {
		temperatureIcon = <i className="fa-solid fa-snowflake text-blue-500"></i>;
		temperatureInfo = "It's freezing outside";
	} else if (temp >= 0 && temp < 10) {
		temperatureIcon = <i className="fa-solid fa-cloud text-gray-500"></i>;
		temperatureInfo = "It's cold outside";
	} else if (temp >= 10 && temp < 20) {
		temperatureIcon = <i className="fa-solid fa-sun-cloud text-gray-500"></i>;
		temperatureInfo = "It's nice outside";
	} else if (temp >= 20 && temp < 30) {
		temperatureIcon = <i className="fa-solid fa-sun text-yellow-500"></i>;
		temperatureInfo = "It's warm outside";
	}

	return (
		<>
			<div className={'mt-6 flex flex-col items-center justify-center gap-2'}>
				<span className={'text-5xl'}>{temperatureIcon}</span>
				<h2 className={'text-3xl font-semibold'}>{temperatureInfo}</h2>
			</div>
			<div
				className={
					'g-4 mt-5 flex min-h-[300px] w-full flex-col justify-around rounded-xl border border-gray-400 sm:min-h-[100px] sm:flex-row'
				}
			>
				<div className={'flex flex-col items-center justify-center gap-2'}>
					<i className="fa-solid fa-temperature-half ml-2 block text-3xl"></i>
					<span className={'text-xl font-semibold'}>Temp: {temp}°C</span>{' '}
				</div>
				<div className={'flex flex-col items-center justify-center gap-2'}>
					<i className="fa-solid fa-droplet ml-2 block text-3xl" />
					<span className={'text-xl font-semibold'}>Humidity: {humidity}%</span>
				</div>
				<div className={'flex flex-col items-center justify-center gap-2'}>
					<i className="fa-solid fa-wind ml-2 block text-3xl" />
					<span className={'text-xl font-semibold '}>Wind: {wind}km/h</span>
				</div>
			</div>
		</>
	);
}
