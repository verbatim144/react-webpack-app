import * as React from "react";
export interface HelloWorldProps {
    userName: string;
    lang: string;
  }
  export const App = (props: HelloWorldProps) => (
    <h1>
      Welcome to React Starter App! {props.lang}!
    </h1>
  );