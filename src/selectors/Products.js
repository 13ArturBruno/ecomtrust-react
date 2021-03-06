import R from 'ramda';


export const getProductsById = (state, id) => R.prop(id, state.product);

export const getActiveCategoryId = ownProps => {
    //console.log("ownProps ", ownProps);
    return R.path(['params', 'id'], ownProps);
};

export const getProducts = (state, ownProps) => {
    // const products = R.map(id=>getProductsById(state,id),state.ProductsPage.ids);
    // return products;

    const activeCategoryId = getActiveCategoryId(ownProps);
    //console.log("activeCategoryId ", activeCategoryId);
    const applyCategory = (item) => {
        console.log("Item ", item.category);
        //console.log("active", activeCategoryId)
        return activeCategoryId == item.category
    };
    const applySearch = (item) => {
        return R.contains(
            state.ProductsPage.search,
            R.prop('name', item)
        )
    };
    const products = R.compose(
        R.filter(applySearch),
        R.when(R.always(activeCategoryId), R.filter(applyCategory)),
        R.map(id => getProductsById(state, id))
    )(state.ProductsPage.ids);
    return products;
};

export const getRenderedProductsLength = state => R.length(state.ProductsPage.ids);

export const getTotalBasketPrice = state => {

    const products = R.map(id => getProductsById(state, id), state.Basket);
    // console.log("Products are " , products);
    let total = 0;
    return products.reduce((total, product) => {
        return total + product.price;
    }, total);
    // console.log("Product total is ", phnTotal);
};

export const getTotalBasketCount = state => {
    return state.Basket.length;
};

export const getCategories = (state) => {
    // console.log(" fething categories from state " ,R.values(state.Categories));
    return R.values(state.Categories);
};


export const getBasketProductsWithCount = (state) => {
    const uniqueIds = R.uniq(state.Basket);

    const productCount = (id) => {
        return (
            R.compose(
                R.length,
                R.filter(basketId => R.equals(id, basketId))
            )(state.Basket)
        );
    };
    const productWithCount = (product) => {
        return R.assoc('count', productCount(product.id), product);
    };
    const products = R.compose(
        R.map(productWithCount),
        R.map(id => getProductsById(state, id))
    )(uniqueIds);
    console.log("Products in basket are ", products);
    return products;
};

