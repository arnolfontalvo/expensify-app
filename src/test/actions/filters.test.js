import { setStartDate , setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment'
test('should generate set start date filter object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date filter object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter object with value', () => {
  const text = 'Something in'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object without value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sort by amount filter', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'amount'
  });
});

test('should generate sort by date filter', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: 'date'
  });
});