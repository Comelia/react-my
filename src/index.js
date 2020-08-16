import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const p = <p>内容</p>
const test = (
  <div>
    <div></div>
  </div>
)

// JSX中使用JS表达式
// const age = 10
// let div = <div>年龄是：{age}</div>
// eslint-disable-next-line no-const-assign
// const div1 = <div>年龄是：{age++}</div>

// const obj = {
//   name: 'abc'
// }
// // 错误写法
// // const p = <p>{obj}</p>
// let pp = <p style={{color: 'red'}}>内容{obj.name}</p>



// jsx条件渲染
// 页面的内容有时是A 有时是B
let renderA = () => <p>AAA</p>

let div = <div>
  {1 < 0 ? <p>A</p> : renderA}
</div>


// ReactDOM.render(
//   <React.StrictMode>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(div, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
