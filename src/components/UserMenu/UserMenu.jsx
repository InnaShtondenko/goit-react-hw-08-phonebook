import { useAuth } from 'redux/hooks/getAuth';
import { useLogoutUserMutation } from 'redux/slices/usersAPISlice';

import { theme } from 'components/utils/Theme.styled'; 
import { 
  LogoutButton,
  MenuFrame,
  UserGreeting,
  UserName, } from './UserMenu.stuled'; 

export function UserMenu() {
  const { userData } = useAuth();
  const [logout] = useLogoutUserMutation();

  return (
    <MenuFrame>
      <UserGreeting>
        Hi, <UserName>{userData.name}</UserName>
      </UserGreeting>
      <LogoutButton
        onClick={logout}
        bgColor={theme.colors.textColorSecondary}
        hoverColor={theme.colors.warning}
      >
        Logout
      </LogoutButton>
    </MenuFrame>
  );
}