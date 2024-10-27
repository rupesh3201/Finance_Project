
import styled from 'styled-components';

// Styled components for NavBar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1E3A8A;
  color: #FFFFFF;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;  // Hides links on smaller screens
  }
`;

const NavLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #FBBF24;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  color: #1E3A8A;
  font-weight: bold;
  background-color: #FBBF24;
  border-radius: 5px;

  &:hover {
    background-color: #F59E0B;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo>FinanceHub</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact Us</NavLink>
      </NavLinks>
      <AuthButtons>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </AuthButtons>
    </Nav>
  );
};

export default NavBar;
