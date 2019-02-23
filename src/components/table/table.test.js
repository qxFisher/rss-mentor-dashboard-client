import React from 'react';
import Table from './table';
import renderer from 'react-test-renderer';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

const testData = {
    "tasks": [
      {
        "taskName": "Code Jam \"CV\"",
        "taskLink": "https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-cv.md",
        "taskStatus": "Checked"
      },
      {
        "taskName": "Code Jam \"CoreJS\"",
        "taskLink": "https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-corejs.md",
        "taskStatus": "Checked"
      },],
    "mentors": [
      {
        "mentorName": "Aliaksandr Zayats",
        "mentorGithub": "alex-zayats",
        "students": [
          {
            "studentGithub": "uniorunr",
            "checkedTasks": [
              "Markup #1",
              "Code Jam \"DOM, DOM Events\""
            ]
          },
          {
            "studentGithub": "alexeydavydov",
            "checkedTasks": []
          },
          {
            "studentGithub": "melllivoracapensis",
            "checkedTasks": [
              "Markup #1",
              "Code Jam \"DOM, DOM Events\""
            ]
          },
          {
            "studentGithub": "soulshaker",
            "checkedTasks": [
              "Markup #1",
              "Code Jam \"DOM, DOM Events\""
            ]
          }
        ]
      },
    ],
};

const testSelectedOption = {value: "alex-zayats", label: "Aliaksandr Zayats (alex-zayats)"};

it('Check the existing of table', () => {
  render(
    <Table data={testData} selectedOption={testSelectedOption}/>,
  );
  
  const table = document.querySelector('table');
  expect(table).toBeTruthy();
});

it('Check the count of rows with the given data', () => {
  render(
    <Table data={testData} selectedOption={testSelectedOption}/>,
  );
  
  const table = document.querySelector('table');
  const tableRows = table.querySelectorAll('tr');

  expect(tableRows.length).toBe(5);
});

it('Check the count of cells', () => {
  render(
    <Table data={testData} selectedOption={testSelectedOption}/>,
  );
  
  const table = document.querySelector('table');
  const tableCells = table.querySelectorAll('td').length;
  expect(tableCells).toBe(12);
});

test('Table to match snapshot', () => {
  const component = renderer.create(
    <Table data={testData} selectedOption={testSelectedOption}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
