export function SearchBar({ handleSubmit, handleCityChange, error }) {
	return (
		<form className={'mx-auto flex w-[90%] gap-4'} onSubmit={handleSubmit}>
			<div>
				<input
					type="text"
					placeholder="City"
					className={`rounded-xl border bg-transparent px-2 py-1 text-2xl font-semibold ${error ? 'border-red-500' : 'border-gray-600'}`}
					onChange={handleCityChange}
				/>
			</div>
			<div>
				<button
					className={
						'flex h-full w-[100px] items-center justify-center rounded-xl px-2 py-1 text-xl font-semibold transition-all hover:bg-gray-600 hover:text-white '
					}
				>
					Search
				</button>
			</div>
		</form>
	);
}
