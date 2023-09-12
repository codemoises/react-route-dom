import { useEffect, useRef, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime((t) => t - 1);
        }, 1000);
    }, [time]);

    if (time < 0) {
        navigate('/about', {
            state: `This is the state: ${Math.random()}`,
        });
    }

    return () => {
        clearTimeout(timeout.current);
    }
}