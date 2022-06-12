import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>Hung Dep Trai</div>
      <Outlet />
    </div>
  )
};

export default Layout;