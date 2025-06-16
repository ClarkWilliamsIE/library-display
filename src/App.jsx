export default function App() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">📅 What's On Today</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((room) => (
          <div key={room} className="card shadow-lg bg-base-100 p-4">
            <h2 className="card-title">Room {room}</h2>
            <p className="text-sm text-gray-500">No events yet</p>
          </div>
        ))}
      </div>
    </div>
  );
}
