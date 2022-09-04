import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { setUser } from "../../../features/signInSlice";

const EditProfil = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const token = useSelector((state) => state.signIn.token);
  useEffect(() => {
    axios
      .put(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            firstName: e.target[0].value,
            lastName: e.target[1].value,
          }),
        }
      )
      .then((res) => {
        dispatch(setUser(res.data.body));
      })
      .catch((err) => {
        //   navigate("/signIn");
        console.error(err.response.data.message);
      });
  }, [dispatch, token, e]);
};
export default EditProfil;
