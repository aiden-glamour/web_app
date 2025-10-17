import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Zap, Gem, Lightbulb, Star } from "lucide-react";
import Navbar from "../../components/navbar";
import Card from "../../components/card";

export default function LandingPage() {
  const [hoveredCar, setHoveredCar] = useState(null);
  const navigate = useNavigate();

  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/order");

  const features = [
    { icon: <Zap size={48} />, title: "Performance", description: "Experience unmatched speed and power." },
    { icon: <Gem size={48} />, title: "Design", description: "Sleek, modern designs that stand out on the road." },
    { icon: <Lightbulb size={48} />, title: "Innovation", description: "Advanced hybrid and electric technologies." },
  ];

  const cars = [
    {
      image: "https://media.autoexpress.co.uk/image/private/s--UqqqK68_--/v1565798338/autoexpress/2019/08/01_7.jpg",
      title: "Tesla Model S",
      description: "Electric • 2024 • Automatic",
      price: "$89,000",
    },
    {
      image: "https://image-cdn.hypb.st/https://hypebeast.com/image/2024/05/08/bmw-m4-cs-release-info-000.jpg?fit=max&cbr=1&q=90&w=1125&h=750",
      title: "BMW M4",
      description: "Sport Coupe • 2023 • Manual",
      price: "$76,000",
    },
    {
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      title: "Audi A8",
      description: "Luxury Sedan • 2023 • Automatic",
      price: "$98,000",
    },
  ];

  const testimonials = [
    {
      quote: "AutoDrive made buying my car effortless. The service was exceptional!",
      name: "John D.",
    },
    {
      quote: "I love my new Tesla! The staff guided me through every step.",
      name: "Maria L.",
    },
    {
      quote: "Smooth process and great car selection. Highly recommended!",
      name: "Kevin R.",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dream Ride
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            From luxury sedans to electric performance — AutoDrive connects you with the car that fits your lifestyle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleExplore}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center gap-2"
            >
              Explore Cars <ChevronRight size={20} />
            </button>
            <button
              onClick={handleOrder}
              className="px-8 py-3 border border-slate-600 rounded-full font-semibold hover:bg-slate-800 transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-screen px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <Card
              key={i}
              variant="feature"
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="cars" className="w-screen px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Cars</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <Card
              key={i}
              variant="car"
              image={car.image}
              title={car.title}
              description={car.description}
              price={car.price}
              onClick={handleOrder}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-screen px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} variant="testimonial" quote={t.quote} name={t.name} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm py-12 mt-20">
        <div className="w-full px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-slate-400 mb-2">
            Have questions? Reach us at{" "}
            <span className="text-cyan-400 font-medium">support@autodrive.com</span>
          </p>
          <p className="text-slate-500 text-sm mt-8">
            © {new Date().getFullYear()} AutoDrive. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
