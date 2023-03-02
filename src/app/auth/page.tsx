"use client";
import { useState, useEffect } from "react";

const OpenEye = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ClosedEye = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

const AuthPage = () => {
  const [formState, formStateSet] = useState({ userName: "", password: "" });
  const [isFormStateValid, isFormStateValidSet] = useState({
    userName: { isError: false, errorMessage: "" },
    password: { isError: false, errorMessage: "" },
  });
  const [isPasswordVisible, isPasswordVisibleSet] = useState(false);

  useEffect(() => {
    if (isPasswordVisible) {
      setTimeout(() => {
        isPasswordVisibleSet(false);
      }, 1000);
    }
  }, [isPasswordVisible]);

  const handleChange = ({ target }: { target: EventTarget }) => {
    const { id, value } = target as HTMLInputElement;
    formStateSet({ ...formState, [id]: value });
    isFormStateValidSet({
      ...isFormStateValid,
      password: { isError: false, errorMessage: "" },
      userName: { isError: false, errorMessage: "" },
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    isFormStateValidSet({
      ...isFormStateValid,
      password: { isError: false, errorMessage: "" },
      userName: { isError: true, errorMessage: "Usuario no reconocido" },
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <form
        className="w-full my-24 max-w-sm border rounded p-4 flex flex-col items-center gap-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="font-bold text-xl">Inicia Sesion</h1>
        <label htmlFor="userName" className="flex flex-col items-start w-full">
          Usuario
          <input
            required
            onChange={handleChange}
            type="text"
            id="userName"
            className={`w-full border rounded p-2
             ${
               isFormStateValid["userName"].isError
                 ? "border-pink-600"
                 : "border-black"
             }`}
            value={formState["userName"]}
          />
          {isFormStateValid["userName"].isError && (
            <span className="text-xs font-semibold lowercase text-red-600">
              {isFormStateValid["userName"].errorMessage}
            </span>
          )}
        </label>
        <label
          htmlFor="password"
          className="flex flex-col items-start w-full relative"
        >
          Contraseña
          <input
            required
            onChange={handleChange}
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            className={`w-full border rounded  p-2 pr-12
             ${
               isFormStateValid["password"].isError
                 ? "border-pink-600"
                 : "border-black"
             }`}
            value={formState["password"]}
          />
          <input
            type="checkbox"
            checked={isPasswordVisible}
            onChange={(e) => {
              isPasswordVisibleSet(!isPasswordVisible);
            }}
            name=""
            id=""
            className="appearance-none
              rounded-r cursor-pointer
              h-10 w-12 absolute bottom-px right-px
              border-l border-gray-300
              bg-transparent z-20"
          />
          <div
            className="rounded-r
              h-10 w-12 absolute bottom-px right-px
              bg-transparent
              checked:bg-blue-400 z-10 flex justify-center items-center"
          >
            {isPasswordVisible ? <OpenEye /> : <ClosedEye />}
          </div>
          {isFormStateValid["password"].isError && (
            <span className="text-xs font-semibold lowercase text-red-600">
              {isFormStateValid["password"].errorMessage}
            </span>
          )}
        </label>
        <button type="submit" className="border px-4 py-2 rounded">
          Inicia Sesión
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
