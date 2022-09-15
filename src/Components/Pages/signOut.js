// import { useDispatch } from "react-redux";
import { setSignOut } from "../../features/signInSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

/**
 * SignOut is a function that uses the useNavigate and useDispatch hooks to dispatch the setSignOut
 * action and navigate to the signIn page.
 */
const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSignOut());
    navigate("/signIn");
  }, [dispatch, navigate]);
};

export default SignOut;
