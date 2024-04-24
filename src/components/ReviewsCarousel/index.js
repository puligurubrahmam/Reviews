import './index.css'
import {Component} from 'react'
class ReviewsCarousel extends Component {
  state = {index: 0}
  updateStateRight = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prevState => {
        return {index: prevState.index + 1}
      })
    }
  }
  updateStateLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => {
        return {index: prevState.index - 1}
      })
    }
  }
  render(props) {
    const {reviewsList} = this.props
    const {index} = this.state
    const list = reviewsList[index]
    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="card">
          <button
            className="btn"
            onClick={this.updateStateLeft}
            data-testid="leftArrow"
            
          >
            <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png " alt="left arrow" />
          </button>
          <ul className="Reviews">
            <li>
              <img src={list.imgUrl} alt={list.username} className="img" />
              <p className="username">{list.username}</p>
              <p>{list.companyName}</p>
              <p>{list.description}</p>
            </li>
          </ul>
          <button
            className="btn"
            onClick={this.updateStateRight}
            data-testid="rightArrow"
            
          >
            <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right arrow"/>
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
