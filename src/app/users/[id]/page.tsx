// import FollowButton from "@/components/FollowButton/FollowButton";
import FollowButton from "@/components/molecules/follow-button";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });

  if (!user) {
    throw new Error("User not found");
  }
  const { name, bio, image } = user ?? {};

  return (
    <>
      <h1>{name}</h1>

      <div className="avatar">
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

        <div className="overflow-hidden relative rounded w-18">
          <Image
            alt={`${name}'s profile pic'` ?? "profile pic"}
            src={image ?? "/mememan.webp"}
            fill={true}
            objectFit="contain"
          />
        </div>
      </div>

      {bio && (
        <>
          <h3>Bio</h3>
          <p>{bio}</p>
        </>
      )}

      <div>
        <FollowButton targetUserId={params.id} />
      </div>
    </>
  );
}
