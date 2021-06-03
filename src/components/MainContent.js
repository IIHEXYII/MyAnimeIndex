import React from 'react'
import AnimeCard from './AnimeCard';

function MainContent(props) {
	return (
		<main>
			<div className="main-head">

				<button className="prev" onClick={() => props.changePageNum("prev")}>previous</button>
				<p> {props.pageNum}</p>
				<button className="next" onClick={() => props.changePageNum("next")}>next</button>

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
				{props.animeList ?( props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))) : "Loading..." }
			</div>
		</main>
	)
}

export default MainContent
