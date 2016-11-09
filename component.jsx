import React from "react";
//命名规则:原生的html元素以小写字母开头,而React组件则以大写开头
//组件类只能包含一个顶层标签 报错<h1>first Components</h1><span>111</span>
/*var HelloComponent=React.createClass({
 render(){
 return <h1><span>111</span>first Components</h1>
 }
 })
 export default HelloComponent;*/

//如果要给组件添加属性 class和for是js的关键字  所以要写成className和htmlFor
/*
var SecendComponent = React.createClass({
        render(){
            return (<div id={this.props.id}>给React组件传递参数<br/>
                <div className="aa">第一个div</div>
                    <input type="checkbox" id="bb"/>
                    <label htmlFor="bb">这是一个多选框</label>
                </div>
            )
        }
    })
export default SecendComponent;*/

var ReuniteComponents=React.createClass({
    render(){
        return (
            <div>
            <First className={this.props.className}/>,
            <Secend link={this.props.link}/>
                </div>
        )
    }
})
var First=React.createClass({
    render(){
        return (<div>this is frist DIV,className={this.props.className}</div>)
    }
})
var Secend=React.createClass({
    render(){
        return (<a href={this.props.link}>this is secend Components,is link</a>)
    }
})
export default  ReuniteComponents