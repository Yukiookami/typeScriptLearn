/*
 * @Author: zxy
 * @Date: 2022-04-06 11:13:18
 * @LastEditTime: 2022-04-06 11:19:53
 * @FilePath: /learnTypeScript/basic-types.ts
 */
let isDone: boolean = false

let age: number = 23
let binaryNumber: number = 0b1111

let firstName: string = 'zxy'
let message: string = `Hello ${firstName}, age is ${age}`

// undefined和null是所有类型的子类型
let u: undefined = undefined
let n: null = null

let number: number = undefined

// any 允许任意类型(就跟js一样)，尽量避免
let notSure: any = 123
notSure = true
notSure = '232'
notSure.name = '123'
notSure.getName()

// unitypes 联合类型
let numberOrString: number | string = 123 || "123"