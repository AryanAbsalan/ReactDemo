import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const employees = [
  {
    name: "Maria",
    role: "CEO",
    img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
  },
  {
    name: "David",
    role: "Manager",
    img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
  },
  {
    name: "Lana",
    role: "Developer",
    img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg",
  },
  {
    name: "Ralph",
    role: "Manager",
    img: "https://images.pexels.com/photos/2128819/pexels-photo-2128819.jpeg",
  },
  {
    name: "Andrea",
    role: "Manager",
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
  },
  {
    name: "Caroline",
    role: "Manager",
    img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg",
  },
  {
    name: "Melanie",
    role: "Developer",
    img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
  },
  {
    name: "John",
    role: "Developer",
    img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg",
  },
]
function App() {
 return(
   <div className="m-4 flex flex-wrap justify-center">
     {employees.map((employee) => {
       return (
         <div className="m-4 ">
          <Employee
           key={uuidv4()}
           name={employee.name}
           role={employee.role}
           img={employee.img}
         />
         </div>
       );
     })}
   </div>
 );
}

export default App;
