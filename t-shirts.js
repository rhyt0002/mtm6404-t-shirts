
const products = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'grey-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

function App() {
  const [productsState, setProductsState] = React.useState(products);

  const handleBuy = (index, quantity) => {
    const newProductsState = [...productsState];
    newProductsState[index].stock -= quantity;
    setProductsState(newProductsState);
  };

  return (
    <div>
      <h1>T-Shirts Storefront</h1>
      <div className="row" id="products">
        {productsState.map((product, index) => (
          <div key={product.id} className="product col col-12 col-md-6 col-lg-4 p-3 bg-light d-flex flex-column">
            <img src={`images/${product.image}`} alt={product.title} className="img-fluid image-product" />
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Stock: {product.stock > 0 ? product.stock : 'Out of Stock'}</p>
            {product.stock > 0 && (
              <div>
                <select
                  value={product.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10);
                    setProductsState((prevProductsState) => {
                      const updatedProducts = [...prevProductsState];
                      updatedProducts[index].quantity = newQuantity;
                      return updatedProducts;
                    });
                  }}
                >
                  {Array.from({ length: product.stock }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleBuy(index, product.quantity)}>
                  Buy
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);