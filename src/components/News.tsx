import { useEffect, useState, useRef } from "react";
import NewsData from "../data/NewsData";
import Loading from "./Loading";

const News = () => {
	const [loading, setLoading] = useState(true);
	const newsData = NewsData;

	useEffect(() => {
		if(loading) {
			setInterval(() => {
				setLoading(false);
			}, 5000);
		}
	}, []);

	useEffect(() => {
		if(!loading) {
			let ul = document.getElementById("newsList")!;
			newsData.forEach((v, i) => {
				ul.innerHTML += `<li><span className="date">${v.date}</span><p className="title">${v.title}</p></li>`;
			});
		}
	}, [loading]);

	return (
		<>
			<section id="news">
			    <div className="inner">
			        <h1>WHAT'S NEW</h1>
			        {
			        	loading ? <Loading /> : <ul className="newslist" id="newsList"></ul>
			        }
			
			    </div>
			</section>
		</>
	)
}

export default News;