import { useParams } from "react-router-dom";
import friends from "../data/friends.json";
import { toast } from "react-toastify";
import { useTimeline } from "../context/TimelineContext";

const STATUS_STYLES = {
  overdue: "bg-[#FEF3F2] text-[#B42318] border-[#FEE4E2]",
  "almost due": "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]",
  "on-track": "bg-[#ECFDF3] text-[#027A48] border-[#ABEFC6]",
};

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);

  const { addEntry } = useTimeline();

  if (!friend) {
    return (
      <div className="text-center py-20 text-gray-500">
        Friend not found
      </div>
    );
  }

  const status = friend.status?.toLowerCase().trim();
  const statusStyle =
    STATUS_STYLES[status] || "bg-gray-100 text-gray-600 border-gray-200";

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} with ${friend.name}`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full object-cover border"
          />

          <h1 className="text-2xl font-semibold mt-4 text-gray-900">
            {friend.name}
          </h1>

          <p className="text-sm text-gray-500">{friend.email}</p>

          <div className="mt-3">
            <span
              className={`text-xs px-3 py-1 rounded-full border capitalize ${statusStyle}`}
            >
              {friend.status}
            </span>
          </div>

         
          <div className="flex flex-wrap gap-2 mt-4">
            {friend.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-gray-50 border text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>

         
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            {friend.bio}
          </p>

          
          <div className="mt-6 space-y-2">
            <button className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
              ⏰ Snooze 2 Weeks
            </button>
            <button className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
              📦 Archive
            </button>
            <button className="w-full py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-sm">
              🗑️ Delete
            </button>
          </div>
        </div>

      
        <div className="lg:col-span-2 space-y-6">

          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: "Days Since Contact",
                value: friend.days_since_contact,
              },
              {
                label: "Goal",
                value: `${friend.goal} days`,
              },
              {
                label: "Next Due Date",
                value: friend.next_due_date,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-4"
              >
                <p className="text-xs text-gray-400">{item.label}</p>
                <h2 className="text-lg font-semibold text-gray-900 mt-1">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-gray-900">
              Relationship Goal
            </h2>

            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">
                Maintain contact every {friend.goal} days
              </p>

              <button className="text-sm px-4 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
                Edit
              </button>
            </div>
          </div>

          
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <h2 className="font-semibold mb-3 text-gray-900">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-3 gap-3">

              <button
                onClick={() => handleAction("Call")}
                className="flex flex-col items-center gap-1 py-3 rounded-xl bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-lg">📞</span>
                <span className="text-sm">Call</span>
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="flex flex-col items-center gap-1 py-3 rounded-xl bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-lg">💬</span>
                <span className="text-sm">Text</span>
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="flex flex-col items-center gap-1 py-3 rounded-xl bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-lg">🎥</span>
                <span className="text-sm">Video</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}