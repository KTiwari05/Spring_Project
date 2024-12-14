import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import AddJob from "./components/AddJob";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobPosts/:postId" element={<JobDetails />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </Router>
  );
};

export default App;
