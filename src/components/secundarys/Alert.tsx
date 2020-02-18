import * as React from 'react';
import "../../styles/alert.css"

export interface IAlertProps {
    message: string;
}

export default function Alert (props: IAlertProps) {
  return (
    <div className="alert alert-info">
        {props.message}
    </div>
  );
}
