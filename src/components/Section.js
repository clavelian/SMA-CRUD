import { useEffect, useState } from "react";

const Section = (props) => {
    const [ data, setData ] = useState({...props});

    useEffect(() => {
        console.log("Section component", props, data);
    }, []);

    return (
        <section>
            <section>
                <div className="section">
                    <div className="inner">
                        <h1>{ data.header }</h1>
                        <p>{ data.description }</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Section;