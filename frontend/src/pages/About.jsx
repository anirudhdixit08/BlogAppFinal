import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        a proficient full stack developer with a robust skill set spanning both
        front-end and back-end technologies. With a passion for building
        dynamic, responsive, and user-friendly web applications, we excels in
        crafting seamless digital experiences.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>
      <p>
        Developed a full-stack blog platform using the MERN stack: MongoDB,
        Express.js, React.js, and Node.js. Implemented secure JWT authentication
        and built robust RESTful APIs for content management. Designed
        responsive user interfaces with React.js and Tailwind CSS, demonstrating
        comprehensive web application development expertise.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Challenges & Solutions
      </h2>
      <p>
        Building this stack blog presented various challenges: integrating
        diverse technologies, resolving complex bugs, and ensuring seamless
        collaboration. Overcoming these technical hurdles truly tested our
        problem-solving skills, ultimately fostering significant team growth and
        deeper understanding.
      </p>
      <br></br>
      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>
      <p>
        Inspired by a deep passion for technology and continuous learning, We
        built this stack blog website. It's a platform to document my coding
        journey, share insights on new tools and frameworks, and contribute
        valuable knowledge to the developer community. Our personal interests in
        continuous learning, problem-solving, and community engagement are
        directly channeled and shared through this tech blog.
      </p>
    </div>
  );
}

export default About;
