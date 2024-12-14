import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

const JobDetails = () => {
  const { postId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const response = await API.get(`/jobPosts/${postId}`);
      setJob(response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
