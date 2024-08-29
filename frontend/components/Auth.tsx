import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpInput } from "@prashant-medium-fullstack/common";
import axios from "axios";
import { BACKEND_URL } from "./../config.ts";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });

  async function requestHandler (){
    try {
      const resposne = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        userInputs
      );
      const jwt = resposne.data;
      localStorage.setItem("token", jwt);
      navigate("/blog");
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.message);
            console.error('Config:', error.config);
            console.error('Code:', error.code);
            console.error('Response:', error.response?.data)
    }}
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              {type === "signin" ? "Login" : "Create"} an account
            </div>
            <div className="text-slate-400 text-center">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}

              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="pl-2 underline"
              >
                {type === "signin" ? "Sign Up" : "Login"}
              </Link>
            </div>
          </div>
          <div className="pt-4">
            <LabelInput
              label="Username"
              placeholder="Enter your username"
              onChange={(e) => {
                setUserInputs({ ...userInputs, name: e.target.value });
              }}
            />
            <LabelInput
              label="Email"
              placeholder="abc@gmail.com"
              onChange={(e) => {
                setUserInputs({ ...userInputs, email: e.target.value });
              }}
            />
            <LabelInput
              type="password"
              label="Password"
              placeholder="*****"
              onChange={(e) => {
                setUserInputs({ ...userInputs, password: e.target.value });
              }}
            />
            <button
            onClick={requestHandler}
              type="button"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface InputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelInput({ label, placeholder, onChange, type }: InputType) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
