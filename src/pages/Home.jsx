import AnimeCard from "../components/AnimeCard";
import DaysList from "../components/DaysList";

function Home() {
	// Temp data
	const animes = [
		{ id: 1, title: "Kaiju No. 8" },
		{ id: 2, title: "Shield Hero Season 4" },
		{ id: 3, title: "New Saga" },
	];

	return (
		<div className="home">
			<DaysList />
			<div className="anime-grid">
				{animes.map((anime) => (
					<AnimeCard anime={anime} key={anime.id} />
				))}
			</div>
		</div>
	);
}

export default Home;
