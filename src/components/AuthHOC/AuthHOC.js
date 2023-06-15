import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function AuthHoc({ children, userToken }) {
  const navigate = useNavigate();

  if (!userToken) {
    navigate('/auth', { replace: true });

    return;
  }

  if (userToken) {
    return children();
  }
}

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
});

const mapDispatchProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchProps)(AuthHoc);
