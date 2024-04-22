"use client";

import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          required
          type="text"
          placeholder="Username"
        />
        <FormInput name="email" required type="email" placeholder="Email" />
        <FormInput
          name="password"
          required
          type="password"
          placeholder="Password"
        />
        <FormInput
          name="confirm_password"
          required
          type="password"
          placeholder="Confirm Password"
        />
        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
