import { useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <Banner></Banner>
      </div>
      <div className="">
        <HotJobs jobs={jobs}></HotJobs>
      </div>
    </div>
  );
};

export default Home;
