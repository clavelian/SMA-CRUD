import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const AboutUs = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({
		header: "",
		description: "",
	});

	useEffect(() => {
		const fetchAbout = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
			const data = await res.json();
			return { header: data.title, description: data.body };
		}

		fetchAbout().then((i) => {
			if(loading) {
				setLoading(false)
				setData(i)
			}
		});
	}, []);

	return (
		<>
			<Header />
				{
					loading ? 
					<Loading /> : 
					<Section {...data} />
				}
			<Footer />
		</>
	)
}

export default AboutUs;