import image1 from "../Images/image1.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg"
const Content = () => {
    return (
    <div>
        <Titles/>
        <Headlines/> 
        
    </div>
  );
}

const Headlines = () => {
    return (
        <div className="headlines">
        <News image={image1} heading= "PM birthday party"/>
        <News image={image2} heading= "Russia invade Kyiv?"/>
        <News image={image3} heading= "COVID restrictions scrapped"/>
        <News image={image4} heading= "Minister resigns over Covid fraud"/>
        <News image={image5} heading= "Military seized power in Burkina Faso" />
        </div>

    )
}
// props = {title: "value"}
const News = (props) => {
  return (
    <div className = "pics2">
    <img src={props.image} alt =""></img>
    
    <Heading heading={props.heading} />
    </div>
  )
}
const Heading = (props)=> {
  return (
  <p className ="subheading">{props.heading}</p>
  )
}
                

const Titles = () => {
    return (
        <div className ="title">
        <h2>Breaking News</h2>
        <h4>See All</h4>
        </div>
    )
}








export default Content;