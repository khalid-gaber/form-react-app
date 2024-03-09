import { useInfos, useInfosDispatch } from "../../InfosProvider";
import Input from "./Input";

export default function Form () {
    const dispatch = useInfosDispatch();
    const infos = useInfos();

    function handleSubmit (e) {
        e.preventDefault();
        dispatch({type: "submit"})
    }
    
    return (
        <form className="form" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="inputs">
                <Input prop={"firstName"} text={infos.inputs.firstName} label="first name"/>            
                <Input prop={"lastName"} text={infos.inputs.lastName} label="last name"/>
                <Input prop={"job"} text={infos.inputs.job} label="your job"/>
            </div>
            <div className="buttons">
                <input type="submit" value={"click"}/>
                <input onClick={()=>{dispatch({type:"reset"})}} type="button" value={"reset"}/>
            </div>
        </form>
    )
}