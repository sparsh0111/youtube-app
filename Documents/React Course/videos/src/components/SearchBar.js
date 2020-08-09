import React from 'react';

class SearchBar extends React.Component {
    state = { input:'' };

    inputChange = (event) => {
        this.setState({input: event.target.value});
    }

    sendData = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.input);
    }

    render() {
        return <div className="ui container">
            <form onSubmit={this.sendData} className="ui form">
                <input type="text" value={this.state.input} onChange={this.inputChange}></input>
            </form>
        </div>
    }
}

export default SearchBar;