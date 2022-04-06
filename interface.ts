/*
 * @Author: zxy
 * @Date: 2022-04-06 11:30:31
 * @LastEditTime: 2022-04-06 11:32:28
 * @FilePath: /learnTypeScript/interface.ts
 */
// Interface 接口 - 对应js中的object
// 对对象的形状（shape）进行描述
// 对类（class）进行抽象
// Duck Typing（鸭子类型） 是动态类型语言的一种对象推断策略，他关注对象如何被使用，而不是对象类型本身
interface Person {
  // 只读
  readonly id: number
  name: string,
  age: number,
  // 可选
  love?: boolean,
}

let sku: Person = {
  id: 1234,
  name: 'sku',
  age: 23
}

// sku.id = 111 error