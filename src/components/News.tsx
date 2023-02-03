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
				let css = (i==newsData.length - 1) ? "p-10 mb-10" : "p-10"
				ul.innerHTML += `<li class="${css}"><div class="p-30"><span class="date">${v.date}</span><p class="title">${v.title}</p></div></li>`;
			});
		}
	}, [loading]);

	return (
		<>
			<section className="container mx-auto">
			    <div className="w-1/2 mx-auto">
			        <h1 className="text-center title">WHAT'S NEW</h1>
			        {
			        	loading ? <Loading /> : <ul id="newsList"></ul>
			        }
			
			    </div>
			</section>
		</>
	)
}

export default News;