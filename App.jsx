import React from "react";
var i = 0;
var myStyle = {"color": "#f00", "fontSize": 48};
//数组里面不能加引号,如果加引号则会以字符串的形式拼接起来
var arr = [<li>苹果</li>, <li>葡萄</li>, <li>香蕉</li>];
class App extends React.Component {
//react  编译: 遇到标签这按html解析;遇到{}则以js代码解析
    render() {
        return ( <div>
            Hello World!!!!<br/>
            欢迎来到react学习教程<br/>
            测试表达式{1 + 1}
            <bt/>
            再加一个三目运算{i == 1 ? "true" : "false"}<br/>
            {/*这是一段注释*/}
            <h1 style={myStyle}>这是一个带有自定义样式的标题</h1>
            <hr/>
            jsx自动展开数组
            <hr/>
            <ul>
                {arr}
            </ul>
        </div>);
    }
}
export default App;