import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a mathematician and software developer. I love how math can be
          used as a lens to understand the world and solve both silly daily
          conflicts and complex problems. I am loving to develop for the web and
          i am eager to learn more about it.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="mb-1 text-xl font-medium tracking-tighter">CNPEM</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Senior Technology Development Analyst, 2019 - present
        </p>
        <p>
          I first joined CNPEM as a young mathematician eager to apply
          algorithms and optimization techniques to solve real-world problems.
          In the meantime, i had contact with the web development world and i
          fell in love with it.
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
          <li>
            In 2020, after graduating from college, i was hired as a full-time
            employee at the Scientific Computing group. I mainly kept working on
            image processing and reconstruction algorithms, but i also started
            to work on web development, porting some desktop applications to the
            web and pushing the group to adopt modern web technologies. Also, i
            started to focus on the best pratices of software development,
            enforcing better use of continuous integration and deployment, code
            reviews and documentation.
          </li>
          <li>
            In 2023, in function of my ever-growing interest in web development
            and software engineering, i was transferred to the Control Software
            group to work on the state of the art web applications that control
            the accelerators and some processing web interfaces. My current goal
            is to enable the LNLS to adopt modern web technologies and best
            practices, hopefully making the web applications the stardards for
            the accelerators community.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="mb-1 text-xl font-medium tracking-tighter">
          Other Experiences
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Teaching, 2018 - 2019
        </p>
        <p>
          In my early years of college i was a bit lost and discouraged with
          staying in the academic world. So i focused on one of the things that
          i loved the most: teaching. I started to teach math and physics at
          some preparatory courses for college entrance exams. I loved to teach
          and i learned a lot as well. One day i hope to return to the teaching
          world, but now with a lot more experience and knowledge.
        </p>
      </div>
    </section>
  );
}
