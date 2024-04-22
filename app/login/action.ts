"use server";

import { redirect } from "next/navigation";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  redirect("/");
  return {
    errors: ["비밀번호가 틀렸다", "비밀번호가 짧다"],
  };
}
