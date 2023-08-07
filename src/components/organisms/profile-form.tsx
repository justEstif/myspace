"use client";

export default function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <>
      <h2>Edit Your Profile</h2>
      <form className="space-y-6 w-full max-w-lg" onSubmit={updateUser}>
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="w-full max-w-xs input input-bordered"
            type="text"
            name="name"
            defaultValue={user?.name ?? ""}
          />
        </div>

        <div>
          <label className="label" htmlFor="age">
            Age
          </label>
          <input
            className="w-full max-w-[5rem] input input-bordered"
            type="text"
            name="age"
            defaultValue={user?.age ?? 0}
          />
        </div>
        <div>
          <label className="label" htmlFor="image">
            Profile Image URL
          </label>
          <input
            className="w-full max-w-md input input-bordered"
            type="text"
            name="image"
            defaultValue={user?.image ?? ""}
          />
        </div>
        <div>
          <label className="label" htmlFor="bio">
            Bio
          </label>
          <textarea
            className="w-full textarea textarea-bordered max-x-md"
            rows={3}
            name="bio"
            defaultValue={user?.bio ?? ""}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}
