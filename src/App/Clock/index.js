
import {useCurrentDate} from "./useCurrentDate";
import { Wrapper } from "./styled";

export const Clock = () => {
    
    const date = useCurrentDate();

    return (
        <Wrapper>
         Dzisiaj jest_
         {""}
         {date.toLocaleString(undefined, {
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            day: "numeric",
            month: "long"
         })}
        </Wrapper>
    )
}

export default Clock;