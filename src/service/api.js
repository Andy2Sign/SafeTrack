import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/sos',
});

export const sendSOSAlert = (location) =>
  API.post('/', { location }, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjY2NjY2NjY2NjY2NjY2IiwiaWF0IjoxNjAwMDAwMDAwfQ.4ZxJqZz0QvJXxgG7eZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZz`,
    },
  });
