import Button from './src/Button.vue'

// 为组件提供 install 安装方法，供按需引入
Button.install = (Vue) => {
    Vue.component(Button.name, Button)
}

export default Button