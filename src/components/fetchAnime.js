const recommended ="&order_by=members&sort=desc";
const API = "https://api.jikan.moe/v3/search/anime?q="
const searchFilters = "&order_by=title&sort=asc";

export default function fetchAnime(pageNum, task, search) {
    let list = [];
    let url = "";
    switch (task) {
        case "top":
            url = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
            break;
        case "search":
            url = API+search+recommended+searchFilters+`&limit=30&page=${pageNum}`;
            break;
        default:
            url = API+search+recommended+`&limit=30&page=${pageNum}`
            break;
    }

    return fetch(url)
        .then(response => response.json());
}