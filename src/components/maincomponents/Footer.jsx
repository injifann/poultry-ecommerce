// Footer.tsx
import Footerpic from '../../assets/images/footerpic.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Logo + Description */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <img
              src={Footerpic}
              alt="Poultry Farms Footer Logo"
              className="h-20 w-auto object-contain brightness-110"
            />
            <p className="text-green-200 text-center md:text-left text-sm leading-relaxed max-w-xs">
              Premium quality poultry products from our farm to your table. Fresh, healthy, and naturally raised.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-50 mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-green-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-green-300 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-green-300 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-green-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-50 mb-5">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/meat" className="hover:text-green-300 transition-colors">
                  Meat
                </a>
              </li>
              <li>
                <a href="/eggs" className="hover:text-green-300 transition-colors">
                  Eggs
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:text-green-300 transition-colors">
                  Tools & Equipment
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-green-300 transition-colors">
                  Shop All
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-50 mb-5">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span>📍 Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📞 +251 9XX XXX XXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>✉️ info@poultryfarms.et</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-50 mb-4">Follow Us</h3>
              <div className="flex gap-6">
                {/* Facebook */}
                <a href="#" className="text-green-300 hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="text-green-300 hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a href="#" className="text-green-300 hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.92 0 .386.045.765.127 1.124-4.091-.205-7.719-2.165-10.148-5.144-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.625-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.685 1.319-3.809 2.105-6.102 2.105-.396 0-.787-.023-1.17-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-green-800/40 text-center text-sm text-green-200">
          <p>© {new Date().getFullYear()} Poultry Farms. All rights reserved.</p>
          <p className="mt-2 text-green-300/80">
            Proudly made with love in Ethiopia 🐔
          </p>
        </div>
      </div>
    </footer>
  );
}