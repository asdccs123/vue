let name ='小明'
let age=18
let flag=true

function sum(num1,num2)
{
  return num1+num2
}

if (flag)
{
  console.log(sum(20,30));
}
//导出方式一：
export {
  flag
}

//导出方式二：
export let num1=1000;
export let height=1.88;

//导出函数/类
export function haha(name)
{
  console.log(name+',你好呀')
}

export class Person{
  run(){
    console.log('我在奔跑')
  }
}

//5.export default
const address='北京市'
//有且只能导出一个
export default address