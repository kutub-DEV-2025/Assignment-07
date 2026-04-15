import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTimeline } from "../context/TimelineContext";

export default function Stats() {
  const { timeline } = useTimeline();

  
  const call = timeline.filter((t) => t.type === "Call").length;
  const text = timeline.filter((t) => t.type === "Text").length;
  const video = timeline.filter((t) => t.type === "Video").length;

  const data = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Friendship Analytics
      </h1>

      
      <div className="bg-white border rounded-2xl p-6 flex flex-col items-center">

        <PieChart width={320} height={320}>
          <Pie
           innerRadius={80}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>

      </div>

      
      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="bg-white border rounded-xl p-4 text-center">
          <h2 className="text-green-600 font-bold">Call</h2>
          <p className="text-xl">{call}</p>
        </div>

        <div className="bg-white border rounded-xl p-4 text-center">
          <h2 className="text-blue-600 font-bold">Text</h2>
          <p className="text-xl">{text}</p>
        </div>

        <div className="bg-white border rounded-xl p-4 text-center">
          <h2 className="text-purple-600 font-bold">Video</h2>
          <p className="text-xl">{video}</p>
        </div>

      </div>

    </div>
  );
}