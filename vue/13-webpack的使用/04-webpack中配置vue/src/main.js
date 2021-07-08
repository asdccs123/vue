const {add,mul}=require('./js/mathUntils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖CSS文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')
document.writeln('<h2>积分抵扣垃圾筐</h2>')