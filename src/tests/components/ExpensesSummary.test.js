import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiply expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23451651512}/>);
  expect(wrapper).toMatchSnapshot();
});