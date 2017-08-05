// React Dependencies
import React, {Component} from 'react';
import Saved from './Main/Saved';
import Search from './Main/Search';
// Requiring our helper for making API calls
import helper from '../utils/helper';

// Create the Main component
export default class Main extends Component  {
    render() {
        return (
           <div className='container'>
               <div className='jumbotron text-center'>
               <h1><i className="fa fa-newspaper-o" aria-hidden="true"></i> New York Times Search</h1>
               </div>
                <Search />
                <Saved />
            </div>
        )
    };
};