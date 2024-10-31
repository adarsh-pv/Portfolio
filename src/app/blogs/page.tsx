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
    title: "Rich Dad Poor Dad: Insights to Transform Your Financial Mindset",
    summary:
      "Explore key insights on how the rich manage their money differently than the poor and middle class.",
    date: "Oct 30, 2024",
    link: "https://medium.com/@adarshharindran/rich-dad-poor-dad-insights-to-transform-your-financial-mindset-a7c565a1dea2",
  },
  {
    title: "Discover the Latest Innovations on Medium",
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
        style={{ height: "calc(100vh - 180px)", scrollbarWidth: "none" }}
      >

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
