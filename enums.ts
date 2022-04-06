/*
 * @Author: zxy
 * @Date: 2022-04-06 11:42:42
 * @LastEditTime: 2022-04-06 11:49:09
 * @FilePath: /learnTypeScript/enums.ts
 */
// 枚举中，会自动给其中的项目赋值 从0开始
// 如果赋值，就会按照赋值的地方开始递增
enum Driection {
  Up = 10,
  Down,
  Left,
  Right
}

console.log(Driection.Up)
console.log(Driection[10])


// 字符串枚举就要全部赋值为字符串，不能自动递增
enum DriectionStr {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// 使用常量枚举，会大幅度提升性能，但是不是所有枚举都可以使用常量枚举
// 只有常量值可以常量枚举，计算值不能使用
const enum DriectionConst {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}