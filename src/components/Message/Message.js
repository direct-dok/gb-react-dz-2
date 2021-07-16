import './Message.css'

function Message(props) {

    return (
        <div className={`message__items ${props.message.class}`}>
            <div className="message__item">
                <div className="message__name">{ props.message.name }</div>
                <p className="message__content">{ props.message.message }</p>
            </div>
        </div>
    )
}

export default Message