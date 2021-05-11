/**
 * This handler create a common onChange event for state
 */
export const createOnChange = (state, setState, postChange = (i) => i) => {
    return ({ target }) => {
        const { name, type, value, checked } = target;
        const valueFinal = type === 'checkbox' ? checked : value
        if (!name || name === '.') {
            console.warn('Target element requiere name attribute', target);
        } else if (name.includes('.')) {
            let newState = Array.isArray(state) ? [...state] : { ...state }
            let ref = newState;
            const keys = name.split('.');
            const key = keys.pop();
            keys.forEach(key => {
                if (!ref[key]) {
                    ref[key] = {};
                }
                ref = ref[key];
            });
            ref[key] = valueFinal;
            newState = postChange(newState);
            setState(newState);
        } else {
            let newState = Array.isArray(state) ? [...state] : { ...state }
            newState[name] = valueFinal;
            newState = postChange(newState);
            setState(newState);
        }
    }
}