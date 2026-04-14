import { useTimeline } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline, filter, setFilter } = useTimeline();

  const filters = ["All", "Call", "Text", "Video"];

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  
  const getIcon = (type) => {
    if (type === "Call") return "📞";
    if (type === "Text") return "💬";
    if (type === "Video") return "🎥";
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">

      
      <h1 className="text-2xl font-bold mb-6">
        Timeline
      </h1>

      
      <div className="flex gap-3 mb-8">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full text-sm border transition
              ${
                filter === item
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      
      <div className="space-y-3">

        {filteredData.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No activity yet
          </p>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl px-5 py-4 flex items-center justify-between"
            >

            
              <div className="flex items-center gap-3">

               
                <div className="text-xl">
                  {getIcon(item.type)}
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.date}
                  </p>
                </div>

              </div>

            
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium
                ${
                  item.type === "Call"
                    ? "bg-[#ECFDF3] text-[#027A48]"
                    : item.type === "Text"
                    ? "bg-[#EFF8FF] text-[#175CD3]"
                    : "bg-[#F5F3FF] text-[#6D28D9]"
                }`}
            >
              {item.type}
              </span>

            </div>
          ))
        )}

      </div>

    </div>
  );
}