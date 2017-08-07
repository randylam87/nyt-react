import React, {Component} from 'react';

class SavedArticle extends Component {
  constructor(props) {
    super(props);
  }

  handleClick (event) {
    let article = this.props.article._id
    this.props.deleteArticle(article)
  }

  render() {
    return (
        <li className='articles' >
          <button className='btn btn-danger btn-small' onClick={ ()=>{ this.handleClick() } }>Delete</button>
          <strong><a href={this.props.article.url}>{this.props.article.title}</a></strong>
        </li>
    )
  }
}

export default SavedArticle;