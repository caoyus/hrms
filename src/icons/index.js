import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
// 注册全局组件 <svg-icon></svg-icon>
Vue.component('svg-icon', SvgIcon)

// 批量导入文件
// 从 svg 目录, 导入所有以 .svg 结尾的文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
