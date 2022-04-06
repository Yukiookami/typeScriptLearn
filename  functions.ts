/*
 * @Author: zxy
 * @Date: 2022-04-06 11:35:10
 * @LastEditTime: 2022-04-06 11:41:23
 * @FilePath: /learnTypeScript/ functions.ts
 */
// 函数声明
// 可选参数后面不能有确定参数，默认参数等于可选参数
function add (x: number, y: number, z?: number, m: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

let res = add(9, 3)

// 函数表达式
// 类型推断，可以自动推断出赋值的变量为什么类型
const addF = function add (x: number, y: number, z?: number, m: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 函数表达式赋值，这里的=>不是尖头函数，代表返回值
const addF2: (x: number, y: number, z?: number, m?: number) => number = addF