// const element = (
//     <div title="Outer div">
//       <h1>Hello World! jsx script moved to separate file.</h1>
//       <h2>Transformation of jsx to js happens at build time.Making change 2</h2>
//     </div>
//   );

//   ReactDOM.render(element, document.getElementById('container'));


const continents = ['Africa','America','Asia','Australia','Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join(' ');

const element = (
  <div title="Outer div">
    <h1>{message}</h1>
  </div>
);

ReactDOM.render(element, document.getElementById('container'));