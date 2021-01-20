import Vue from "vue";
import 'view-design/dist/styles/iview.css';
import {
  Button,
  Form,
  FormItem,
  Input,
  Icon,
  Card,
  Layout,
  Header,
  Menu,
  MenuItem,
  MenuGroup,
  Sider,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Content,
  Message,
  Footer,
  Row,
  Col
} from 'view-design';



Vue.component('Button', Button);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Input', Input);
Vue.component('Icon', Icon);
Vue.component('Card', Card);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Menu', Menu);
Vue.component('MenuGroup', MenuGroup);
Vue.component('MenuItem', MenuItem);
Vue.component('Sider', Sider);
Vue.component('Submenu', Submenu);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Content', Content);
Vue.component('Row', Row);
Vue.component('Col', Col);

Vue.prototype.$Message = Message;
