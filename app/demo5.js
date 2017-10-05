/**
 * Created by vlery on 2017/10/4.
 */
var React= require('react');
var ReactDOM= require('react-dom');



function Welcome(props){
    return <h1> Hello, {props.name}</h1>;
}

function App(){
    return(
      <div>
          <Welcome name="sara"/>
          <Welcome name="Cahal"/>
          <Welcome name="Edite"/>
      </div>

    );
}


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return (
        <div>
            <h3>{this.state.date.toLocaleTimeString()}.</h3>
        </div>

        );
    }

}

class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state= {isToggleOn: true};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn
        }

        ));
    }
    render(){
        return(
            <div>
            <button onClick={this.handleClick}>
                {
                    this.state.isToggleOn ? "on" : "off"

                }
            </button>


        </div>
        );

    }
}



class ChangeBox extends React.Component{


    render(){
        return <div>
            <div className="box1"></div>
            <button >change style</button>
            <Clock/>


        </div>;
    }

};




ReactDOM.render(
    <ChangeBox></ChangeBox>
    ,
    document.getElementById('root')


);
