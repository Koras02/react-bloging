/* eslint-disable react/require-render-return */
import Event from "./2.Event";
import { FieldEvent } from "./2.Event/Event";
import "./App.css";
import React from "react";
// import MyComponent from "./1.First-Component/Markup";

// const Header = () => {
//   return <h1>Header Component</h1>;
// };

// const Footer = () => {
//   return <h1>Footer Component</h1>;
// };

// const MainContent = () => {
//   return <p>Main Content</p>;
// };

export const ReactApp = () => {
  return (
    <section>
      {/* <h1>컴포넌트 위 컴포넌트 작성가능</h1> */}
      {/* <MyComponent /> */}
      {/* <Event /> */}
      <FieldEvent />
    </section>
  );
};

export default ReactApp;

// function Component
// const ReactComponent = () => {
//   return <h1>hello React!</h1>;
// };

// class ReactComponent extends Component {
//   render() {
//     return <div>hello</div>;
//   }
// }

// export default ReactComponent;
