import React from "react";

class Article extends React.Component {
    state = {
        visible: false
    };
    handleReadMoreClick = (e) => {
        e.preventDefault();
        this.setState({visible: true})
    };

    render() {
        const {author, text, bigText} = this.props.data;
        const {visible} = this.state;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                {!visible &&
                <a href="#readmore" onClick={this.handleReadMoreClick} className='news__readmore'>Подробнее</a>}
                {visible && <p className="news__text">{bigText}</p>}
            </div>
        )
    }
}

export {Article};