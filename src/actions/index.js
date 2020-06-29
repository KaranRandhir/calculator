
export const calculation = () => {
    return {
        type:"EVALUATE_STRING"
}
}

export const calculate = (num) => {
    return {
        type : "ADD_TO_STRING",
        payload: num
        }
}

export const clear=  () => {
    return {
        type:"BACKSPACE"
    }
}

export const clearAll= () => {
    return {
        type:"CLEAR_ALL"
    }
}