import { useEffect, useState } from "react";
import friends from "../data/friends.json";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import { getStatusStyle } from "../utils/statusStyle";

export default function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <Banner />

      <div className="max-w-7xl mx-auto mt-8">

        <div className="grid gap-6
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4"
        >
          {friends.map((f) => (
            <div
              key={f.id}
              onClick={() => navigate(`/friend/${f.id}`)}
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition cursor-pointer shadow-card flex flex-col items-center text-center gap-2"
            >
              <img
                src={f.picture}
                className="w-14 h-14 rounded-full object-cover mb-3 "
              />

              <h2 className="font-semibold text-gray-900">
                {f.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {f.days_since_contact} days ago
              </p>

              <span 
        className={`mt-4 text-[11px] px-3 py-1 rounded-full border font-medium capitalize ${getStatusStyle(
          f.status?.toLocaleLowerCase().trim()
        )}`}>
                {f.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}