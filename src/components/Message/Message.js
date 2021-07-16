import './Message.css'

function Message(props) {

    const messages = props.messages.map((elem, index) => 
        <div className="message__items" key={index.toString()}>
            <div className="message__item">
                <div className="message__name">{ elem.name }</div>
                <p className="message__content">{ elem.message }</p>
            </div>
        </div>
    )

    return (
        <div className="message">
            {messages}
        </div>
    )
}

export default Message