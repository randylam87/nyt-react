// React Dependencies
const React = require('react');

// Create the Search component
class Search extends React.Component  {
    render() {
        return (
            <div className='panel'>
                <div className='panel-heading panel-search'>
                    <strong><i className="fa fa-list-alt" aria-hidden="true"></i> Search Parameters</strong>
                </div>
                <div className='panel-body panel-form'>
                    <form>
                        <div className='form-group'>
                            <label for='search-term'>Search Term: </label>
                            <input className='form-control' type='text' id='search-term' name='term' required />
                        </div>
                        <div className='form-group'>
                            <label for='search-term'>Number of Records to Retrieve: </label>
                            <select className='form-control' type='text' id='search-limit' name='limit'>
                                <option value='1'>1</option>
                                <option value='5' selected>5</option>
                                <option value='10'>10</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label for='search-term'>Start Year (Optional): </label>
                            <input className='form-control' type='text' id='search-start-year' name='start' />
                        </div>
                        <div className='form-group'>
                            <label for='search-term'>End Year (Optional): </label>
                            <input className='form-control' type='text' id='search-end-year' name='end' />
                        </div>
                        <button type='submit' className='btn btn-lg btn-search' id='search'><i className="fa fa-search" aria-hidden="true"></i> Search </button>
                        <button type='submit' className='btn btn-lg btn-search' id='search-clear'><i className="fa fa-trash-o" aria-hidden="true"></i> Clear Result </button>
                    </form>
                </div>
            </div>
        )
    }
}

module.exports = Search;