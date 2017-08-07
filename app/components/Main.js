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

        this.state = {results: ''}
        this.queryNYT = this.queryNYT.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    // Custom Methods
    queryNYT (params) {
        helpers.getArticles(params, (data) => {
            // Sets a results state that is an array of objects
            this.setState({
                results: data
            });
        })
    };

    renderResults () {
        return <Results results={this.state.results} />
    };

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
                  {this.state.results.length > 0 && <Results results={this.state.results} />} 
                <Saved />
            </div>
        )
    };
};

export default Main;