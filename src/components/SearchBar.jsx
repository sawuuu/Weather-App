export function SearchBar({ handleSubmit, handleCityChange, error }) {
	return (
		<form className={'mx-auto flex w-full gap-4'} onSubmit={handleSubmit}>
			<div className={'w-[75%]'}>
				<input
					type="text"
					placeholder="City"
					className={`w-full rounded-xl border bg-transparent px-2 py-1 text-2xl font-semibold ${error ? 'border-red-500' : 'border-gray-600'}`}
					onChange={handleCityChange}
				/>
			</div>
			<div className={'w-[25%]'}>
				<button
					className={
						'flex h-full w-full items-center justify-center rounded-xl px-2 py-1 text-xl font-semibold transition-all hover:bg-gray-600 hover:text-white '
					}
				>
					Search
				</button>
			</div>
		</form>
	);
}
