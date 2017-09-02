// React Dependencies
import React, {Component} from 'react';

// Create the Search component
class Search extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            q: '',
            limit: '5',
            begin_date: '',
            end_date: '',
            value: '5'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if(event.currentTarget.name === 'limit'){
            this.setState({
                value: event.target.value
            });
        }
        this.setState({
            [event.currentTarget.name]: event.target.value
        });
    };

    handleSubmit(event) {
        let params = this.state;
        this.props.queryNYT(params);
        this.setState({
            q: '',
            limit: '5',
            begin_date: '',
            end_date: '',
            value: '5'
        })
        event.preventDefault();
    };


    render() {
        return (
            <div className='panel'>
                <div className='panel-heading panel-search'>
                    <strong><i className="fa fa-list-alt" aria-hidden="true"></i> Search Parameters</strong>
                </div>
                <div className='panel-body panel-form'>
                    <form onSubmit={this.handleSubmit}>
                         <div className='form-group'>
                            <label htmlFor='search-term'>Search Term: </label>
                            <input className='form-control' type='text' id='search-term' name='q' value={this.state.q} onChange={this.handleChange} required />
                        </div> 
                         <div className='form-group'>
                            <label htmlFor='search-term'>Number of Records to Retrieve: </label>
                            <select className='form-control' type='text' id='search-limit'  name='limit' value={this.state.value} onChange={this.handleChange} >
                                <option value='1'>1</option>
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='search-term'>Start Year (Optional): </label>
                            <input className='form-control' type='text' id='search-start-year' name='begin_date' value={this.state.begin_date} onChange={this.handleChange} placeholder='YYYYMMDD' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='search-term'>End Year (Optional): </label>
                            <input className='form-control' type='text' id='search-end-year' name='end_date' value={this.state.end_date} onChange={this.handleChange} placeholder='YYYYMMDD'/>
                        </div> 
                         <button type='submit' className='btn btn-lg btn-search' id='search'><i className="fa fa-search" aria-hidden="true"></i> Search </button>
                        <button type='button' className='btn btn-lg btn-search' id='search-clear' onClick={this.props.clearState}><i className="fa fa-trash-o" aria-hidden="true"></i> Clear Result </button> 
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;