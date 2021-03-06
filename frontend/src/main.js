import Vue from 'vue'
import App from './App.vue'
import VFC from 'vfc'
import DataTable from 'v-data-table'
import VModal from 'vue-js-modal'
// import Modal from './components/Modal.vue'
// import card from 'vue-card'
import vSelect from 'vue-select'

import 'vfc/dist/vfc.css'
import './dist/json-tree.css'


import TreeView from "vue-json-tree-view"

import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import VCardElement from 'vue-card-element'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import vuetify from './plugins/vuetify';
// Vue.use(Vuetify)
// import 'vuetify/dist/vuetify.min.css'


import { MdButton, MdContent, MdTabs, MdCard, MdField, MdInput, MdTable, MdRipple } from 'vue-material/dist/components'
// import {MdSelect, MdOption} from 'vue-material/src/components/MdField/MdSelect'
// import 'vue-material/src/components/MdField'


import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import VueMaterial from 'vue-material'
const VueUploadComponent = require('vue-upload-component')
// Vue.use(VueMaterial)
import { Plotly } from 'vue-plotly'
import JSZip from 'jszip'
import jsPDF from 'jspdf'
import DetailedInferenceView from './components/DetailedInferenceView'
import Drag from './components/Drag'
import Router from 'vue-router'
import SuiVue from 'semantic-ui-vue';
import SemanticUI from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
// import 'vue-select/dist/vue-select.css';

Vue.use(Drag)
Vue.component('drag', Drag)

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdCard)
// Vue.use(MdTabs)
// Vue.use(MdField)
// Vue.use(MdRipple)
// Vue.use(MdTable)
Vue.component('v-select', vSelect)

Vue.component("vuetable", Vuetable);
Vue.component("vuetable-pagination", VuetablePagination);
// Vue.component("vuetable-pagination-dropdown", VuetablePaginationDropDown);
Vue.component("vuetable-pagination-info", VuetablePaginationInfo);

Vue.config.productionTip = false

Vue.use(DataTable)
Vue.use(VFC)
Vue.use(VModal)
Vue.use(Router)
// Vue.use(card)
// Vue.use(VueUploadComponent)
Vue.use(Plotly)
Vue.component('Plotly', Plotly)
Vue.use(SuiVue);

// Vue.use(VModal, { componentName: "modal" })
Object.defineProperty(Vue.prototype, '$JSZip', { value: JSZip });

Object.defineProperty(Vue.prototype, '$jsPDF', { value: jsPDF });


// Vue.use(Vuetable)
// Vue.component('modal', {
//   template: '#modal-template'
// })
new Vue({
  render: h => h(App),

  data: function() {
    return {
      showModal: false
      // css: CssForBootstrap4
    }
  }
}).$mount('#app')

// const router = new Router({
//   routes: [
//     // {
//     //   path: '/inference/:inferenceId',
//     //   name: 'inference',
//     //   component: DetailedInferenceView
//     // },
//     {
//       path: '/',
//       name: 'app',
//       component: App
//     }
//   ]
// })
//
// new Vue({
//   render: h => h(App),
//
//   router,
//   // vuetify,
//   // components: {FileUpload: VueUploadComponent},
//   // data: function() {
//   //   return {
//   //     showModal: false
//   //   }
//   // }
// }).$mount('#app')
