import moment from 'moment';
export default [
  { id: '1', description: 'PS5', amount: 500, createdAt: moment(1) },
  {
    id: '2',
    description: 'PS3 Repairs',
    amount: 270,
    note: 'cleaned out stray plastic bits, refreshed aging HDD',
    createdAt: moment(2).subtract(1, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'PS2 Repairs',
    amount: 200,
    note: 'removed dust from fan, covered all open ports',
    createdAt: moment(2),
  },
];
