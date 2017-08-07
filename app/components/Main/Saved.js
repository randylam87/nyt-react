// React Dependencies
const React = require('react');

// Create the Search component
class Saved extends React.Component  {
    render() {
        return (
            <div className='panel'>
                <div className='panel-heading panel-results-header'>
                    <strong><i className="fa fa-floppy" aria-hidden="true"></i> Saved Articles</strong>
                </div>
                <div className='panel-body panel-results'>
                </div>
            </div>
        )
    }
}

module.exports = Saved;