import dynamic from "next/dynamic";

const Resume = dynamic(() => import("../components/resume"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const props = {
  name: "John Doe",
  email: "john@doe.com",
  phone: "123-456-7890",
  summary: "A summary of John Doe",
  experience: [
    {
      title: "Software Engineer",
      company: "Google",
      date: "2020 - Present",
      description: "Worked on various projects",
    },
    {
      title: "Software Engineer",
      company: "Facebook",
      date: "2018 - 2020",
      description: "Worked on various projects",
    },
  ],
  education: [
    {
      degree: "BSc in Computer Science",
      institution: "MIT",
      date: "2014 - 2018",
    },
  ],
};

export default function Page() {
  return (
    <div className="h-screen">
      <Resume {...props} />
    </div>
  );
}
