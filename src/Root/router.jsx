import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/aouth/Register';
import Login from '../Pages/aouth/login';
import HotJobs from '../Pages/Home/HotJobs';
import DetailPage from '../Pages/routePage/DetailPage';
import PrivateRoute from './PrivateRoute';
import JobApply from '../Pages/jobapply/JobApply';
import MyApplications from '../Pages/MyApplication';
import AddJobs from '../Pages/AddJobs';
import MyPostedJobs from '../Pages/MyPostedJobs';
import ViewApplications from '../Pages/ViewApplications';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/hotjobs',
        element: <HotJobs></HotJobs>,
        loader: () => fetch('http://localhost:5000/jobs'),
      },

      {
        path: 'jobs/:id',
        element: (
          <PrivateRoute>
            <DetailPage></DetailPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },

      {
        path: '/jobapply/:id',
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },

      {
        path: '/myApplications',
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },

      {
        path: '/addjobs',
        element: (
          <PrivateRoute>
            <AddJobs></AddJobs>
          </PrivateRoute>
        ),
      },

      {
        path: 'myPostedJobs',
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },

      {
        path: 'viewApplications/:job_id',
        element: (
          <PrivateRoute>
            <ViewApplications></ViewApplications>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
      },
    ],
  },
]);

export default router;
