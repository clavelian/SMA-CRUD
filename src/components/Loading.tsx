import { useEffect, useState } from "react";

const Loading = (props:any) => {
    const [ data, setData ] = useState({...props});

    useEffect(() => {
        console.log("Loading component", props, data);
    }, []);

    return (
        <section>
            <section className="my-10">
                <div>
                    <div className="grid w-800 place-items-center">
                        <div className="w-12">
                            <img src="/images/loading.gif" alt="loading" />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Loading;