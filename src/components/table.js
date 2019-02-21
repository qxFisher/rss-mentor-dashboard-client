import React from 'react';
import _ from 'lodash';
import './table.css';

const table = (props) => {
  const { selectedOption } = props;
  
  if(selectedOption) {
    const { data } = props;
    const { tasks, mentors } = data;

    const tasksRow = tasks.map(task => 
      (
        <th key={_.uniqueId('task_')}> 
          <a key={_.uniqueId('a_')} href={task.taskLink} className={task.taskStatus} target='_blank' rel='noopener noreferrer'>{task.taskName}</a>
        </th>
      ));

    const selectedMentor = mentors.find(mentor => mentor.mentorGithub === selectedOption.value);
    const students = selectedMentor.students.map(student => {
      const studentTasks = tasks.map(task => {
				const checked = student.checkedTasks.some(item => item === task.taskName);
				let status = task.taskStatus;
				
				if (checked) {
						status = 'done';
				}
				return <td key={_.uniqueId('td_')} className={status}></td>;
			});
        
			return (
					<tr key={_.uniqueId('tr_')}>
							<td key={_.uniqueId('td_')}>{student.studentGithub}</td>
							{studentTasks}
					</tr>
			);
		});

    return (
        <table key={_.uniqueId('table_')}>
            <thead key={_.uniqueId('thead_')}>
                <tr key={_.uniqueId('tr_')}>
                    <th key={_.uniqueId('th_')}>Students/Tasks</th>
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
