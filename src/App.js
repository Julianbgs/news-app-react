import React from 'react';
import {News} from "./components/news";
import {Form} from "./components/form";
import './App.css';

class App extends React.Component {
    state = {
        news: null,
        isLoading: false
    };

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTimeout(() => {
                this.setState({isLoading: false, news: data})
            }, 1500)
            })
    }

    handleAddNews = (data) => {
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews})
    };

    render() {
        const { news, isLoading } = this.state;
        return (
            <div className="main-wrap">
                <div className="main-box">
                    <h1 className="main-title"> Новости</h1>
                    <Form onAddNews={this.handleAddNews}/>
                    {isLoading && <p>Загружаю...</p>}
                    {Array.isArray(news) && <News data={news} />}
                </div>
            </div>
        )
    }
}

export default App;
