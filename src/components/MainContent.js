import React from 'react'
import AnimeCard from './AnimeCard';

function MainContent(props) {
	return (
		<main>
			<div className="main-head">
				{/* <button>previous</button>
				<button>next</button> */}
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
						<label className="hidden" for="search">Search</label>
					<input 
						id="search"
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
		</main>
	)
}

export default MainContent
