// src/components/card.jsx
export default function Card({
  variant = "feature",
  icon,
  image,
  title,
  description,
  price,
  onClick,
  quote,
  name,
}) {
  if (variant === "feature") {
    return (
      <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition text-center hover:shadow-lg hover:shadow-cyan-500/10">
        <div className="flex justify-center mb-4 text-cyan-400">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    );
  }

  if (variant === "car") {
    return (
      <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer">
        <div 
          className="relative h-56 overflow-hidden"
          onClick={() => onClick?.({ image, title, description, price })}
        >
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-400 mb-4 text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {price}
            </p>
            <button 
              onClick={() => onClick?.({ image, title, description, price })}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "testimonial") {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition hover:shadow-lg hover:shadow-cyan-500/10">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 text-cyan-400" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.5 12.09 1 8.18l6.06-.54L10 2l2.94 5.64L19 8.18l-4.5 3.91 1.378 5.999z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-300 italic mb-6">"{quote}"</p>
        <p className="font-semibold text-cyan-400">— {name}</p>
      </div>
    );
  }

  return null;
}
