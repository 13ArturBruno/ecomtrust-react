import React from 'react';
import { connect } from 'react-redux';
import { searchProduct } from '../actions/Product';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    };


    handleSubmit = (e) => {

        e.preventDefault();
        this.props.searchProduct(this.state.searchValue);
    };

    onSearchInputChange = (e) => {
        const searchValue = e.target.value;
        // console.log("Handling submit : ", searchValue);
        this.setState({
            searchValue
        });

    };

    render() {
        return (
            <div className="well blosd">
                <h3 className="lead">
                    Pesquisar
                </h3>
                <div className="input-group">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.searchValue}
                            onChange={this.onSearchInputChange}
                        />
                    </form>
                    <span className="input-group-btn">
                        <button className="btn btn-default">
                            <span className="glyphicon glyphicon-search" />
                        </button>
                    </span>
                </div>
            </div>
        );
    };
};

// export default Search;

const mapDispatchToProps = (dispatch) => ({
    searchProduct: (text) => dispatch(searchProduct(text))
});

export default connect(undefined, mapDispatchToProps)(Search);