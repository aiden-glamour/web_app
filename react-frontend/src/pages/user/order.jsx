import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, ChevronLeft } from 'lucide-react';
import Navbar from '../../components/navbar';
import Card from '../../components/card'; // Fixed import path

export default function Order() {
  const { state } = useLocation(); // Get car data from navigate state
  const navigate = useNavigate();
  const car = state?.carDetails || state?.car; // Access car data from either property
  const [showDetails, setShowDetails] = useState(false);

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
      <section className="pt-24 md:pt-32 pb-8 md:pb-10 text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Place Your Order</h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          Confirm your order for the {car.name}.
        </p>
      </section>

      {/* Car Details and Order Form */}
      <section className="px-4 md:px-6 pb-28 md:pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Car Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Selected Car</h2>
            <Card
              variant="car"
              image={car.image}
              title={car.name}
              description={car.desc}
              price={car.price}
              buttonText="View Details"
              onClick={() => setShowDetails(true)}
            />

            <button
              onClick={() => navigate('/listing')}
              className="mt-4 w-full px-6 py-3 border border-slate-600 rounded-lg font-semibold hover:bg-slate-800 transition text-center"
            >
              Change Car
            </button>
          </div>

          {/* Order Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Order Details</h2>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-4 md:p-8"
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
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm py-8 md:py-12">
        <div className="w-full px-4 md:px-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Drive the Future</h3>
          <p className="text-slate-400 text-sm md:text-base mb-2">
            Find the car that defines your lifestyle at{' '}
            <span className="text-cyan-400 font-medium">AutoDrive</span>.
          </p>
          <p className="text-slate-500 text-xs md:text-sm mt-6 md:mt-8">
            © {new Date().getFullYear()} AutoDrive. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Car Detail Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={() => setShowDetails(false)}
              aria-hidden="true"
            />

            {/* Modal panel */}
            <div className="inline-block w-full max-w-2xl my-8 text-left align-middle transition-all transform">
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl shadow-xl">
                {/* Close button */}
                <button
                  onClick={() => setShowDetails(false)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                >
                  <X size={20} />
                </button>

                {/* Car image */}
                <div className="relative aspect-video w-full">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="px-6 pb-6 -mt-12 relative">
                  <h3 className="text-3xl font-bold text-white mb-2">{car.name}</h3>
                  <p className="text-slate-400">{car.desc}</p>
                  
                  {/* Specifications */}
                  {car.specs && (
                    <div className="mt-4 md:mt-6">
                      <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Specifications</h4>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {Object.entries(car.specs).map(([key, value]) => (
                          <div key={key} className="bg-slate-800/50 rounded-lg p-2 md:p-3">
                            <p className="text-slate-400 text-xs md:text-sm capitalize">{key}</p>
                            <p className="font-semibold text-sm md:text-base">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {car.features && (
                    <div className="mt-4 md:mt-6">
                      <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        {car.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-slate-300 text-sm md:text-base">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mt-6 md:mt-8">
                    <p className="text-slate-400 text-xs md:text-sm">Price</p>
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {car.price}
                    </p>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setShowDetails(false)}
                    className="w-full mt-4 md:mt-6 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg md:rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm md:text-base"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}