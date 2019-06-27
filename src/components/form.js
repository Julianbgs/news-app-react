import React from 'react';

class Form extends React.Component {
    state = {
        valInput: '',
        valText: '',
        valBigText: '',
        checked: true
    };

    changeInputVal = (e) => {
        this.setState({valInput: e.currentTarget.value})
    };

    changeTextVal = (e) => {
        this.setState({valText: e.currentTarget.value})
    };

    changeBigTextVal = (e) => {
        this.setState({valBigText: e.currentTarget.value})
    }

    changeStateCheckbox = (e) => {
        this.setState((state)=>{
            return{
                checked: !state.checked
            }
        })
    };

    seeNewsInfo = (e) => {
        e.preventDefault();
        const { valInput, valText, valBigText } = this.state;
        // alert(valInput + '\n' + valText);
        this.props.onAddNews({
            id: +new Date(),
            author: valInput,
            text: valText,
            bigText: valBigText
        })
    };

    render() {
        return (
            <React.Fragment>
                <form className='add'>
                    <input
                        type='text'
                        className='add__author'
                        placeholder='Ваше имя'
                        onChange={this.changeInputVal}
                        value={this.state.valInput}
                    />
                    <textarea
                        className='add__text'
                        placeholder='Текст новости'
                        onChange={this.changeTextVal}
                        value={this.state.valText}
                    >
            </textarea>
                    <textarea
                        className='add__text'
                        placeholder='Текст новости'
                        onChange={this.changeBigTextVal}
                        value={this.state.valBigText}
                    >
            </textarea>
                    <label className='add__checkrule'>
                        <input type='checkbox' onChange={this.changeStateCheckbox}/> Я согласен с правилами
                    </label>
                    <button
                        className='add__btn'
                        onClick={this.seeNewsInfo}
                        disabled={this.state.checked}
                    >
                        Create new post
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

export {Form};