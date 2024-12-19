import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const JobApply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitJobApplication = e => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value; // Notice: 'linkedin' is lowercase
    const github = form.github.value;
    const resume = form.resume.value;

    const jobInfo = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch('http://localhost:5000/job-application', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(jobInfo),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        navigate('/myApplications');
      });
  };

  return (
    <div>
      <form
        onSubmit={submitJobApplication}
        className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-md shadow-md max-w-md mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Enter Your Details
        </h2>

        {/* LinkedIn Input */}
        <div className="w-full">
          <label htmlFor="linkedin" className="block text-gray-600 mb-1">
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin" // Keep 'name' in lowercase
            placeholder="https://linkedin.com/in/your-profile"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* GitHub Input */}
        <div className="w-full">
          <label htmlFor="github" className="block text-gray-600 mb-1">
            GitHub Profile
          </label>
          <input
            type="url"
            id="github"
            name="github"
            placeholder="https://github.com/your-profile"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>

        {/* Resume Input */}
        <div className="w-full">
          <label htmlFor="resume" className="block text-gray-600 mb-1">
            Resume URL
          </label>
          <input
            type="url"
            id="resume"
            name="resume"
            placeholder="https://your-resume-link.com"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApply;
