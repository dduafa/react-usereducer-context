import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useAuthValues = () => useContext(AuthContext)