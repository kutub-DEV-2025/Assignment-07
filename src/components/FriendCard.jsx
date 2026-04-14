import { getStatusStyle } from "../utils/statusStyle";

export default function FriendCard({ friend, onClick }) {
  const status = friend.status?.toLowerCase().trim();

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition cursor-pointer flex flex-col items-center text-center"
    >
     
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover mb-3"
      />

     
      <h2 className="text-base font-semibold text-gray-900">
        {friend.name}
      </h2>

      <p className="text-xs text-gray-500 mt-1">
        {friend.days_since_contact} days ago
      </p>

      <div className="flex flex-wrap justify-center gap-1.5 mt-3">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="text-[11px] px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`mt-4 text-[11px] px-3 py-1 rounded-full border font-medium capitalize ${getStatusStyle(
          status
        )}`}
      >
        {friend.status}
      </span>
    </div>
  );
}