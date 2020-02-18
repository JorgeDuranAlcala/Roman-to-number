import * as React from 'react';
import Alert from './secundarys/Alert';
import myImage from "../assets/img/cesar.jpg";
import "../styles/Form.css"

export interface IFormProps {
}

export interface IFormState {
    clicked: boolean;
    value: number;
    romanNumber: string
}

export default class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    this.state = {
        clicked: false,
        value: 0,
        romanNumber: '',
    }
  }

  public render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4">
            { (this.state.clicked && this.state.romanNumber !== undefined) ? <Alert message={`Your number in roman is ${this.state.romanNumber}`}></Alert> : false}
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-lg">
                    <div className="card-header text-center">
                        <h3 className="text">Number to Roman Converter</h3>
                    </div>
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img className="img-fluid" src={myImage} alt="cesar"/>
                            </div>
                        </div>
                        <form onSubmit={e => this.onSubmitHandlerEvent(e)}>
                            <div className="form-group">
                                <input type="number" id="num" className="form-control" 
                                onChange={e => this.onChangeHandler(e)}  placeholder="Enter a number" min="1" max="3999"/>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  onSubmitHandlerEvent(e: React.FormEvent<HTMLFormElement>) {
      this.setState({clicked: !this.state.clicked})
      this.transformToRoman(this.state.value)
      e.preventDefault()
  }

  onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const currentNumber = parseInt(e.target.value);
        this.setState({value: currentNumber })
  }

  clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
        this.setState({clicked: !this.state.clicked})
  }

  transformToRoman(numero: number): void {

      const u = numero % 10;
      const d = Math.floor( numero / 10) % 10;
      const c = Math.floor( numero / 100) % 10;
      const m = Math.floor(numero / 1000) % 10;

      const unidad = ["","I","II","III","IV","V","VI","VII","VIII", "IX"]
      const decena = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
      const centena = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
      const milecima = ["", "M", "MM","MMM", ]

       let romanNumber = '';

      if(numero >= 1000) {
          romanNumber = milecima[m] + centena[c] + decena[d] + unidad[u]
          this.setState({romanNumber: romanNumber})
        }
        else if(numero >= 100) {
            romanNumber = centena[c] + decena[d] + unidad[u]
            this.setState({romanNumber: romanNumber})
        }
        else if(numero >= 10) {
            romanNumber = decena[d] + unidad[u]
            this.setState({romanNumber: romanNumber})
        }
        else {
            romanNumber =  unidad[u]
            this.setState({romanNumber: romanNumber})
      }
    
  }

}
