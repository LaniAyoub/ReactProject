const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialisation: 'Javscript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialisation: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialisation: 'Java'},
    //... More employee records can be added here
  ];

 // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
 document.getElementById('employeesDetails').innerHTML = totalEmployees;

    //function to calculate the total salaries
    function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  //function to display the HR employees
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}



function findSpecializationJS() {
  let result ="";
  //const spEJs = employees.find(employee => employee.name === 'John Doe');
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].specialisation == 'Javscript') {
      result += `<p>${employees[i].id}: ${employees[i].name}: ${employees[i].specialisation}`;
    }
  }
  if(result == "")
  {
    document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialisation';

  }else{
    document.getElementById('employeesDetails').innerHTML = result;

  }
}
