import { Band } from "@/types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "Toby Fox",
    genre: "Video Game Music",
    members: [{ name: "Toby Fox", role: "Composer" }],
    imageUrl: "/images/bands/toby-fox.jpg",
  },
  {
    id: 2,
    name: "Camellia",
    genre: "Speedcore / Electronic",
    members: [{ name: "Camellia", role: "Producer, Composer" }],
    imageUrl: "/images/bands/camellia.jpg",
  },
  {
    id: 3,
    name: "Creo",
    genre: "Electronic",
    members: [{ name: "Creo", role: "Producer" }],
    imageUrl: "/images/bands/creo.jpg",
  },
];