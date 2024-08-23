import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>MY Latest Work</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <img
                        key={index}
                        src={work.w_img}
                        alt={`Work ${index + 1}`}
                    />
                ))}
            </div>
            <div className="mywork-showmode">
                <p> Show More</p>
            <img src={arrow_icon} alt=""/>
            </div>
        </div>
    )
}

export default MyWork
