import Vue from 'vue'
import {
     Button,
     Input,
     Carousel,
     Dialog,
     CarouselItem,
     collapse,
     tabs,
     tabPane,
     Loading,
     Message,
     dropdown,
     dropdownItem,
     dropdownMenu,
     MessageBox,
     collapseItem
 } from 'element-ui'
Vue.use(CarouselItem)
Vue.use(dropdownMenu)
Vue.use(dropdownItem)
Vue.use(dropdown)
Vue.use(Carousel)
Vue.use(Input)
Vue.use(tabs)
Vue.use(tabPane)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(collapse)
Vue.use(collapseItem)

Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
