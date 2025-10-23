import React from 'react';
import { X, Car, Calendar, Gauge, DollarSign } from 'lucide-react';

const CarDetailModal = ({ isOpen, onClose, car }) => {
  if (!isOpen || !car) return null;

  const features = [
    { icon: <Car size={20} />, label: car.description },
    { icon: <Calendar size={20} />, label: "2024" },
    { icon: <Gauge size={20} />, label: "Brand New" },
    { icon: <DollarSign size={20} />, label: car.price },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal panel */}
        <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform">
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl shadow-xl">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Car image */}
            <div className="relative aspect-video w-full">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="px-6 pb-6 -mt-12 relative">
              <h3 className="text-2xl font-bold text-white mb-2">{car.title}</h3>
              
              {/* Features grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="p-2 rounded-full bg-white/10">
                      {feature.icon}
                    </div>
                    <span className="text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="mt-6 text-slate-300 text-sm leading-relaxed">
                Experience luxury and performance combined in this exceptional vehicle. 
                Featuring cutting-edge technology and superior comfort.
              </p>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button
                  onClick={onClose}
                  className="px-4 py-3 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    // Add your order/contact logic here
                  }}
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition"
                >
                  Contact Dealer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;