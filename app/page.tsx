import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <span className="text-5xl">Hola mundo!!!</span>
      <Link href={'/about'}>About page</Link>
    </div>
  );
}
