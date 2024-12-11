const StateHook =(initialValue)=>{
    let value = initialValue;
    const setValue = (param)=>{
        value = param
    }
    return [value,setValue]
}

export default StateHook;