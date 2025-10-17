import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Card from '../../components/card'; // Fixed import path

export default function Order() {
  const { state } = useLocation(); // Get car data from navigate state
  const navigate = useNavigate();
  const car = state?.car; // Access car data

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    delivery: 'pickup',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send order data to backend (e.g., via Axios)
    console.log('Order submitted:', { car, formData });
    alert('Order placed successfully!');
    navigate('/'); // Redirect to home or confirmation page
  };

  // Handle case where no car is selected
  if (!car) {
    return (
      <div className="min-h-screen w-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <Navbar />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-5xl font-bold mb-4">No Car Selected</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Please select a car from the listing page to place an order.
          </p>
          <button
            onClick={() => navigate('/listing')}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
          >
            Back to Listings
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Place Your Order</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Confirm your order for the {car.name}.
        </p>
      </section>

      {/* Car Details and Order Form */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Car Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Selected Car</h2>
            <Card
              variant="car"
              image={car.image}
              title={car.name}
              description={car.desc}
              price={car.price}
              buttonText="Change Car"
              onClick={() => navigate('/listing')}
            />
          </div>

          {/* Order Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Order Details</h2>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="delivery" className="block text-slate-300 mb-2">
                  Delivery Option
                </label>
                <select
                  id="delivery"
                  name="delivery"
                  value={formData.delivery}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="pickup">Pickup</option>
                  <option value="delivery">Home Delivery</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm py-12">
        <div className="w-full px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Drive the Future</h3>
          <p className="text-slate-400 mb-2">
            Find the car that defines your lifestyle at{' '}
            <span className="text-cyan-400 font-medium">AutoDrive</span>.
          </p>
          <p className="text-slate-500 text-sm mt-8">
            © {new Date().getFullYear()} AutoDrive. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}