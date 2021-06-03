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
    const [pageMax, setPageMax] = useState (20);
	const searchFilters = "&order_by=title&sort=asc";
	
    function fetchAnime({pageNum, task}) {
		let url = "";
		switch (task) {
			case "top":
				url = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
				break;
			case "search":
				url = API+search+recommended+searchFilters+`&limit=30`;
				break;
			default:
				url = API+search+recommended+`&limit=30&page=${pageNum}`
				break;
		}
		console.log(search);
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

    const HandleSearch = e => {
		e.preventDefault();
		
		fetchAnime({task : "search" });
	}
  
    function changePageNum({job, input}) {
		let num;
        switch (job) {
            case "next": 
				num = pageNum+1;
                setPageNum(num);
                fetchAnime({pageNum : num});
                break;
            case "prev":
				num = Math.max(1, pageNum-1);
                setPageNum(num);
                fetchAnime({pageNum : num});
                break;                
			case "input":
			 	setPageNum(input);
				fetchAnime({pageNum : input});
				break;
        }
    }

	useEffect(() => {
		fetchAnime({pageNum: pageNum});
		fetchAnime({task : "top"});


	}, []);
	
	return (
		<div className="App">
			{console.log(animeList)}
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
