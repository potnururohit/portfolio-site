
import React from "react";
import { Github, Linkedin, Mail, FileText, Code2 } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-2">Potnuru Venkata Rohit</h1>
        <p className="text-xl text-gray-600">Data Scientist @ PepsiCo | CSE @ NIT Andhra</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:rohitpotnuru2003@gmail.com" target="_blank"><Mail /></a>
          <a href="https://github.com/potnururohit" target="_blank"><Github /></a>
          <a href="https://www.linkedin.com/in/potnuru-venkata-rohit-910734231/" target="_blank"><Linkedin /></a>
          <a href="https://leetcode.com/u/venkatarohit_p/" target="_blank"><Code2 /></a>
        </div>
        <div className="mt-4">
          <a href="/resume.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded">
            <FileText className="mr-2" /> Download Resume
          </a>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I’m a Data Scientist at PepsiCo and a recent graduate from NIT Andhra Pradesh with a minor in AI for Signal Processing.
          I’ve worked on applying ML and data engineering techniques using Python, SQL, and PySpark to solve real-world business challenges. 
          Passionate about continuous learning, scalable systems, and solving meaningful problems with data.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <div>
              <h3 className="text-xl font-bold">Data Scientist – PepsiCo</h3>
              <p className="text-gray-600">Aug 2025 – Present</p>
              <p className="mt-2 text-gray-700">
                Working on time series forecasting, market trend analysis, and automation of output validation using Python and PySpark.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="text-xl font-bold">SDE Intern – Shipmantra</h3>
              <p className="text-gray-600">May 2024 – Jul 2024</p>
              <p className="mt-2 text-gray-700">
                Built responsive React.js interfaces that improved engagement and mobile traffic.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="text-xl font-bold">SDE Intern – BSNL</h3>
              <p className="text-gray-600">Jun 2023 – Jul 2023</p>
              <p className="mt-2 text-gray-700">
                Developed an exam application with MCQ creation, auto-scoring, and answer validation – reducing manual effort by 80%.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div>
          <h3 className="text-xl font-bold">Paired Lung CT 3D Registration – MaxTransResNet</h3>
          <p className="mt-2 text-gray-700">
            Built a deep learning model to align 3D lung CT scans for better tumor localization using PyTorch. Improved registration accuracy and reduced Target Registration Error (TRE).
          </p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <p className="text-gray-700">
          Python, SQL, PySpark, Java, React.js, Machine Learning, Data Engineering, Data Structures & Algorithms
        </p>
      </section>
    </main>
  );
}
