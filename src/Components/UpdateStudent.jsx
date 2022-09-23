import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { store } from './StudentsList';
import { useState, useContext } from "react";


const AddStudents = () => {
    const [data] = useContext(store);
    var { path } = useParams();
    const pathValue= parseInt(path)
    const Filter = data.filter((value) => value.id === pathValue)
   
    const [name1, setName] = useState(Filter[0].name);
    const [age1, setAge] = useState(Filter[0].age);
    const [course1, setCourse] = useState(Filter[0].course);
    const [batch1, setBatch] = useState(Filter[0].batch);

    const back = useNavigate()

    var index = data.findIndex(object => {
        return object.id === pathValue;
      });

    console.log(index)



    const getName = (e) => {
        setName(e.target.value);
    }

    const getAge = (e) => {
        setAge(e.target.value);
    }

    const getBatch = (e) => {
        setBatch(e.target.value);
    }

    const getCourse = (e) => {
        setCourse(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((name1.length && age1.length && course1.length && batch1.length) === 0) {
            return;
        }

        let update1=data[index]
        update1.name= name1
        update1.age= age1
        update1.course= course1
        update1.batch= batch1
    

        setName("");
        setBatch("");
        setCourse("")
        setAge("")

        back('/Students')
    }



    return (
        <div>


            <form action="/Students/Details" className="form"  >
                <label for="name" className="label1">Name</label>
                <input type="text" name="name" className="input1" value={name1} onChange={getName}></input>

                <label for="age" className="label2" >Age</label>
                <input type="number" name="age" className="input2" value={age1} onChange={getAge}></input><br />

                <label for="course" className="label3">Course</label>
                <input type="text" name="course" className="input3" value={course1} onChange={getCourse}></input>

                <label for="batch" className="label4" >Batch</label>
                <input type="text" name="batch" className="input4" value={batch1} onChange={getBatch}></input><br />

                <button className="submit" onClick={handleSubmit}>Update</button>
                <Link to="/Students" className="cancel">Cancel</Link>


            </form>

        </div>
    )
}




export default AddStudents;
