
// de structuring
const person = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    name: 'jouza',
    food: 'fried chicken'
  }
};
console.log(person);
console.log(person.d.name);
// const {nameOfTHeKEy} = name of the object;
const { d } = person;
const { name, food } = d;

console.log(d);
console.log(name, food);

//          WHERE EXIST      || HOW TO REACH IT        ||
// state => same component   || nameOfTheClass.state   ||
// props => parent component || nameOfTheClass.props   ||

//          WHY WE USE IT
// state => there is something will change in this component
// props => pass data or functions

// finish from the pops and state
