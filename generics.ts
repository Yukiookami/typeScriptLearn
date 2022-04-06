/*
 * @Author: zxy
 * @Date: 2022-04-06 11:50:50
 * @LastEditTime: 2022-04-06 12:02:03
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

// 约束泛型
// 可以解决部分问题，但是不止数组拥有length
function echoWithArr <T> (arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

const arrs = echoWithArr([1, 2, 3])


// 可以利用鸭子类型的思想，使用接口定义一个约束，再使用exteds关键字约束，没有这个属性不能传入
interface IWithLength {
  length: number
}

function echoWithLength <T extends IWithLength> (arg: T): T {
  console.log(arg.length)
  return arg
}

const arrs2 = echoWithLength('2313')
const arrs3 = echoWithLength({length: 10})
const arrs4 = echoWithLength([1, 2, 3])
// const arrs5 = echoWithLength(123) error