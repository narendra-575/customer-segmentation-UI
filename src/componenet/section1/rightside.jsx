import "../style.sheet/rightside.css"
import Rightcard from "./rightcard"

const Rightside = (props) => {

  return (
    <div className="rightside">
      {props.user.map(function (elem, idx) {
        return (
          <Rightcard key={idx} id={idx + 1} img={elem.img} tag={elem.tag} intro={elem.intro} />
        )
      })}
    </div>
  )
}

export default Rightside;