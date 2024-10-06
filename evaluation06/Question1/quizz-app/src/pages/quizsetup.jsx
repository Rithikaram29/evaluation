import { Select, Input } from "@chakra-ui/react";
import { useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchQuestions, setUserDetails } from "../redux/actions";

const QuizSetup = () => {
  const [name,setName] = useState("");
  const [category,setCategory] = useState(9);
  const [difficulty,setDifficulty] = useState('');
  const [number,setNumber] = useState(5)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      category: category,
      difficulty: difficulty,
      number: number
    };

    dispatch(setUserDetails(obj));
    dispatch(fetchQuestions(number,category,difficulty));

    navigate("/quiz");
  };

  return (
    <>
      <div
        style={{
          width: "600px",
          border: "1px solid grey",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontWeight: "600", fontSize: "24px" }}>Setup Your Quiz</h2>
        <form style={{}}>
          <Input type="text" placeholder="enter your name" onChange={(e)=> setName(e.target.value)} />

          <Select placeholder="Select Category" onChange={(e)=> setCategory(e.target.value)}>
            <option value={9}>General Knowledge</option>
            <option value={21}>Sports</option>
            <option value={22}>Geography</option>
          </Select>

          <Select placeholder="Select Difficulty" onChange={(e)=> setDifficulty(e.target.value)}>
            <option value={"Easy"}>Easy</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Hard"}>Hard</option>
          </Select>

          <Input type="number" placeholder="Choose number of Question" onChange={(e)=> setNumber(e.target.value)} />
          <button onClick={(e) => handleclick(e)}>Start Quiz</button>
        </form>
      </div>
    </>
  );
};

export default QuizSetup;
