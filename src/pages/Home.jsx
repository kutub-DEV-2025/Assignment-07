import friends from "../data/friends.json";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <Banner />

      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4">
        {friends.map((f) => (
          <div
            key={f.id}
            onClick={() => navigate(`/friend/${f.id}`)}
            className="p-4 shadow rounded cursor-pointer"
          >
            <img src={f.picture} className="w-14 rounded-full" />
            <h2>{f.name}</h2>
            <p>{f.days_since_contact} days ago</p>
            <span>{f.status}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}