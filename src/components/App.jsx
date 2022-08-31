import UserRoutes from 'UserRoutes/UserRoutes';
import Menu from './Modules/Menu/Menu';

export const App = () => {
  return (
    <div>
      <Menu />
      <UserRoutes />
    </div>
  );
};
