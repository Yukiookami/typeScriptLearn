/*
 * @Author: zxy
 * @Date: 2022-04-06 12:16:14
 * @LastEditTime: 2022-04-06 12:23:54
 * @FilePath: /learnTypeScript/more.ts
 */
// type aliases 类型别名
type PlusType = (x: number, y: number) => number

function sum (x: number, y: number): number {
  return x + y
}

const sum2: PlusType = sum

// 最常用的场景是联合类型
type NameRes = () => string
type NameOrRes = string | NameRes

function getName (n: NameOrRes): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// type assertion 类型断言
// 在我们暂时不能确定类型的时候，想要使用这个类型的方法使用
// 但是断言也只能仅限于联合类型之中，之外也会报错
function getLength (input: string | number): number {
  // const str = input as String

  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }

  // 快捷写法
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return (<number>input).toString().length
  }
}