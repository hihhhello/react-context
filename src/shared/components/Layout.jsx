import styled from 'styled-components';

export const Layout = ({ children }) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
