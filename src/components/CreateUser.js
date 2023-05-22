import {useState} from "react";
import axios from "axios";


export default function CreateUser() {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/user/save', inputs);
        console.log(inputs)
    }
    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <button>Save</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

