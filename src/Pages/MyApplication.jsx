import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        // Filter the job list to remove the deleted job
        const remainingJobs = jobs.filter(job => job._id !== id);
        setJobs(remainingJobs);

        Swal.fire('Deleted!', 'Your application has been removed.', 'success');
      }
    });
  };

  useEffect(() => {
    axiosSecure
      .get(`/job-application?email=${user.email}`)
      .then(res => setJobs(res.data));
  }, [user.email, axiosSecure]);

  return (
    <div>
      <h2 className="text-3xl">My Applications: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="Company Logo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company_name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.position}
                  </span>
                </td>
                <td>{job.color}</td>
                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
