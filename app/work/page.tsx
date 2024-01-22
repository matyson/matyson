import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a mathematician and software developer. I love how math can be
          used as a lens to understand the world and solve both silly daily
          conflicts and complex problems. I am loving to develop for the web
          and i am eager to learn more about it.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">CNPEM</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Technology Development Analyst, 2019 - present
        </p>
        <p>
          I am bla...
        </p>
        <ul>
          <li>
            In 2019, i joined the Scientific Computing group at{" "}
            <a href="https://lnls.cnpem.br/sirius/">LNLS</a> as an intern,
            working mainly on image processing and image reconstruction
            algorithms. Since i was a math student with few programming
            experience, i grew a lot in this period, learning a lot about
            Python, Cuda and optimization of algorithms.
          </li>
          <li>In 2020, after graduating from college</li>
          <li>In 2023...</li>
        </ul>
        <p>
         I feel like ...
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Other Experiences</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Teaching
        </p>
        <p>
          Bla..
        </p>
      </div>
    </section>
  );
}
