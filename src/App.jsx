import { useEffect, useState } from "react";

const CALENDAR_ID = "paraparaumumake@gmail.com";
const API_KEY = "AIzaSyD2qBhlb_rQHGh3kJ_ENFrxsRoFFmfrX8A";

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const timeMin = new Date(today.setHours(0, 0, 0, 0)).toISOString();
    const timeMax = new Date(today.setHours(23, 59, 59, 999)).toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data.items || []))
      .catch((err) => console.error("Failed to fetch events", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">📅 What's On Today</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card shadow-lg bg-base-100 p-4">
          <h2 className="card-title">Main Calendar</h2>
          <ul className="mt-2 space-y-2">
            {events.length === 0 && <li>No events</li>}
            {events.map((event) => {
              const startTime = new Date(event.start.dateTime || event.start.date);
              const endTime = new Date(event.end.dateTime || event.end.date);
              const formattedTime = `${startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} – ${endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

              return (
                <li key={event.id}>
                  <strong>{formattedTime}</strong>: {event.summary}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

