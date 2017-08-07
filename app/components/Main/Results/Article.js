import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className='articles' >
          <strong><a href={this.props.article.url}>{this.props.article.title}</a></strong>
        </li>
    )
  }
}

export default Article;