import { useState } from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Listing() {
  const navigate = useNavigate();

  // Car Data
  const cars = [
    {
      name: 'Tesla Model S',
      image:
        'https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2023/05/tesla-model-s-plaid-3027662.jpg?tf=3840x',
      desc: 'Electric • 2024 • Automatic',
      price: '$89,000',
    },
    {
      name: 'BMW M4',
      image:
        'https://image-cdn.hypb.st/https://hypebeast.com/image/2024/05/08/bmw-m4-cs-release-info-000.jpg?fit=max&cbr=1&q=90&w=1125&h=750',
      desc: 'Sport Coupe • 2023 • Manual',
      price: '$76,000',
    },
    {
      name: 'Audi A8',
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
      desc: 'Luxury Sedan • 2023 • Automatic',
      price: '$98,000',
    },
    {
      name: 'Mercedes-Benz EQS',
      image:
        'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/820/2022-mercedes-benz-eqs_100820886.jpg',
      desc: 'Electric Sedan • 2024 • Automatic',
      price: '$120,000',
    },
    {
      name: 'Porsche Taycan',
      image:
        'https://www.numerama.com/content/uploads/2020/06/img_3966.jpeg',
      desc: 'Electric Sport • 2024 • Automatic',
      price: '$135,000',
    },
    {
      name: 'Lexus RX 500h',
      image:
        'https://www.slashgear.com/img/gallery/2023-lexus-rx-500h-f-sport-performance-review-too-much-of-everything/l-intro-1689107962.jpg',
      desc: 'Hybrid SUV • 2023 • Automatic',
      price: '$75,000',
    },
    {
      name: 'Toyota Supra GR',
      image:
        'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/1149000/800/1149802.jpg',
      desc: 'Sport Coupe • 2024 • Manual',
      price: '$68,000',
    },
    {
      name: 'Ford Mustang Mach-E',
      image:
        'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/ozdl7mbizylwg0w9ypni',
      desc: 'Electric SUV • 2024 • Automatic',
      price: '$64,000',
    },
    {
      name: 'Nissan GT-R',
      image:
        'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/01/my24-nissan-gt-r-2.jpg',
      desc: 'High Performance • 2023 • Automatic',
      price: '$115,000',
    },
  ];

  const handleOrder = () => navigate('/order');

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
      <section className="pt-32 pb-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Available Cars</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
      <section className="px-6 pb-20">
        {currentCars.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentCars.map((car, index) => (
              <Card
                key={car.name}
                variant="car" // Add this
                image={car.image}
                title={car.name}
                description={car.desc}
                price={car.price}
                buttonText="Order Now"
                onClick={handleOrder}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 py-20">
            No cars found matching your search.
          </p>
        )}
      </section>

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