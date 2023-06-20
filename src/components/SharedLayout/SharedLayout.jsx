import { Container } from 'components/Container/Container.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};
