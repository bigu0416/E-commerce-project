import Head from 'next/head';

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>My E-Commerce Site</title>
        <meta name="description" content="The best online store for your needs!" />
      </Head>

      {/* Navigation */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyStore</h1>
          <div>
            <a href="#" className="mr-4 hover:text-gray-400">Home</a>
            <a href="#" className="mr-4 hover:text-gray-400">Cart</a>
            <a href="#" className="hover:text-gray-400">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to MyStore</h2>
        <p className="text-lg mb-6">Your one-stop shop for amazing products and deals!</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto p-8">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="border rounded-lg shadow-lg p-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Product 1" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Product 1</h4>
            <p className="text-gray-600 mb-2">$99.99</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
          {/* Product 2 */}
          <div className="border rounded-lg shadow-lg p-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Product 2" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Product 2</h4>
            <p className="text-gray-600 mb-2">$149.99</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
          {/* Product 3 */}
          <div className="border rounded-lg shadow-lg p-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Product 3" className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Product 3</h4>
            <p className="text-gray-600 mb-2">$199.99</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </footer>
    </div>
  );
}
