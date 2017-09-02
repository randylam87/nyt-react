import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  handleClick (event) {
    let article = this.props.article
    this.props.saveArticle(article)
  }

  render() {
    return (
        <li className='articles'>
          <button className='btn btn-success btn-small' onClick={ ()=>{ this.handleClick() } }>Save</button>
          {'\u00A0'}
          <strong className='ml'><a href={this.props.article.url}>{this.props.article.title}</a></strong>
        </li>
    )
  }
}

export default Article;