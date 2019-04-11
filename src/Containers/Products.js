import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchCategories } from '../actions/Product';
import { getProducts } from '../selectors/Products';
import { Link } from 'react-router';
import R from 'ramda';
import { loadMore, addProductToBasket } from '../actions/Product';
import { URL } from '../contrants'

class Products extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    renderProduct = (product, index) => {
        const { addProductToBasket } = this.props;
        const shortDesc = `${R.take(60, product.description)}...`;
        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className="thumbnail">
                    <img className='img-thumbnail'
                        src={URL + product.image}
                        alt={product.name}
                    />
                </div>
                <div className="caption">
                    <h4 className="pull-right">
                        R${product.price}
                    </h4>
                    <h4>
                        <Link to={`./Products/${product.id}`}>
                            {product.name}
                        </Link>
                    </h4>
                    <p> {shortDesc}</p>
                    <p className='itemButton'>
                        <button className="btn btn-primary"
                            onClick={() => addProductToBasket(product.id)}>
                            Comprar
                        </button>
                        {/* <Link to={`/Products/${product.id}`}
                            className="btn btn-default">
                            More Info
                        </Link> */}
                    </p>
                </div>
            </div>
        );
    };

    render() {
        const { products, loadMore } = this.props;
        return (
            <div>
                <div className="books row">
                    {products.map((product, index) => {
                        return this.renderProduct(product, index);
                    })}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="pull-right btn btn-primary"
                            onClick={loadMore}>
                            Carregar Mais
                    </button>
                    </div>

                </div>
            </div>

        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    loadMore: () => dispatch(loadMore()),
    addProductToBasket: (id) => dispatch(addProductToBasket(id)),
    fetchCategories: () => dispatch(fetchCategories())
});
//ownProps are available here because this component is defined directly on route.
//child componenets must include compose withRoutes
const mapStateToProps = (state, ownProps) => ({
    products: getProducts(state, ownProps)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);