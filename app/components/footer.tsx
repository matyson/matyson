export function Footer() {
  const links = [
    { name: "linkedin", url: "https://www.linkedin.com/in/matheus-bernardi" },
    { name: "github", url: "https://github.com/matyson" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors duration-200 hover:text-emerald-500"
          >
            {link.name}
          </a>
        ))}
        <a
          href="/MatheusBernardi_resume.pdf"
          download
          className="text-slate-400 transition-colors duration-200 hover:text-emerald-500"
        >
          cv
        </a>
      </div>
    </footer>
  );
}
