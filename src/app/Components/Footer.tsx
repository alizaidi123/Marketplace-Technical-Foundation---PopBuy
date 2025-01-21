export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="footer p-5 border-t-2 leading-10 border-gray-300 flex flex-col lg:flex-row lg:justify-between gap-8">
          
          <div className="w-full sm:w-auto">
            <h2 className="font-bold text-2xl">Funiro.</h2>
            <p className="leading-none">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          
          <div>
            <h4 className="font-semibold">Navbar</h4>
            <ul className="space-y-1">
              <li> <a href="/">Home</a></li>
              <li><a href="/Shop">Shop</a></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Contact1">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Help</h4>
            <ul className="space-y-1">
              <li>Payment Option</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full sm:w-auto p-2 border-2 border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="font-bold bg-[#B88E2F] text-white px-4 py-2 rounded w-full sm:w-auto"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

      
        <div className="text-center mt-6">
          <hr className="mb-4" />
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
