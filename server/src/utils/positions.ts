import { jobs } from '../../data/jobsdescription.js';

export const positions = jobs.map((job) => ({
  id: job.id,
  title: job.title
}));

export const findPosition = (id: number) => positions.find((pos) => pos.id === id);

