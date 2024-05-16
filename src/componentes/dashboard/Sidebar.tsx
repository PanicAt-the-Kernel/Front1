import {
  Sidebar as SidebarPro,
  Menu,
  MenuItem,
  SubMenu
} from "react-pro-sidebar";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from "@emotion/react";

interface SidebarProps{
    collapsed:boolean;
    toggled:boolean;
    setBroken:any;
}

function Sidebar({collapsed,setBroken,toggled}:SidebarProps) {
    const basil=useTheme();
  return (
    <SidebarPro
        style={{
            height:"100vh",
            top:"auto",
            //@ts-ignore
            backgroundColor:basil.palette.secondary.dark,//IGNORAR EL ERROR, TYPESCRIPT TIENE ESQUIZOFRENIA
            borderRight:"1px solid black"
        }}
        breakPoint="md"
        onBreakPoint={setBroken}
        collapsed={collapsed}
        toggled={toggled}
    >
      <Menu>
        <MenuItem component={<a href="/"></a>} icon={<HomeIcon />}>Inicio</MenuItem>
        <MenuItem component={<a href="/empresas"></a>} icon={<CorporateFareIcon />}>
          Empresa
        </MenuItem>
        <SubMenu label="Productos" icon={<FastfoodIcon />}>
          <MenuItem component={<a href="/categorias"></a>} icon={<CategoryIcon />}>
            Categorias
          </MenuItem>
          <MenuItem component={<a href="/productos"></a>} icon={<MenuBookIcon />}>
            Lista de Productos
          </MenuItem>
        </SubMenu>
        <MenuItem component={<a href="/empleados"></a>} icon={<PeopleIcon />}>
          Empleados
        </MenuItem>
        <MenuItem icon={<AttachMoneyIcon />}>
          Promociones
        </MenuItem>
        <MenuItem component={<a href="/insumos"></a>} icon={<ShoppingBasketIcon />}>
          Insumos
        </MenuItem>
      </Menu>
    </SidebarPro>
  );
}
export default Sidebar;
