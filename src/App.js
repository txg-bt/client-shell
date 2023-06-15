import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import themes from '@txg/theme';
import { Flex } from 'rebass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { userActions } from './store/slices/user';
const SsoUI = React.lazy(() => import('sso_ui/App'));

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    ${({ theme }) => theme.body};
  }
`;

const App = ({ isLightTheme, setToken }) => {
  return (
    <ThemeProvider theme={themes.client[isLightTheme ? 'light' : 'dark']}>
      <GlobalStyles />
      <BrowserRouter>
        <Flex height="100%" width="100%" flexDirection={'column'}>
          <NavBar />
          <Flex alignItems={'center'} justifyContent={'center'} height={'100%'} width={'100%'}>
            <Routes path="/">
              <Route
                path="/auth/*"
                element={
                  <React.Suspense fallback="Loading...">
                    <SsoUI path="/auth" setToken={setToken} />
                  </React.Suspense>
                }
              ></Route>

              <Route path="/products" element={<div>500</div>}></Route>
              <Route path="/user-details" element={<div>503</div>}></Route>
              <Route path="/orders" element={<div>503</div>}></Route>
              <Route path="*" element={<div>404</div>}></Route>
            </Routes>
          </Flex>
        </Flex>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.themeConfig.isLightTheme,
});

const mapDispatchProps = (dispatch) => ({
  setToken: bindActionCreators(userActions.setToken, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(App);
