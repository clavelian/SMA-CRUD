import { useEffect } from "react";

const News = () => {

	useEffect(() => {
		const newsFetch = async () => {
			const f = await fetch("https://dbkpop.com/tag/twice/");
			const resp = await f.json();
			console.log(resp);
		}

		newsFetch();
	}, []);
	return (
		<>
			<section id="news">
			    <div className="inner">
			        <h1>WHAT'S NEW</h1>
			        <ul className="newslist">
			            <li>
			                <span className="date">2017.04.15</span>
			                <p className="title">「TWICE×MixChannel」ダンスコンテスト 結果発表！ </p>
			            </li>
			            <li>
			                <span className="date">2017.03.31</span>
			                <p className="title">TWICE SPECIAL ALBUM「TWICEcoaster : LANE 2」の日本配信がスタート！</p>
			            </li>
			            <li>
			                <span className="date">2017.03.21</span>
			                <p className="title">TWICE DEBUT SHOWCASE “Touchdown in JAPAN” 開催決定！</p>
			            </li>
			            <li>
			                <span className="date">2017.03.21</span>
			                <p className="title">ONCE JAPAN ＆ ONCE JAPAN MOBILE OPEN!!</p>
			            </li>
			            <li>
			                <span className="date">2017.03.21</span>
			                <p className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iure vel, reprehenderit impedit accusantium distinctio necessitatibus, sequi magnam obcaecati dolorum libero. In consequatur harum maxime quod aliquam nulla omnis itaque.</p>
			            </li>
			        </ul>
			    </div>
			</section>
		</>
	)
}

export default News;