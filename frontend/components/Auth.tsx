import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="m-4">
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-400 text-center">
            Already have an account?
            <Link to={"/signin"} className="pl-2 underline">
              Login
            </Link>
          </div>
        <LabelInput label="Username" placeholder="Enter your username" onChange={(e)=>{}}/>
        <LabelInput label="Email" placeholder="abc@gmail.com" onChange={(e)=>{}}/>
        <LabelInput label="Password" placeholder="*****" onChange={(e)=>{}}/>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface InputType {
  label: string;
  placeholder: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({ label, placeholder, onChange }: InputType) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
