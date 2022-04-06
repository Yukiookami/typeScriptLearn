/*
 * @Author: zxy
 * @Date: 2022-04-06 11:50:50
 * @LastEditTime: 2022-04-06 11:55:59
 * @FilePath: /learnTypeScript/generics.ts
 */
// 泛型是为了不丢失类型而出现的
// 是指在定义函数和类的时候，不预先指定类型，在使用的时候再指定类型
function echo <T> (arg: T): T {
  return arg
}

const str: string = 'str'
// 通过类型推断，推断出类型为string
const resEcho = echo(str)


function swap <T, U> (tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const resSwap = swap(['string', 123])