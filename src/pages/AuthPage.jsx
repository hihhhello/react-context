import styled from 'styled-components';

import { AuthForm } from '../features/AuthForm';
import { CenterContainer } from '../shared/components';

export const AuthPage = () => {
  return (
    <CenterContainer>
      <div>
        <AuthFormTitle>Sign Up</AuthFormTitle>

        <AuthForm />
      </div>
    </CenterContainer>
  );
};

const AuthFormTitle = styled.h4`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 24px;
`;
