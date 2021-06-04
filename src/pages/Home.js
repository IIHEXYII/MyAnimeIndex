import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

function App() {
	const [animeList, setAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
	const recommended ="&order_by=members&sort=desc";
	const API = "https://api.jikan.moe/v3/search/anime?q="
	const [pageNum, setPageNum] = useState(1);
	const searchFilters = "&order_by=title&sort=asc";
	const [canFetch, setCanFetch] = useState(true);

    function fetchAnime({page, task}) {
		let url = "";
		let num = page ? page : pageNum;
		switch (task) {
			case "top":
				url = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
				break;
			case "search":
				url = API+search+recommended+searchFilters+`&limit=30`;
				break;
			default:
				url = API+search+recommended+`&limit=30&page=${num}`
				break;
		}

        if (canFetch) {
			fetch(url)
            .then(response => response.json())
            .then(data => {

				if (task === "top"){
					SetTopAnime(data.top.slice(0, 10))
				}else {
					setAnimeList(data.results);
				}
			});
		}
    }

    const HandleSearch = e => {
		e.preventDefault();
		
		fetchAnime({task : "search" });
	}
  
    function changePageNum({job, input}) {
		let num;
        switch (job) {
            case "next": 
				num = parseInt(pageNum)+1;
                setPageNum(num);
                fetchAnime({page : num});
                break;
            case "prev":
				num = Math.max(1, parseInt(pageNum)-1);
                setPageNum(num);
                fetchAnime({page : num});
                break;                
			case "input":
				num = input;
			 	setPageNum(num);
				fetchAnime({page : num});
				break;
        }
		setTimeout(() => {
			setCanFetch(true);
		  }, 1000);
		  setCanFetch(false);
    }

	useEffect(() => {
		fetchAnime({page: pageNum});
		fetchAnime({task : "top"});

	// eslint-disable-next-line
	}, []);

	useEffect(() => {
		canFetch && fetchAnime({});
		// eslint-disable-next-line
	},[canFetch])

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
					animeList={animeList}
					changePageNum={changePageNum}
					pageNum={pageNum.toString()} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
