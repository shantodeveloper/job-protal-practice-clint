import { Link } from 'react-router-dom';

const HotJobs = ({ jobs }) => {
  // Check if jobs is valid
  if (!jobs || !Array.isArray(jobs) || jobs.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center mb-10">
          Hot Jobs Now Apply
        </h1>
        <p className="text-center text-gray-500">
          No jobs available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">
        Hot Jobs Now Apply
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={job.company_logo}
              alt="Company Logo"
              className="w-1/2 h-auto"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Location:</span> {job.location}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Job Type:</span> {job.jobType}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Category:</span> {job.category}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium">Application Deadline:</span>{' '}
                {job.applicationDeadline}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Salary:</span>{' '}
                {job.salaryRange.min} - {job.salaryRange.max} BDT
              </p>
              <p className="text-sm text-gray-700 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.map((req, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {req}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Company:
                  </h4>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
                <Link to={`jobs/${job._id}`}>
                  <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-md shadow hover:bg-green-600">
                    Detail Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
