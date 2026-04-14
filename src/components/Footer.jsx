export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white mt-16">

      
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center">

        
        <img
          src="/assets/logo-xl.png"
          alt="KeenKeeper Logo"
          className="w-32 h-auto mb-4"
        />

        <p className="text-sm text-white/80 max-w-md">
          Stay connected with your friends and never lose touch again.
        </p>

        <p className="text-sm mt-6 text-white/70">
          Follow us
        </p>

       
        <div className="flex items-center justify-center gap-5 mt-4">
          <img
            src="/assets/instagram.png"
            alt="instagram"
            className="w-6 h-6 hover:scale-110 transition"
          />
          <img
            src="/assets/facebook.png"
            alt="facebook"
            className="w-6 h-6 hover:scale-110 transition"
          />
          <img
            src="/assets/twitter.png"
            alt="twitter"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-2">

          <p>
            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>

        </div>
      </div>

    </footer>
  );
}