import {CalenderHead,Clenderbody,StyledDay,HeadDay,SevenColGrid,Wrapper} from "./styled"
import DAYS from './data.js'
import {range} from './utils.js'

export const Calender = () =>{
    return( 
    <Wrapper>
        <CalenderHead>
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
        <p>oct 2022</p>
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </CalenderHead>
        <SevenColGrid>
            {DAYS.map((day) =>(<HeadDay>{day}</HeadDay>))}
        </SevenColGrid>
        <Clenderbody>
            {range(31).map((day)=>(<StyledDay>{day}</StyledDay>))}
        </Clenderbody>
    </Wrapper>
    );
};
export default Calender;