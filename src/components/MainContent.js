import React from 'react'
import AnimeCard from './AnimeCard';

function MainContent(props) {
	return (
		<main>
			<div className="main-head">
				<div className="pagination">
					<button className="prev" onClick={() => props.changePageNum({job: "prev"})}>prev</button>
					<input type="number" min="1" onChange={(e) => props.changePageNum({job: "input", input: e.target.value})} value={props.pageNum} />
					<button className="next" onClick={() => props.changePageNum({job: "next"})}>next</button>
				</div>
				
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
						<label className="hidden" htmlFor="search">Search</label>
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
			<div className="pagination pagination-center">
					<button className="prev" onClick={() => props.changePageNum({job: "prev"})}>prev</button>
					<input type="number" min="1" onChange={(e) => props.changePageNum({job: "input", input: e.target.value})} value={props.pageNum} />
					<button className="next" onClick={() => props.changePageNum({job: "next"})}>next</button>
			</div>
			
		</main>
	)
}

export default MainContent
