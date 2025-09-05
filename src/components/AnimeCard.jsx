function AnimeCard({ anime }) {
	function onFavouriteClick() {
		alert("clicked");
	}

	return (
		<div className="anime-card">
			<div className="anime-poster">
				<img src={anime.url} alt={anime.title} />
				<div className="anime-overlay">
					<button
						className="favourite-htn"
						onClick={onFavouriteClick}
					>
						Like
					</button>
				</div>
			</div>
			<div className="anime-info">
				<h3>{anime.title}</h3>
			</div>
		</div>
	);
}

export default AnimeCard;
