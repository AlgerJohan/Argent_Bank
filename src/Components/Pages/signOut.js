// import { useDispatch } from "react-redux";
// import { setSignInData } from "../../features/signInSlice";

const SignOut = () => {
  //   const dispatch = useDispatch();

  //   dispatch(setSignInData({ data: {} }));

  localStorage.clear();
  window.location.href = "/signIn";
};

export default SignOut;
