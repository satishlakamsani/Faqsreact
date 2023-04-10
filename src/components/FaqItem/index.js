// Write your code here.
import {Component} from 'react'

import './index.css'

const imagePlus =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const imageMinus =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderOnActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? imageMinus : imagePlus

    const altText = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderOnActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
