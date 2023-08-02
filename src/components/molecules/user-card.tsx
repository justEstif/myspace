import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <>
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
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </>
  );
}
