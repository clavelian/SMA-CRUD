import { useEffect, useState } from "react";

const Loading = (props:any) => {
    const [ data, setData ] = useState({...props});

    useEffect(() => {
        console.log("Loading component", props, data);
    }, []);

    return (
        <section>
            <section>
                <div className="section">
                    <div className="inner">
                        <h1> Loading </h1>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Loading;