export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-screen bg-white shadow-md z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">AutoDrive</div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#cars" className="hover:text-blue-600 transition">Cars</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
            Log In
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}