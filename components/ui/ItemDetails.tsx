import { EventItem } from "@/components/definitions/event-items";
import Image from "next/image";

export default function eventDetails({ event }: { event: EventItem }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <Image src={event.image} alt={event.name} height={1000} width={1000} />
      <p>{event.description}</p>
      <p>${event.club}</p>
      <div className="flex flex-col">
        <h1>Leaderboard</h1>
        {event.leaderboard.map((leader) => (
          <div key={leader.id} className="flex flex-row">
            <p className="flex" key={leader.id}>{leader.name}  </p>
            <p className="flex" key={leader.id}>{leader.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
