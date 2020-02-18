import * as React from 'react';
import "../styles/Page.css"
import Nav from './Nav';
import Link from './secundarys/Link';
import Form from './Form';

export interface IPageProps {
}

export interface IPageState {
}

export default class Page extends React.Component<IPageProps, IPageState> {
  constructor(props: IPageProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className="page">
        <Nav>
            <Link url="www.github.com" title="My github"></Link>
            <Link url="www.instagram.com" title="My instagram"></Link>
        </Nav>
        <Form></Form>
      </div>
    );
  }
}
