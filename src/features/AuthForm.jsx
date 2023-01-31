import styled from 'styled-components';

import { TextField, Button } from '../shared/components';

export const AuthForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <AuthFormWrapper onSubmit={handleSubmit}>
      <AuthFormUsernameLabel htmlFor="username">Username</AuthFormUsernameLabel>
      <AuthFormUsernameTextField
        placeholder="Username"
        id="username"
        name="username"
        autoComplete="off"
      />

      <Button type="submit">Auth</Button>
    </AuthFormWrapper>
  );
};

const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  border: 1px solid lightgrey;
  padding: 32px;
  border-radius: 5px;
`;

const AuthFormUsernameLabel = styled.label`
  margin-bottom: 8px;
`;

const AuthFormUsernameTextField = styled(TextField)`
  margin-bottom: 24px;
`;
