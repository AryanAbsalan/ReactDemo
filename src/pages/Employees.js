import "../index.css";
import Employee from "../components/Employee";
import EditEmployee from "../components/EditEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import InfoEmployee from "../components/InfoEmployee";


function Employees() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Maria",
      role: "CEO",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 2,
      name: "David",
      role: "Manager",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
    },
    {
      id: 3,
      name: "Lana",
      role: "Developer",
      img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg",
    },
    {
      id: 4,
      name: "Ralph",
      role: "Manager",
      img: "https://images.pexels.com/photos/2128819/pexels-photo-2128819.jpeg",
    },
    {
      id: 5,
      name: "Andrea",
      role: "Manager",
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
    },
    {
      id: 6,
      name: "Caroline",
      role: "Manager",
      img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
    },
    {
      id: 7,
      name: "Melanie",
      role: "Developer",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
    },
    {
      id: 8,
      name: "John",
      role: "Developer",
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id == id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }
  
  function showEmployeeInfo(name, role) {
    console.log('From showEmployeeInfo:' + name + ' ' + role);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center ">
        {employees.map((employee) => {

          const editEmployee = (
            <EditEmployee
              id={employee.id}
              name={employee.name}
              role={employee.role}
              updateEmployee={updateEmployee}
            />
          );

          const infoEmployee = (
            <InfoEmployee
              id={employee.id}
              name={employee.name}
              role={employee.role}
              title='title'
              location='location'
              showEmployeeInfo={showEmployeeInfo}
            />
          );

          return (
            <div className=" m-2">
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                // Passing Components as props
                editEmployee={editEmployee}
                infoEmployee={infoEmployee}
              />
            </div>
          );
        })}
      </div>
      <AddEmployee
        newEmployee={newEmployee}
      />
    </div>
  );
}

export default Employees;
