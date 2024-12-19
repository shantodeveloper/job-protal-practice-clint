import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl">My Posted Jobs: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link">View Applications</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
