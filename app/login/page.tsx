"use client";
import {useState} from "react";
import {supabase} from "@/lib/supabaseClient";

function LoginPage() {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const {data, error} = await supabase.auth.signInWithPassword({email: mail, password: password})

    console.log(data, error);
  }


  return (
    <div className={"p-5"}>
      <h1 className="text-2xl font-bold">Login Page</h1>
      <div className=" flex flex-col w-[200px] gap-4">

        <input className={"bg-cyan-100 text-black"} onChange={(e) => setMail(e.target.value)} type="text"/>
        <input className={"bg-cyan-100 text-black"} onChange={(e) => setPassword(e.target.value)} type="text"/>

      </div>
      <div
        onClick={login}
        className="mt-4 justify-center items-center flex py-5 w-[200px] hover:bg-green-500 hover:text-black hover:font-bold transition-all duration-300">Login
      </div>
    </div>
  );
}

export default LoginPage;