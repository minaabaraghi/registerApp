import {
    HttpTransportType,
    HubConnection,
    HubConnectionBuilder,
} from '@microsoft/signalr';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {msgAction} from '../redux/reciveMSG/reciveSlice';
import React from 'react';
function SignalR() {
    const [conection, setConection] = useState<HubConnection>();
    const [text, setText] = useState<string>();
    const [message, setMessage] = useState<Array<string>>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useeffect');

        join();
    }, []);
    useEffect(() => {
        if (conection) {
            conection.on('ReceiveMessage', (text: string) => {
                console.log('ReceiveMessage', text, message);
                message.push(text);
                alert(text, 'mina12');
                // setTimeout(() => {
                setMessage(message);
                // dispatch(msgAction({msg: message}));
                // }, 5000);
            });
        }
    }, [conection?.invoke]);

    const join = async () => {
        const hubConnection = new HubConnectionBuilder()
            .withUrl('http://signalr.golrangonline.ir/chat-hub', {
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets,
            })
            .build();
        try {
            await hubConnection.start();
        } catch (error) {
            console.log(error, 'err');
        }
        setConection(hubConnection);
    };
    const sendMsg = async () => {
        console.log('SendMessage', text);
        if (conection) {
            await conection.invoke('SendMessage', text);
            setText('');
        }
    };
    return (
        <div className="App">
            <h1>test signalR</h1>
            <input
                placeholder="test"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={sendMsg}>click</button>
            <h2>
                <ul>
                    {message?.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </h2>
        </div>
    );
}

export default SignalR;
