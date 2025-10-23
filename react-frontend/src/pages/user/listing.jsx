import { useState } from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronLeft } from 'lucide-react';

export default function Listing() {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(null);

  // Car Data
  const cars = [
    {
      name: 'Tesla Model S',
      image:
        'https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2023/05/tesla-model-s-plaid-3027662.jpg?tf=3840x',
      desc: 'Electric • 2024 • Automatic',
      price: '$89,000',
      specs: {
        power: "1,020 hp",
        acceleration: "0-60 mph in 2.5s",
        range: "396 miles",
        topSpeed: "200 mph"
      },
      features: [
        "Autopilot",
        "17\" Touchscreen",
        "Wireless Charging",
        "Premium Audio System",
        "Full Self-Driving Capability",
        "Glass Roof"
      ],
    },
    {
      name: 'BMW M4',
      image:
        'https://image-cdn.hypb.st/https://hypebeast.com/image/2024/05/08/bmw-m4-cs-release-info-000.jpg?fit=max&cbr=1&q=90&w=1125&h=750',
      desc: 'Sport Coupe • 2023 • Manual',
      price: '$76,000',
      specs: {
        power: "503 hp",
        acceleration: "0-60 mph in 3.8s",
        transmission: "6-speed manual",
        topSpeed: "180 mph"
      },
      features: [
        "M Sport Differential",
        "Carbon Fiber Roof",
        "Adaptive M Suspension",
        "M Sport Exhaust",
        "Track Package",
        "iDrive 8.0 System"
      ],
    },
    {
      name: 'Audi A8',
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
      desc: 'Luxury Sedan • 2023 • Automatic',
      price: '$98,000',
      specs: {
        power: "453 hp",
        acceleration: "0-60 mph in 4.5s",
        transmission: "8-speed automatic",
        drive: "Quattro AWD"
      },
      features: [
        "Bang & Olufsen Sound",
        "Air Suspension",
        "Night Vision Assistant",
        "Executive Rear Seat",
        "Matrix LED Headlights",
        "Massage Function"
      ],
    },
    {
      name: 'Mercedes-Benz EQS',
      image:
        'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/820/2022-mercedes-benz-eqs_100820886.jpg',
      desc: 'Electric Sedan • 2024 • Automatic',
      price: '$120,000',
      specs: {
        power: "516 hp",
        range: "350 miles",
        acceleration: "0-60 mph in 4.1s",
        charging: "80% in 31 min"
      },
      features: [
        "MBUX Hyperscreen",
        "Active Ambient Lighting",
        "Burmester 4D Sound",
        "Air Filtration System",
        "Digital Light Technology",
        "Energizing Comfort"
      ],
    },
    {
      name: 'Porsche Taycan',
      image:
        'https://www.numerama.com/content/uploads/2020/06/img_3966.jpeg',
      desc: 'Electric Sport • 2024 • Automatic',
      price: '$135,000',
      specs: {
        power: "750 hp",
        range: "280 miles",
        acceleration: "0-60 mph in 2.6s",
        charging: "75% in 22.5 min"
      },
      features: [
        "800V Architecture",
        "Adaptive Air Suspension",
        "Sport Chrono Package",
        "Performance Battery Plus",
        "Porsche Dynamic Chassis Control",
        "Launch Control"
      ],
    },
    {
      name: 'Lexus RX 500h',
      image:
        'https://www.slashgear.com/img/gallery/2023-lexus-rx-500h-f-sport-performance-review-too-much-of-everything/l-intro-1689107962.jpg',
      desc: 'Hybrid SUV • 2023 • Automatic',
      price: '$75,000',
      specs: {
        power: "366 hp",
        efficiency: "27/28 mpg",
        acceleration: "0-60 mph in 5.9s",
        drive: "DIRECT4 AWD"
      },
      features: [
        "Mark Levinson Audio",
        "Panoramic View Monitor",
        "Digital Key",
        "Head-Up Display",
        "F SPORT Tuning",
        "Adaptive Variable Suspension"
      ],
    },
    {
      name: 'Toyota Supra GR',
      image:
        'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/1149000/800/1149802.jpg',
      desc: 'Sport Coupe • 2024 • Manual',
      price: '$68,000',
      specs: {
        power: "382 hp",
        transmission: "6-speed manual",
        acceleration: "0-60 mph in 4.1s",
        weight: "3,400 lbs"
      },
      features: [
        "Active Sport Differential",
        "Adaptive Suspension",
        "Sport-tuned Steering",
        "Brembo Brakes",
        "Racing-inspired Interior",
        "Track Mode"
      ],
    },
    {
      name: 'Ford Mustang Mach-E',
      image:
        'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/ozdl7mbizylwg0w9ypni',
      desc: 'Electric SUV • 2024 • Automatic',
      price: '$64,000',
      specs: {
        power: "480 hp",
        range: "312 miles",
        acceleration: "0-60 mph in 3.5s",
        charging: "80% in 45 min"
      },
      features: [
        "BlueCruise Hands-Free",
        "15.5\" Touchscreen",
        "B&O Sound System",
        "Panoramic Sunroof",
        "Phone As A Key",
        "Over-the-air Updates"
      ],
    },
    {
      name: 'Nissan GT-R',
      image:
        'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/01/my24-nissan-gt-r-2.jpg',
      desc: 'High Performance • 2023 • Automatic',
      price: '$115,000',
      specs: {
        power: "565 hp",
        transmission: "6-speed dual-clutch",
        acceleration: "0-60 mph in 2.9s",
        drive: "ATTESA ET-S AWD"
      },
      features: [
        "Brembo Carbon Ceramics",
        "NISMO Tuning",
        "Recaro Seats",
        "Vehicle Dynamic Control",
        "Titanium Exhaust",
        "Race Mode"
      ],
    },
  ];

  const handleOrder = (carData) => {
    navigate('/order', { 
      state: { 
        car: {
          name: carData.name,
          image: carData.image,
          desc: carData.desc,
          price: carData.price
        }
      } 
    });
  };

  // Search and Pagination State
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Filter cars by search term
  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const currentCars = filteredCars.slice(startIndex, startIndex + carsPerPage);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-10 text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Available Cars</h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          Explore our collection of luxury, electric, and high-performance vehicles.
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-10 px-6">
        <div className="flex items-center bg-slate-800 border border-slate-700 rounded-full px-5 py-3">
          <Search size={20} className="text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-transparent outline-none w-full text-slate-200 placeholder-slate-500"
          />
        </div>
      </div>

      {/* Cars Grid */}
      <section className="px-4 md:px-6 pb-28 md:pb-20"> {/* Adjusted padding for mobile */}
        {currentCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
            {currentCars.map((car, index) => (
              <Card
                key={car.name}
                variant="car" // Add this
                image={car.image}
                title={car.name}
                description={car.desc}
                price={car.price}
                buttonText="View Details"
                onClick={() => setSelectedCar(car)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 py-20">
            No cars found matching your search.
          </p>
        )}
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedCar(null)}
              aria-hidden="true"
            />

            {/* Modal panel */}
            <div className="inline-block w-full max-w-2xl my-8 text-left align-middle transition-all transform">
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl shadow-xl">
                {/* Close button */}
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                >
                  <X size={20} />
                </button>

                {/* Car image */}
                <div className="relative aspect-video w-full">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="px-6 pb-6 -mt-12 relative">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedCar.name}</h3>
                  <p className="text-slate-400">{selectedCar.desc}</p>
                  
                  {/* Specifications */}
                  {selectedCar.specs && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Specifications</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedCar.specs).map(([key, value]) => (
                          <div key={key} className="bg-slate-800/50 rounded-lg p-3">
                            <p className="text-slate-400 text-sm capitalize">{key}</p>
                            <p className="font-semibold">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {selectedCar.features && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedCar.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price and Action */}
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Price</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {selectedCar.price}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const carData = {
                          name: selectedCar.name,
                          image: selectedCar.image,
                          desc: selectedCar.desc,
                          price: selectedCar.price
                        };
                        setSelectedCar(null);
                        navigate('/order', { state: { car: carData } });
                      }}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 pb-20">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-800 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm py-12 mt-20">
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