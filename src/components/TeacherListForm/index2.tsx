import { ITechList } from "../../App";
import { SubmitHandler, useForm } from "react-hook-form";

interface ITeacherListFormProps{
    setTeacherList: React.Dispatch<React.SetStateAction<ITechList[]>>;
    teacherList: ITechList[];
}
type tFormValues = {
    name: string;
    job: string;
    module: string;
}

export const TeacherListForm = ({setTeacherList,teacherList}: ITeacherListFormProps) => {
    const {register, handleSubmit, reset} = useForm<tFormValues>()

    const submit: SubmitHandler<tFormValues> = (formData) => {
        const newTeacher = [...teacherList, { ... formData, id: crypto.randomUUID() }]
        setTeacherList(newTeacher)
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <h3>Cadastrar novo Professor</h3>
            <input {...register("name")} />
            <input {...register("job")} />
            <input {...register("module")} />
            <button>Cadastrar funcionário</button>
        </form>
    )
}