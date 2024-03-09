import { useInfos } from "../InfosProvider"

export default function Result () {
    const infos = useInfos();
    return <div className="result">fantastic! you are a clever <span>{infos.result.job}</span></div>
}