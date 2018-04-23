import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ZodiacSign extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        var zodiac='';
        var url='';
        switch(this.props.month){
            case 1:
                if(this.props.day<=19){
                    zodiac="Capricorn";
                    url=require("./Capricorn.jpg");
                } else {
                    zodiac="Aquarius";
                    url=require("./Aquarius.jpg");
                }
            break;
            case 2:
                if(this.props.day<=18){
                    zodiac="Aquarius";
                    url=require("./Aquarius.jpg");
                } else {
                    zodiac="Pisces";
                    url=require("./Pisces.jpg");
                }
            break;
            case 3:
                if(this.props.day<=20){
                    zodiac="Pisces";
                    url=require("./Pisces.jpg");
                } else {
                    zodiac="Aries";
                    url=require("./Aries.jpg");
                }
            break;
            case 4:
                if(this.props.day<=19){
                    zodiac="Aries";
                    url=require("./Aries.jpg");
                } else {
                    zodiac="Taurus";
                    url=require("./Taurus.jpeg");
                }
            break;
            case 5:
                if(this.props.day<=20){
                    zodiac="Taurus";
                    url=require("./Taurus.jpeg");
                } else {
                    zodiac="Gemini";
                    url=require("./Gemini.jpg");
                }
            break;
            case 6:
                if(this.props.day<=20){
                    zodiac="Gemini";
                    url=require("./Gemini.jpg");
                } else {
                    zodiac="Cancer";
                    url=require("./Cancer.jpg");
                }
            break;
            case 7:
                if(this.props.day<=22){
                    zodiac="Cancer";
                    url=require("./Cancer.jpg");
                } else {
                    zodiac="Leo";
                    url=require("./Leo.jpg");
                }
            break;
            case 8:
                if(this.props.day<=22){
                    zodiac="Leo";
                    url=require("./Leo.jpg");
                } else {
                    zodiac="Virgo";
                    url=require("./Virgo.jpg");
                }
            break;
            case 9:
                if(this.props.day<=22){
                    zodiac="Virgo";
                    url=require("./Virgo.jpg");
                } else {
                    zodiac="Libra";
                    url=require("./Libra.jpg");
                }
            break;
            case 10:
                if(this.props.day<=22){
                    zodiac="Libra";
                    url=require("./Libra.jpg");
                } else {
                    zodiac="Scorpio";
                    url=require("./Scorpio.jpg");
                }
            break;
            case 11:
                if(this.props.day<=21){
                    zodiac="Scorpio";
                    url=require("./Scorpio.jpg");
                } else {
                    zodiac="Sagittarius";
                    url=require("./Sagittarius.jpg");
                }
            break;
            case 12:
                if(this.props.day<=19){
                    zodiac="Sagittarius";
                    url=require("./Sagittarius.jpg");
                } else {
                    zodiac="Capricorn";
                    url=require("./zodiac-signs.jpg");
                }
            break;
            default:
                zodiac="defaultHello";
                url=require("./Capricorn.jpg");
            break;
        }
        return (
            <div>
                <h2>
                    <img src={url}/>
                    <br/><br/>
                    Hey {this.props.value}! Your zodiac sign is {zodiac}!!
                </h2>
            </div>
        );
    }
}
class ZodiacForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',  startDate: moment(), 'submitted': false, 'month':'', 'day':'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChangeDate(date) {
        this.setState({
          startDate: date
        });
      }

    handleSubmit(event) {
        var date = new Date(this.state.startDate);
        var month = date.getMonth()+1;
        var day = date.getDate();
        this.setState({'submitted':true, 'month': month, 'day':day });
    }

    render() {
        if (this.state.submitted) {
        return (
            <div>
                <ZodiacSign month={this.state.month} day={this.state.day} value={this.state.value}/>
            </div>
        );
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Welcome! Please enter your name and birthday to know your zodiac sign. </h3>
                    <table  className="TableClass" align="center">
                        <tr>
                            <td>
                            Name:
                            </td>
                            <td>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Enter your Birthday:
                            </td>
                            <td>
                                <DatePicker
                                selected={this.state.startDate}
                                    onChange={this.handleChangeDate}
                                />
                            </td>
                        </tr>
                        <tr>
                            
                        </tr>
                    </table>
                    <input type="submit" value="Submit" align/>
                </form>
            );
        }   
    }
}

class Page extends React.Component {
    render() {
        return (
            <div className="DivClass">
                <h1>ZODIAC SIGN</h1>
                <ZodiacForm/>
            </div>
        );
    }
}

ReactDOM.render(
<Page />,
document.getElementById('root')
);
registerServiceWorker();
