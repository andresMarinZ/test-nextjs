import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Title",
  description: "Contact description",
};

export default function Contact() {
  return (
    <>
      <p className="text-7xl">Welcome to our contact page!</p>
    </>
  );
}
