import React from 'react';

class MyComponent extends React.Component {
  render() {
    const isLoggedIn = true; // 또는 false로 설정

    if (isLoggedIn) {
      return <h1>환영합니다!</h1>;
    } else {
      return <h1>로그인 해주세요.</h1>;
    }
  }
}

export default MyComponent;
