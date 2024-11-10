import BlogCard from "@/components/BlogCard";
import React from "react";

const blogs = [
  {
    title:
      "Building a Serverless App with AWS Lambda, API Gateway, DynamoDB, S3 Bucket and React",
    summary:
      "Create a fully serverless app using AWS Lambda, API Gateway, DynamoDB, and S3 with a React frontend.",
    date: "Oct 09, 2024",
    link: "https://medium.com/aws-tip/building-a-serverless-todo-app-with-aws-lambda-api-gateway-dynamodb-and-react-0514242a8203",
  },
  {
    title: "Create a Simple NPM Package with Utility Functions, Node JS",
    summary:
      "Learn how to create an NPM package with utility functions for addition, subtraction, and palindrome checking.",
    date: "Sep 22, 2024",
    link: "https://medium.com/@adarshharindran/how-to-create-a-simple-npm-package-with-utility-functions-6e097e8cfd18",
  },
  {
    title: "Understanding HTML Attributes vs. DOM Properties: Key Differences and Why They Matter",
    summary:
      "Learn the differences between HTML attributes and DOM properties, how they interact, and how to use them effectively in your web projects.",
    date: "Nov 08, 2024",
    link: "https://medium.com/@adarshharindran/understanding-html-attributes-vs-dom-properties-key-differences-and-why-they-matter-c06a1860ba20",
  },
  {
    title: "Discover the Latest Innovations blog",
    summary:
      "Dive into a world of innovation, creativity, and tech insights. Visit my Medium profile to learn, grow, and keep coding with cutting-edge ideas and tutorials!",
    date: "",
    link: "https://medium.com/@adarshharindran",
  }
  
  // Add more blog objects as needed
];

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between xl:ml-16">
      <div
        className="max-w-5xl relative overflow-y-auto"
        style={{ height: "calc(100vh - 190px)", scrollbarWidth: "none" }}
      >
         <h1
          className="fixed font-bold z-10 bg-amber-800 px-4 py-2 rounded"
          style={{
            backgroundImage: "linear-gradient(135deg, #000000, #4b2e2e)"
          }}
        >
          <span> articles & blogs </span>
        </h1>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              summary={blog.summary}
              date={blog.date}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
