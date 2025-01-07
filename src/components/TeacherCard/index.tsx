import { ITechList } from "../../App"

interface ITeacherCardProps{
    teacher: ITechList;
}

export const TeacherCard = ({teacher}: ITeacherCardProps) => {
    return(
        <li>
            <h3>{teacher.name}</h3>
            <p>{teacher.job}</p>
            <span>{teacher.module}</span>
        </li>
    )
}