//solution 1
const person = {
  id: 2,
  gender: "mail",
};
const student = {
  name: "ravi",
  email: "ravi11@yopmail.com",
};

const mixobj=Object.assign({},person,student)
console.log(mixobj)

//solution 2 mordern js
const mixobj2={...person,...student}
console.log(mixobj2)