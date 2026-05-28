import { Link, useNavigate } from 'react-router-dom';

<<<<<<< Updated upstream
const MainLayout = ({ children, usuario = "Juan Pérez" }) => {
  const navigate = useNavigate();
=======
const menuAdmin = [
  { ruta: '/dashboard',      icono: '📊', label: 'Dashboard' },
  { ruta: '/expenses',       icono: '💸', label: 'Gastos'    },
  { ruta: '/invoices',       icono: '🧾', label: 'Facturas'  },
  { ruta: '/reportes',       icono: '📈', label: 'Reportes'  },
  { ruta: '/reporteFiltros', icono: '🔍', label: 'Filtros'   },
  { ruta: '/admin/users',    icono: '👥', label: 'Usuarios'  },
];

const menuUsuario = [
  { ruta: '/dashboard',      icono: '📊', label: 'Dashboard' },
  { ruta: '/expenses',       icono: '💸', label: 'Gastos'    },
  { ruta: '/reportes',       icono: '📈', label: 'Reportes'  },
  { ruta: '/reporteFiltros', icono: '🔍', label: 'Filtros'   },
];

const MainLayout = ({ children, usuario = 'Usuario', rol = 'usuario', onLogout }) => {
  const navigate  = useNavigate();
  const menuItems = rol === 'admin' ? menuAdmin : menuUsuario;

  const handleLogout = () => {
    onLogout();
  };
>>>>>>> Stashed changes

  return (
    <div className="main-layout">

      <header>
        <h1>💰 Gestor de Gastos</h1>
      </header>

      <div className="layout-body">

        <aside className="sidebar">
          <nav>
            <p className="sidebar-titulo">MENÚ</p>
            <ul>
<<<<<<< Updated upstream
              <li><Link to="/dashboard">📊 Dashboard</Link></li>
              <li><Link to="/expenses">💸 Gastos</Link></li>
              <li><Link to="/invoices">🧾 Facturas</Link></li>
              <li><Link to="/reportes">📈 Reportes</Link></li>
              <li><Link to="/reporteFiltros">🔍 Filtros</Link></li>
            </ul>
          </nav>

          {/* Tarjeta de usuario clickeable → navega a /perfil */}
          <div
            className="usuario-card"
            onClick={() => navigate('/perfil')}
            title="Ver configuración de perfil"
          >
            <div className="usuario-avatar">
              {usuario.charAt(0).toUpperCase()}
            </div>
            <div className="usuario-info">
              <span className="usuario-nombre">{usuario}</span>
              <span className="usuario-rol">⚙️ Ver perfil</span>
            </div>
=======
              {menuItems.map(item => (
                <li key={item.ruta}>
                  <Link to={item.ruta}>{item.icono} {item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sidebar-bottom">
            <div
              className="usuario-card"
              onClick={() => navigate('/perfil')}
              title="Ver configuración de perfil"
            >
              <div className="usuario-avatar">
                {usuario.charAt(0).toUpperCase()}
              </div>
              <div className="usuario-info">
                <span className="usuario-nombre">{usuario}</span>
                <span className="usuario-rol">⚙️ Ver perfil</span>
              </div>
            </div>

            <button className="btn-cerrar-sesion" onClick={handleLogout}>
              🚪 Cerrar sesión
            </button>
>>>>>>> Stashed changes
          </div>
        </aside>

        <main>
          <div className="content-container">
            {children}
          </div>
        </main>

      </div>

      <footer>
        © 2026 - Programación Web
      </footer>

    </div>
  );
};

<<<<<<< Updated upstream
export default MainLayout;
=======
export default MainLayout;
>>>>>>> Stashed changes
