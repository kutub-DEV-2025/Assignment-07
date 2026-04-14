export default function FriendCard({ friend, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer hover:shadow-lg transition duration-300 mx-auto container"
    >


      <div className="flex items-center gap-4">

    
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-14 h-14 rounded-full object-cover border"
        />

        <div className="flex-1">
          <h2 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
            {friend.name}
          </h2>
          <p className="text-sm text-gray-500 truncate">
            {friend.email}
          </p>
        </div>

      </div>

    
      <div className="my-4 border-t border-gray-100"></div>

     
      <div className="flex justify-between items-center text-sm">

        <div>
          <p className="text-gray-500">Last Contact</p>
          <p className="font-medium text-gray-800">
            {friend.days_since_contact} days ago
          </p>
        </div>

        
        <div className="text-right">
          <p className="text-gray-500">Goal</p>
          <p className="font-medium text-gray-800">
            {friend.goal} days
          </p>
        </div>

      </div>

     
      <div className="flex flex-wrap gap-2 mt-4">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-white text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

     
      <div className="mt-4 flex justify-between items-center">

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium
          ${
            friend.status === "overdue"
              ? "bg-red-100 text-red-600"
              : friend.status === "almost due"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-600"
          }`}
        >
          {friend.status}
        </span>

      
        <div className="text-gray-300 group-hover:text-indigo-500 transition">
          ➜
        </div>

      </div>

    </div>
  );
}