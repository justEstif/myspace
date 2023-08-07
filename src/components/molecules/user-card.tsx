import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, image }: Props) {
  return (
    <>
      <Link href={`/users/${id}`}>
        <div className="avatar">
          <div className="overflow-hidden relative w-24 rounded">
            <Image
              alt={`${name}'s profile pic'` ?? "profile pic"}
              src={image ?? "/mememan.webp"}
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <h3>{name}</h3>
        </div>
      </Link>
    </>
  );
}
