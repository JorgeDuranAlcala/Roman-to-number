import * as React from 'react';

export interface ILinkProps {
    url: string;
    title: string;
}

export default class Link extends React.PureComponent<ILinkProps> {
  public render() {
    return (
    <li className="link"><a href={this.props.url}>{this.props.title}</a></li>
    );
  }
}
