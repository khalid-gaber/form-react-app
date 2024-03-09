import { useInfosDispatch } from "../../InfosProvider";

export default function Input ({prop, label, text}) {
    const dispatch = useInfosDispatch();

    function handleChange (value) {
        dispatch({
            type: "change",
            prop: prop,
            value: value
        })
    }    
    return (
        <div className="label"><label >{label}:<input onChange={(e)=>{handleChange(e.target.value)}} type="text" value={text} /></label></div>
    )
}

