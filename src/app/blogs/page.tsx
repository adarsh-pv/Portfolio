"use client";
import BlogCard from "@/components/BlogCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import xml2js from "xml2js";
import { BounceLoader } from "react-spinners";

const Page = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.allorigins.win/get?url=https://medium.com/feed/@adarshharindran"
        );
  
        const parser = new xml2js.Parser();
        parser.parseString(
          response.data.contents,
          (err: Error | null, result: any) => {
            if (err) {
              console.error("Error parsing XML:", err);
              return;
            }
  
            const items = result.rss.channel[0].item;
            const blogData = items.map((item: any) => ({
              title: item.title[0],
              link: item.link[0],
              pubDate: item.pubDate[0],
              summary: item.description
                ? item.description[0].replace(/(<([^>]+)>)/gi, "").substring(0, 150) + "..."
                : "No summary available",
            }));
            setBlogData(blogData);
          }
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
  
    getBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between xl:ml-16">
      <div
        className="max-w-5xl relative overflow-y-auto"
        style={{ height: "calc(100vh - 190px)", scrollbarWidth: "none" }}
      >
        <h1
          className="fixed font-bold z-10 bg-amber-800 px-4 py-2 rounded"
          style={{
            backgroundImage: "linear-gradient(135deg, #000000, #4b2e2e)",
          }}
        >
          <span> articles & blogs </span>
        </h1>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <BounceLoader color="#4b2e2e" className="mr-12" size={80} /><h2>loading...</h2>
            </div>
          ) : (
            blogData.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog?.title}
                summary={blog?.summary}
                date={blog.pubDate}
                link={blog.link}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
