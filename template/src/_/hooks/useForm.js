const createOnChange = (setState) => {
    return ({ target }) => {
        const { value, name } = target;
        setState(state => {
            state[name] = value;
            return state;
        })
    }
}


export const useForm = (init, validate) => {
    const [state, setState] = useState(init);
    const onChange = createOnChange(setState);
    const onValidate = () => {
        console.log('validate', validate);
    }
    return [state, setState, onChange, onValidate]
}

export const createForm = (handler, validate) => {
    const [state, setState] = handler;
    const onChange = createOnChange(setState);
    const onValidate = () => {
        console.log('validate', validate);
    }
    return [state, setState, onChange, onValidate]
}