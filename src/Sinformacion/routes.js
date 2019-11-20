
import Dashboard from "./views/Dashboard.jsx";
// import Notifications from "./views/Notifications.jsx";
import ClientesPage from "./views/ClientesPage.jsx";
import Typography from "./views/Typography.jsx";
// import TableList from "./views/TableList.jsx";
// import Maps from "./views/Maps.jsx";
// import Upgrade from "./views/Upgrade.jsx";
import EmpleadosPage from "./views/EmpleadosPage.jsx";
// import icon from "./views/Icons.jsx";
import Producto from "./views/ProductoPage.jsx";
import Empresa from "./views/EmpresaPage.jsx";
import Pedido from "./views/PedidoPage.jsx";



var dashRoutes = [
  {
    path: "/dashboard",
    name: "Reportes",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/Empleados-page",
    name: "Emplados",
    icon: "users_single-02",
    component: EmpleadosPage,
    layout: "/admin"
  },
  {
    path: "/Cliente",
    name: "Clientes",
    icon: "business_badge",
    component: ClientesPage,
    layout: "/admin"
  },
  {
    path: "/Producto",
    name: "Producto",
    icon: "files_box",
    component: Producto,
    layout: "/admin"
  },
  {
    path: "/Empresa",
    name: "Empresa",
    icon: "business_briefcase-24",
    component: Empresa,
    layout: "/admin"
  },
  {
    path: "/Pedido",
    name: "Pedido",
    icon: "files_paper",
    component: Pedido,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Mapa",
    icon: "design-2_ruler-pencil",
    component:Typography,
    layout: "/admin"
  }
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
