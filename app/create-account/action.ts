"use server";
import { z } from "zod";

// 데이터 조건 설정
const usernameSchema = z.string().min(5).max(10);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  usernameSchema.parse(data.username);
}
