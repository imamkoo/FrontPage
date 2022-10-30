import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-4 ">
      <Head>
        <title>Jago Belajar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="container text-center">Halaman Utama</h1>
      </main>
    </div>
  );
}
