export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">

      <div className="flex flex-col items-center gap-4">

        
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#244D3F] rounded-full animate-spin"></div>
        </div>

        <p className="text-sm text-gray-500 animate-pulse">
          Loading your connections...
        </p>

      </div>

    </div>
  );
}