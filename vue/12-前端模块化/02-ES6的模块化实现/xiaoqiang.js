import {flag} from "./xiaoming.js";

if(flag)
{
  console.log('小明是天才啊')
}

import {num1,height,haha,Person} from "./xiaoming.js";

console.log(num1)
console.log(height)
haha('zhangshan')
const p =new Person();
p.run()

import aaa from "./xiaoming.js"

console.log(aaa)

//5.统一导入
import * as aaaa from './xiaoming.js'

console.log(aaaa.num1)