import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/about_profile.svg"

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced FullStack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for FullStack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML5 & CSS3</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node JS</p>
                            <hr style={{ width: "85%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Express JS</p>
                            <hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p>
                            <hr style={{ width: "65%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Socket IO</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>DSA</p>
                            <hr style={{ width: "95%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Flutter</p>
                            <hr style={{ width: "75%" }} />
                        </div>
                        <div className="about-skill">
                            <p>AI & ML</p>
                            <hr style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About;
