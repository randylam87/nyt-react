// React Dependencies
import React, {Component} from 'react';
import SavedArticle from './Saved/SavedArticle';

// Create the Search component
class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.showSavedArticles = this.showSavedArticles.bind(this);
    }

    showSavedArticles() {
        let id = 0;
        return this.props.saved.map((result) => {
            return <SavedArticle key={++id} article={result} deleteArticle={this.props.deleteArticle}/>
        })
    }

    render() {
        return (
            <div className='panel panel-results'>
                <div className='panel-heading panel-results-header'>
                    <strong>
                        <i className="fa-floppy" aria-hidden="true"></i>Saved Articles</strong>
                </div>
                <div className='panel-body'></div>
                    <ul className='panel list-unstyled'>
                        {this.showSavedArticles()}
                    </ul>
            </div>
        )
    }
}

export default Saved;