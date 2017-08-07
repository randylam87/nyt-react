// React Dependencies
import React, {Component} from 'react';
import Article from './Results/Article'

// Create the Search component
class Search extends Component {
  constructor(props) {
    super(props);
    this.showSearchedArticles = this.showSearchedArticles.bind(this);
  }

  showSearchedArticles () {
    let id=0;
    return this.props.results.map( (result) => {
      return <Article key={++id} article={result} />
    })
  }
  render() {
    return (
      <div className='panel  panel-results'>
        <div className='panel-heading panel-results-header'>
          <strong><i className="fa fa-table" aria-hidden="true"></i> Top Articles</strong>
        </div>
        <div className='panel-body'></div>
          <ul className='panel list-unstyled'>
            {this.showSearchedArticles()}
          </ul>
      </div>
    )
  }
}

export default Search;