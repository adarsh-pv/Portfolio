import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  summary: string | undefined;
  date: string;
  link?: string; // Make link optional
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, date, link = "/" }) => {
  return (
    <div
      className={`${
        title === 'Discover the Latest Innovations blog' ? 'text-white' : 'bg-gray-900 text-white'
      } p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300`}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{summary}</p>
      {date && <p className="text-gray-500 text-sm mb-4">Published on {date}</p>}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-300 hover:text-gray-100 hover:underline"
      >
        Read more &gt;&gt;
      </a>

      {link === 'https://medium.com/@adarshharindran' && (
        <div className="mt-4">
          <Image
            className="w-11 ml-2"
            src="/images/medium-icon.webp"
            width={40}
            height={40}
            alt="Medium"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
