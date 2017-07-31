// React Dependencies
const React = require('react');
const Saved = require('./Main/Saved');
const Search = require('./Main/Search');
// Requiring our helper for making API calls
const helper = require('../utils/helper');

// Create the Main component
class Main extends React.Component  {
    render() {
        return (
            <div>
                <h1>Main Component</h1>
                < Saved />
                < Search />
            </div>
        )
    }
}

module.exports = Main;