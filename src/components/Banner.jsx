export default function Banner() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
      <p className="text-gray-500">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
        relationships that matter most.</p>

      <button className="mt-4 px-4 py-2 bg-[#244D3F] text-white rounded">
        + Add Friend
      </button>
      <div className="max-w-7xl mx-auto grid gap-6
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 pt-3">
        <div className="group bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer hover:shadow-lg transition duration-300">
            <h3 className="text-[#244D3F] font-bold text-2xl">20</h3>
            <p className="text-gray-500">Total Friends</p>
        </div>
        <div className="group bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer hover:shadow-lg transition duration-300">
            <h3 className="text-[#244D3F] font-bold text-2xl">3</h3>
            <p className="text-gray-500">On Track</p>
        </div>
        <div className="group bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer hover:shadow-lg transition duration-300">
            <h3 className="text-[#244D3F] font-bold text-2xl">6</h3>
            <p className="text-gray-500">Need Attention</p>
        </div>
        <div className="group bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer hover:shadow-lg transition duration-300">
            <h3 className="text-[#244D3F] font-bold text-2xl">12</h3>
            <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>
      <h2 className=" text-4xl font-bold text-start mt-3 container mx-auto">Your Friends</h2>
    </div>
    
  );
}