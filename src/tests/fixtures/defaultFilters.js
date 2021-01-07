import moment from 'moment';

const defaultFiltersNormal = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const defaultFiltersAlternate = {
  text: 'repair',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(),
};

export { defaultFiltersNormal, defaultFiltersAlternate };
