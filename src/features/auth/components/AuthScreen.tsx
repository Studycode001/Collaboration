"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";

const AuthScreen = () => {
    const [state,setState] = useState<SignInFlow>("signIn")
  return (
    <div className="h-full w-full flex items-center justify-center bg-green-500">
        <div className="md:h-auto md:w-[420px]">
          {state=="signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
        </div>
    </div>
  )
}

export default AuthScreen