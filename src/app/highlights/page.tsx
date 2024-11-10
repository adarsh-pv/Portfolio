import ExperienceCard from "@/components/ExperienceCard";

export default function HighlightsPage() {
  const experience = [
    {
      title:
        "Software Engineer - Full stack (Kodelint innovations)",
        summary: "Extensive full-stack experience with multiple projects, utilizing technologies such as Laravel, Angular, Node.js, and databases like SQL and NoSQL, along with Docker for containerization.",
      date: "Oct 2024 - Present",
      skills:"Angular, Laravel, NodeJS, Typescript, ExpressJS, SQL, MongoDB, Redis, Git and Github"
    },
    {
        title: "Software Developer - Backend (Enterprise Bot)",
        summary: "Experienced in developing robust backend systems and high-traffic servers using Node.js, MongoDB, and Azure STT/TTS. Specialized in optimizing chatbot performance and ensuring seamless integration across environments.",
      date: "May 2024 - Sep 2024",
      skills:"NodeJS, Typescript, Azure-STT/TTS, MongoDB, SQL and GitLab, AWS Lambda"
    },
    {
      title: "Full stack developer (Plenome Technologies)",
      summary:
        "Experienced in advanced full stack hospital management system and mobile application using React js and node js as well as react native aslo. and Mysql worked on collaborate with capgimini in Organease application.",
      date: "Feb 2023 - May 2024",
      skills:"ReactJS, NodeJS, NestJS, MySQL, ReactNative and Github"
    },
    {
    title: "Full Stack Developer Trainee (Brototype)",
    summary: "Completed comprehensive training in full-stack development with a focus on the MERN stack. Developed two projects: an e-commerce website and a social media platform, showcasing skills in both frontend and backend development.",
      date: "May 2022 - Feb 2023",
      skills:"MERN, Mongodb, ExpressJS, ReactJS, NodeJS, Github and AWS EC2"
    }
    
    // Add more experience objects as needed
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between xl:ml-16">
      <div
        className="max-w-5xl relative overflow-y-auto"
        style={{  height: "calc(100vh - 190px)" ,scrollbarWidth: "none" }}
      >
        <h1 className="fixed font-bold z-10 bg-amber-800"
          style={{
            backgroundImage: "linear-gradient(135deg, #000000, #4b2e2e)"
          }}> <span>// experience & skills</span> </h1> 
        
        <div className="pt-16 grid gap-6 relative">
          {experience?.map((skill, index) => (
            <ExperienceCard
              key={index}
              title={skill.title}
              summary={skill.summary}
              date={skill.date}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
