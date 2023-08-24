import { ReactComponent as CheckSVG} from "./check.svg";
import { ReactComponent as DeleteSVG} from "./delete.svg";


function TodoIcon({ type }){
    return(
        <span 
            className={`Icon-svg Icon-${type}`}
        >
            <CheckSVG />
        </span>
    )
}

export { TodoIcon };