import React from 'react'

export function NewList() {
  const persons = [
    {
      name: 'John Doe',
      gender: 'Male',
      age: 30,
      index: 0,
      profession: 'Engineer',
    },
    {
      name: 'Jane Smith',
      gender: 'Female',
      age: 25,
      index: 1,
      profession: 'Doctor',
    },

    {
      name: 'Akash',
      gender: 'Male',
      age: 40,
      index: 2,
      profession: 'Teacher',
    },
    {
      name: 'Khushboo',
      gender: 'Female',
      age: 35,
      index: 3,
      profession: 'Artist',
    },
    {
      name: 'Yash',
      gender: 'Male',
      age: 28,
      index: 4,
      profession: 'Designer',
    },
    {
      name: 'Sarita',
      gender: 'Female',
      age: 45,
      index: 5,
      profession: 'Lawyer',
    },
    {
      name: 'Vishwa',
      gender: 'Male',
      age: 32,
      index: 6,
      profession: 'Programmer',
    },
    {
      name: 'Nandini',
      gender: 'Female',
      age: 50,
      index: 7,
      profession: 'Chef',
    },
    {
      name: 'Neeraj',
      gender: 'Male',
      age: 27,
      index: 8,
      profession: 'Writer',
    },
    {
      name: 'Varsha',
      gender: 'Female',
      age: 38,
      index: 9,
      profession: 'Doctor',
    },
    {
      name: 'Piyush',
      gender: 'Male',
      age: 33,
      index: 10,
      profession: 'Engineer',
    },
    {
      name: 'Paridhi',
      gender: 'Female',
      age: 29,
      index: 11,
      profession: 'Teacher',
    },
    {
      name: 'Vijay',
      gender: 'Male',
      age: 42,
      index: 12,
      profession: 'Artist',
    },
    {
      name: 'Bhumika',
      gender: 'Female',
      age: 31,
      index: 13,
      profession: 'Doctor',
    },
    {
      name: 'Alex Johnson',
      gender: 'Male',
      age: 40,
      index: 14,
      profession: 'Teacher',
    },
  ];
  
 
  

const data = persons.filter((element) => element.profession==='Doctor' || element.profession==='Engineer');

//   const data = persons.filter((element)=>{
//     if(element.profession=='Doctor' || element.profession=='Teacher'){
//         return true;
//     }
//   });

console.log(data);
  return (
    
  <div>
       <ul>
        {
          data.map((element,index)=>{
            return(
              <li key={index}>
              {element.name}
              </li>
            )
          })
        }
       </ul>
  </div>
  
  )
}

