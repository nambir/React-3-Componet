class HelloWorld extends React.Component{

render()
{
    return (
        <div title="Outer div">
          <h1>hello world1</h1>
        </div>
      );
}
}

const element=<HelloWorld/>;
ReactDOM.render(element,document.getElementById('container'));