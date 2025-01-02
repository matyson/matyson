import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, MoveUpRightIcon } from "lucide-react";
import cold from "../public/images/home/cold.jpeg";
import gogo from "../public/images/home/gogo.jpeg";
import gu from "../public/images/home/gu.jpeg";
import hayley from "../public/images/home/hayley.jpeg";
import husky from "../public/images/home/husky.jpeg";
import profile from "../public/images/home/profile.jpeg";
import toonme from "../public/images/home/toon-me.jpeg";
import zelda from "../public/images/home/zelda.jpeg";
import { Animated } from "./components/animated";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        <Animated text="Oie, i'm Matheus" /> 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a mathematician who actually code some frontend stuff. I currently `}
        <Link href="/work">work</Link>
        {` as a developer at `}
        <span className="not-prose">
          <Badge href="https://cnpem.br/">@cnpem</Badge>
        </span>
        {` in the national synchrotron light laboratory in Brazil, `}
        <Badge href="https://www.lnls.cnpem.br/en/">@lnls</Badge>
        {`.`}
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I started out as a backend developer in the Scientific Computing Group
          at lnls, working with Python and Cuda to build optimized algorithms
          focused mainly on imaging and image processing. But i think i have
          found my place in the Javascript world, mostly doing React stuff to
          build some crazy glowing buttons.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Just kidding, i now get to use my math and backend experience to
          better understand the needs of the scientists and build web
          applications to help them in their research and experiments. Also i
          get to build many interfaces to all sorts of needs, like a control
          system for the beamlines, data visualization and processing tools, and
          even a non traditional drawing app, why not?
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I feel like i can do anything in the web world and that is what i most
          love about it. If you like to follow my work, you can follow me on
          github. Also, feel free to reach out to me if you want to talk about
          anything, i am always open to meet new people and learn new things.
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-emerald-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/matyson"
          >
            <MoveUpRightIcon className="h-4 w-4" />
            <p className="ml-1 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            href="/MatheusBernardi_resume.pdf"
            download
            className="flex items-center gap-2 transition-all hover:text-emerald-500"
          >
            <DownloadIcon className="h-4 w-4" />
            my resume
          </a>
        </li>
      </ul>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Enough about work, lets talk about Matheus. I am a huge fan of music,
          i love to play the guitar but in fact i kinda suck at it. So i focus
          on singing and dancing, where i find that even if i am embarrassed, i
          can still have a lot of fun. Most of the time you will find me on my
          earphones imersed in the playlists and lip syncing to the songs.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I also like to draw, i started out as a kid drawing my favorite
          cartoon characters and now i am trying to learn digital art. It is
          very different from what i am used to, specially the painting part
          because i have always avoided it. But i am having a good time just by
          trying it.
        </p>
      </div>
      <div className="grid grid-cols-4 items-center gap-2">
        <div className="grid gap-2">
          <div className="h-auto max-w-full">
            <Image
              src={hayley}
              alt="Hayley Williams performing Last Hope, one of my favorite songs"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
          <div className="h-auto max-w-full">
            <Image
              src={gu}
              alt="My friend Augusto yapping"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="h-auto max-w-full">
            <Image
              src={toonme}
              alt="My toonme"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
          <div className="h-auto max-w-full">
            <Image
              src={cold}
              alt="A cold evening walk"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="h-auto max-w-full">
            <Image
              src={husky}
              alt="A husky dog"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
          <div className="h-auto max-w-full">
            <Image
              src={profile}
              alt="profile"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="h-auto max-w-full">
            <Image
              src={gogo}
              alt="my friend Igor as Hulk"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
          <div className="h-auto max-w-full">
            <Image
              src={zelda}
              alt="Master Sword in the Lost Woods"
              placeholder="blur"
              className="rounded-lg shadow-lg"
              sizes="(min-width: 768px) 213px, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
