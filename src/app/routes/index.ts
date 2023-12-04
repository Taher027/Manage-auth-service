import express from 'express';
import UserRoutes from '../modules/users/user.routes';
import academicSemesterRoutes from '../modules/academicSemister/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
