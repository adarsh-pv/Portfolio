import React from 'react';

interface ExperienceCardProps {
  title: string;
  summary: string;
  date: string;
  skills?: string; // Make link optional
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, summary, date, skills }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{summary}</p>
      <p className="text-gray-400 mb-4"><span className="font-bold">Skills: </span> {skills}</p>
      {
      date ?
      <p className="text-gray-500 text-sm mb-4">{date}</p>:''
      }
       
    </div>
  );
};

export default ExperienceCard;
