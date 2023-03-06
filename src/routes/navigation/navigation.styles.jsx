import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Logo = styled.h3`
  h3{
    letter-spacing: 3px
  };
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`