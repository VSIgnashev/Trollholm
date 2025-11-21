"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import {supabase} from "@/lib/supabaseClient";
import type {Session} from "@supabase/supabase-js";

function HeaderNickname() {

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {

    supabase.auth.getSession().then(({data}) => {
      setSession(data.session)
    })

    const {data: listener} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      listener.subscription.unsubscribe()
    }

  }, [])


  return <div className="">
    <Link href={"/login"}>
      <div
        className="h-full text-black font-bold  p-2 border-l-2 border-solid border-blue-300 flex items-center justify-center px-10 "> {session ? session.user.email : "Login"}
      </div>
    </Link>
  </div>
}

export default HeaderNickname