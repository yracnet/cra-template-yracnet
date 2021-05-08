/**
 * This handler create a common onChange event for state
 */
export const createOnChange = (state, setState, postChange = (i) => i) => {
    return (event) => {
        const { target } = event;
        const { name, value } = target;
        if (!name || name === '.') {
            console.warn('Target element requieri name attribute', target);
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
            ref[key] = value;
            newState = postChange(newState);
            setState(newState);
        } else {
            let newState = Array.isArray(state) ? [...state] : { ...state }
            newState[name] = value;
            newState = postChange(newState);
            setState(newState);
        }
    }
}