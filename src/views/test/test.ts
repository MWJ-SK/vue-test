import { Vue, Options } from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Options({})
export default class Test extends Vue {
  // 初始数据可以直接声明为实例的 property
  message: string = 'Hello!'

  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    console.log(this)
    window.alert(this.message)
  }
}
