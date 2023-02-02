import News from "./News";

const SectionIndex = () => {
    return (
        <section>
            <section id="about">
                <section id="about_home"></section>
                    <div className="desc">
                        <div className="inner">
                            <h1>School Meal Club</h1>
                            <p>Korean School Meal Club consists of three maknaes from the Girls Group "TWICE". Kim Dahyun as there gang leader and the two members, Son Chaeyoung, Chou Tzuyu</p>
                            <a href="#" className="btn">Member Profile</a>
                        </div>
                    </div>
                <div className="clearfix"></div>
            </section>
            <News />
        </section>
    )
}

export default SectionIndex;