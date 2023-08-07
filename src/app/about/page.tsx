import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

export default function About() {
  return (
    <div className="min-h-screen prose hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            We are a social media company that wants to bring people together!
          </p>
        </div>
      </div>
    </div>
  );
}
