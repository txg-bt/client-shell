import React from 'react';
import { Flex } from 'rebass';
import { Container, Image } from './NavBar.styled';
import { useTheme } from 'styled-components';
import ShoppingCart from './shopping-cart.png';
import User from './user.png';
import Sun from './sun.png';
import Moon from './moon.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { themeActions } from '../../store/slices/themeSlice';
import { useNavigate } from 'react-router-dom';

function NavBar({ toggleTheme, isLightTheme }) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <Flex {...theme.heading} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        Awesome Ecommerce Shop
      </Flex>
      <Flex>
        <Image src={ShoppingCart} onClick={() => navigate('/cart')} />

        <Image src={User} onClick={() => navigate('/user-details')} />

        <Image src={isLightTheme ? Sun : Moon} onClick={toggleTheme} />
      </Flex>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLightTheme: state.themeConfig.isLightTheme,
});

const mapDispatchProps = (dispatch) => ({
  toggleTheme: bindActionCreators(themeActions.toggleTheme, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(NavBar);
