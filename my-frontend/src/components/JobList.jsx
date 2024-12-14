import React, { useEffect, useState } from "react";
import API from "../api";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await API.get("/jobPosts");
      setJobs(response.data); // Ensure that this matches the structure of your backend response
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Posts</h1>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.postId} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{job.postProfile}</h2>
            <p className="text-gray-600">{job.postDesc}</p>
            <p className="text-gray-500">
              Experience Required: {job.reqExperience} years
            </p>
            <p className="text-gray-500">
              Tech Stack:{" "}
              {job.postTechStack.length > 0
                ? job.postTechStack.join(", ")
                : "Not specified"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
