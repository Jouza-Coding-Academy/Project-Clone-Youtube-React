console.log('test');

/* 
Goals:
1- ES 6 syntax (de structuring) + React Basics (state, props) [15 - 30 min]
2- React Drilling + Using Axios in react [15 - 30 min]
3- Clone YouTube (build application like YouTube using React + YouTube API) [60 - 120 min]

Videos:
1) Destructuring + React pops and state

2) Axios  with YouTube API
Get default url
Get endpoint url
Get api key
Explain destructuring again

3) Render the videos (list + item)
Pass props
Use map
Use destructuring 
Use component did mount

4) Render current video in the player and change it
Render iframe for YouTube videos
React Drilling (change component from another component)
Change the state of the app from child to change props of another child

5) Search for videos





Resources:
https://developers.google.com/youtube/v3
https://developers.google.com/youtube/v3/docs/search/list#usage
https://developers.google.com/youtube/v3/docs/videos
https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnEuac2-74nutOGr-KWy141elOHAbj2YQ&part=snippet&maxResults=10
https://developers.google.com/youtube/iframe_api_reference
https://getbootstrap.com/docs/4.4/components/input-group/
https://reactjs.org/docs/conditional-rendering.html
*/

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
