import { createOnChange } from '_/handlers/onChange'
import { createOnValidate } from '_/handlers/onValidate'

export const useForm = (init, validate) => {
    const [state, setState] = useState(init);
    const onChange = createOnChange(state, setState);
    const onValidate = createOnValidate(validate);
    return [state, setState, onChange, onValidate]
}

export const createForm = (handler, validate) => {
    const [state, setState] = handler;
    const onChange = createOnChange(state, setState);
    const onValidate = createOnValidate(validate);
    return [state, setState, onChange, onValidate]
}