import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";


export const useLOgin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate()

  const login = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://adamsonic.herokuapp.com/api/users/login",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(json));
      // Update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
     navigate('/')
    }
  };
  return { login, isLoading, error };
};
