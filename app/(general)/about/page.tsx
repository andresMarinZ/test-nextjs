import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "Description of the about page",
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">Welcome to our about page!</span>
    </>
  );
}
