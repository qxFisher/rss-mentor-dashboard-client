import React from 'react';
import _ from 'lodash';
import './table.css';

const table = (props) => {
  const { selectedOption } = props;
  const { data } = props;
  if(selectedOption && data.mentors.length >= 1) {
    const { tasks, mentors } = data;

    const tasksRow = tasks.map(task => 
      (
        <th key={_.uniqueId('task_')}> 
          <a key={_.uniqueId('a_')} href={task.taskLink} target='_blank' rel='noopener noreferrer'>{task.taskName}</a>
        </th>
      ));

    const selectedMentor = mentors.find(mentor => mentor.mentorGithub === selectedOption.value);
    const students = selectedMentor.students.map(student => {
      const studentTasks = tasks.map(task => {
				const checked = student.checkedTasks.some(item => item === task.taskName);
				let status = task.taskStatus;

				if (checked) {
						status = 'Done';
				}
				return <td key={_.uniqueId('td_')} className={status}></td>;
			});
			const studentLink = 'https://github.com/' + student.studentGithub;
			return (
					<tr key={_.uniqueId('tr_')}>
							<td key={_.uniqueId('td_')}>
								<a href={studentLink} target='_blank' rel='noopener noreferrer' key={_.uniqueId('a_')}>{student.studentGithub}</a>
							</td>
							{studentTasks}
					</tr>
			);
		});

    return (
        <table key={_.uniqueId('table_')} className='dashboard-table'>
            <thead key={_.uniqueId('thead_')}>
                <tr key={_.uniqueId('tr_')}>
                    <th key={_.uniqueId('th_')}></th>
                    {tasksRow}
                </tr>
            </thead>
            <tbody key={_.uniqueId('tbody_')}>
                {students}
            </tbody>
        </table>
    );
  }
  else return (
    null
  );
};

export default table
