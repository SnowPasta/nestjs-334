import { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="bandCard">
      <h2>{band.name}</h2>
      <p>แนวเพลง: {band.genre}</p>
      <ul>
        {band.members.map((member) => (
          <li key={member.name}>
            {member.name} — {member.role}
          </li>
        ))}
      </ul>
    </article>
  );
}