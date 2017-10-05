/**
 * Created by vlery on 2017/10/4.
 */
var React= require('react');
var ReactDOM= require('react-dom');

class List extends React.Component{
    render(){
        return(
            <ul>
                {
                    React.Children.map(this.props.children,function(child){
                        return <li>{child}</li>;
                    })
                }
             </ul>
        );
    }
};

ReactDOM.render(
    <List>
        <h1>first item</h1>
        <h1>second item </h1>
    </List>
    ,document.getElementById('root')
);