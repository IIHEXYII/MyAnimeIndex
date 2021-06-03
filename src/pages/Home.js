import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
	const recommended ="&order_by=members&sort=desc";
	const API = "https://api.jikan.moe/v3/search/anime?q="
	const pageNum = 1;

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 10));
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}
	// search function
	const FetchAnime = async (query) => {
		const temp = await fetch(`${API}${query}&order_by=title&sort=asc&limit=30`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}
	// default list of anime 
	const FetchDefaultAnime = async (query) => {
		const temp = await fetch(`${API}${query}${recommended}&limit=30&page=${pageNum}`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}
	
	useEffect(() => {
		FetchDefaultAnime();
		GetTopAnime();
		// FetchAnime();

	}, []);
	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Sidebar
					topAnime={topAnime} />
				<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					animeList={animeList} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
