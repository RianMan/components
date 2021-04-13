import colorText from './src/colorText.vue'

// 为组件提供 install 安装方法，供按需引入
colorText.install = (Vue) => {
    Vue.component(colorText.name, colorText)
}

export default colorText