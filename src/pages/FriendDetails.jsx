import { useParams } from "react-router-dom";
import friends from "../data/friends.json";
import { toast } from "react-toastify";
import { useTimeline } from "../context/TimelineContext";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);

  const { addEntry } = useTimeline(); // ✅ FIXED (inside component)

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} with ${friend.name}`);
  };

  if (!friend) {
    return (
      <div className="text-center py-20 text-gray-500">
        Friend not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

        
        <div className="bg-white border rounded-2xl p-6 shadow-sm">

          <img
            src={friend.picture}
            className="w-24 h-24 rounded-full object-cover"
          />

          <h1 className="text-2xl font-bold mt-4">
            {friend.name}
          </h1>

          <p className="text-gray-500">{friend.email}</p>

          <div className="mt-3">
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                friend.status === "overdue"
                  ? "bg-red-100 text-red-600"
                  : friend.status === "almost due"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {friend.status}
            </span>
          </div>

          <div className="flex gap-2 flex-wrap mt-4">
            {friend.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                #{t}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-4">
            {friend.bio}
          </p>

          <div className="mt-6 space-y-2">
            <button className="w-full py-2 bg-gray-100 rounded-lg">
              ⏰ Snooze 2 Weeks
            </button>
            <button className="w-full py-2 bg-gray-100 rounded-lg">
              📦 Archive
            </button>
            <button className="w-full py-2 bg-red-100 text-red-600 rounded-lg">
              🗑️ Delete
            </button>
          </div>
        </div>

        
        <div className="lg:col-span-2 space-y-6">

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-white border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Days Since Contact</p>
              <h2 className="text-xl font-bold">
                {friend.days_since_contact}
              </h2>
            </div>

            <div className="bg-white border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Goal</p>
              <h2 className="text-xl font-bold">
                {friend.goal} days
              </h2>
            </div>

            <div className="bg-white border rounded-xl p-4">
              <p className="text-gray-500 text-sm">Next Due Date</p>
              <h2 className="text-xl font-bold">
                {friend.next_due_date}
              </h2>
            </div>

          </div>

          <div className="bg-white border rounded-xl p-5">
            <h2 className="font-semibold mb-2">
              Relationship Goal
            </h2>

            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                Maintain contact every {friend.goal} days
              </p>

              <button className="bg-gray-200 text-black py-1 p-3 rounded-lg text-sm">
                Edit
              </button>
            </div>
          </div>

          
          <div className="bg-white border rounded-xl p-5">

            <h2 className="font-semibold mb-3">
              Quick Check-In
            </h2>

            <div className="flex gap-3">

           <button
            onClick={() => handleAction("Call")}
            className="flex-1 flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-lg transition">
            <img src="/assets/call.png" className="w-6 h-6" />
            <span className="text-sm text-gray-700">Call</span>
            </button>

              <button
                onClick={() => handleAction("Text")}
               className="flex-1 flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-lg transition">
                <img src="/assets/text.png" className="w-6 h-6" />
                <span className="text-sm text-gray-700">Text</span>
                </button>

              <button
                onClick={() => handleAction("Video")}
                className="flex-1 flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-lg transition">
                 <img src="/assets/video.png" className="w-6 h-6" />
                <span className="text-sm text-gray-700">Video</span>
                </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}