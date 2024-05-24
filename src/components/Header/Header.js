import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import Icon from '../Icon';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <SideButton> <Icon id="shopping-bag" color={COLORS.gray[900]} size="24px" strokeWidth="2px" /> </SideButton>
          <SideButton> <Icon id="search" color={COLORS.gray[900]} size="24px" strokeWidth="2px" /></SideButton>
          <SideButton> <Icon id="menu" color={COLORS.gray[900]} size="24px" strokeWidth="2px" onClick={() => setShowMobileMenu(true)}/></SideButton>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const ResponsiveSuperHeader = styled(SuperHeader)`
  display: none;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media(${QUERIES.tabletAndDown}) {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media(${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const Side = styled.div`
  display: none;

  @media(${QUERIES.tabletAndDown}) {
    display: flex;
    gap: 2rem;
  }

  @media(${QUERIES.phoneAndDown}) {
    gap: 1rem;
  }
`;

const SideButton = styled.button`
  background: transparent;
  border: none;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
