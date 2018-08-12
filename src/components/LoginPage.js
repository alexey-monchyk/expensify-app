import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1>expenses</h1>
      <hr />
      <div className="box-layout__box__phrase">
        <p>don't waste your money on garbage, waste it<br/> on your memories.</p>
        <button onClick={startLogin} className="button">login with google</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);