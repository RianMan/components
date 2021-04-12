// 引入相关的组件
import Button from "./components/Button.vue"


const components = [
    Button,
	//还可以再写别的组件
    
]
var comObj = {};
comObj.install = (Vue) => {
	components.map(component => {
		 Vue.component(components[key].name, components[key]) //注册组件  
        comObj[components[key].name] = components[key];
	})
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default comObj //默认全局导出
export {
    Button   //     按需导出
}