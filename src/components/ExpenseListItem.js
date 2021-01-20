import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-layout-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-layout-item__title">{description}</h3>
      <span className="list-layout-item__subtitle">
        {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3 className="list-layout-item__data">
      {numeral(amount / 100).format('$0,0.00')}
    </h3>
  </Link>
);

export default ExpenseListItem;
