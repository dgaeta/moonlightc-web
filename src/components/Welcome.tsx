import * as React from "react";

export interface IWelcomeProps { 
  compiler: string;
  framework: string;
}

export default class Welcome extends React.Component<IWelcomeProps, {}> {

  constructor(props: IWelcomeProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <h1>
        Hello, go fuck yourself and welcome to your new contact card!
      </h1>
    );
  }
}

