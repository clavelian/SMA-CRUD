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
		setTimeout(() => {
			if(loading) {
				setLoading(false);
				setData({ 
					description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod provident eos rerum blanditiis tempore quo nihil cum ullam optio consequatur facilis, temporibus nobis vero, nam! Necessitatibus, maxime explicabo quae omnis!",
					header: "Hello"
				});
			}
		}, 3000)
		console.log("Did mount");
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