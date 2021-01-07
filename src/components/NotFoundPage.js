import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    ERROR 404: Not Found
    <Link to="/">Click here to return to the dashboard page</Link>
  </div>
);

export default NotFoundPage;
