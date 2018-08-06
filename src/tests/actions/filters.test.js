import moment from 'moment';
import { 
  setStartDate,
  setEndDate, 
  sortByAmount, 
  sortByDate, 
  setTextFilter 
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});


test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should setup sorting by amount object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});


test('should setup sorting by date object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup text filter action object with provided values', () => {
  const action = setTextFilter('Rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Rent'
  });
});

test('should setup text filter aciton object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});