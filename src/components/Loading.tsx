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
                        <img src="/images/loading.gif" alt="loading" className="loading"/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Loading;