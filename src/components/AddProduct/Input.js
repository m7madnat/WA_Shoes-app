import React,{useState,useEffect} from "react";
const Input = ({id, type, holder, value, callBack, submitted}) => {
	// eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({value: ""});

    const handleChange = ({target}) => {
        setState({value: target.value});
        callBack(target.value, id);
    };

    useEffect(() => {
        if (submitted) {
            setState({value: ""});
        }
    }, [submitted]);

    return (
        <>
            <input
                id={id}
                onChange={handleChange}
                type={type}
                placeholder={holder}
                value={value}
                required
            />
        </>
    );
}

export default Input;