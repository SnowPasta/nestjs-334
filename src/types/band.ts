export type Member = {
  name: string;
  role: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  members: Member[];
};