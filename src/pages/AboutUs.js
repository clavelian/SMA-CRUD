import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

const AboutUs = () => {

	const value = () => (
		<>
			<h2> Hello! </h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod provident eos rerum blanditiis tempore quo nihil cum ullam optio consequatur facilis, temporibus nobis vero, nam! Necessitatibus, maxime explicabo quae omnis!</p>
		</>

	)

	return (
		<>
			<Header />
			<Section description={value()} />
			<Footer />
		</>
	)
}

export default AboutUs;