// React Dependencies
import React, {Component} from 'react';
import Saved from './Main/Saved';
import Search from './Main/Search';
import Results from './Main/Results';
// Requiring our helper for making API calls
import helpers from '../utils/helpers';

// Create the Main component
class Main extends Component  {
    constructor(props) {
        super(props);
        this.state = {results: '', saved: ''}

        // Binding of this to custom methods
        this.queryNYT = this.queryNYT.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    // Lifecycle Events
    componentDidMount() {
        helpers.findSavedArticles().then((results)=>{
            this.setState({ saved: results.data });
        });
    }

    // Custom Methods
    
    // Does an API call to NYT and sets a results state that is an array of objects
    queryNYT (params) {
        helpers.getArticles(params, (data) => {
            this.setState({
                results: data
            });
        })
    };

    // Queries DB for saved articles and returns an array of objects
    getSavedArticles () {
        helpers.findSavedArticles()
        .then( (results) => {
            if(results.data) {
                this.setState({
                    saved: results.data
                });
            }
            
        })
    };

    saveArticle (article) {
        helpers.saveArticle(article)
        .then( (result) => {
            this.getSavedArticles();
        })
    };

    deleteArticle (article) {
        helpers.deleteArticle(article)
        .then( (result) => {
            this.getSavedArticles();
        })
    }

    // Resets results if the clear button is clicked
    clearState(event) {
        this.setState({
            results: ''
        })
    }

    render() {
        return (
           <div className='container'>
               <div className='jumbotron text-center'>
               <h1><i className="fa fa-newspaper-o" aria-hidden="true"></i> New York Times Search</h1>
               </div>
                <Search queryNYT={this.queryNYT} clearState={this.clearState}/> 
                {this.state.results.length > 0 && <Results results={this.state.results} saveArticle={this.saveArticle}/>} 
                {this.state.saved.length > 0 && <Saved saved={this.state.saved} deleteArticle={this.deleteArticle}/>}
            </div>
        )
    };
};

export default Main;