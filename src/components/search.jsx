import styled from "styled-components";
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const[input, setInput] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/searched/"+input);
    }

    return ( 
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=> setInput(e.target.value)} placeholder="Search for a recipe..." value={input} type="text" />
        </div>
    </FormStyle>
     );
}


const FormStyle = styled.form`
    text-align:center;
    position: relative;
    width:100%;

   

    input{
        border:none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size:1.5rem;
        color:white;
        padding:0.5rem 3rem;
        outline:none;
        border-radius:1rem;
        width:60%;
        
    }

    svg{
        position:absolute;
        top:50%; 
        left:20%;
        transform:translate(100%, -50%);
        color:white;
    }
`;

export default Search;