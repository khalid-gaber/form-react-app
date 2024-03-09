import { useInfos } from "../InfosProvider"

export default function Name () {
    const infos = useInfos();
    return <div className="name">hello <span>{infos.result.firstName} {infos.result.lastName}</span></div>
}