import { InputHTMLAttributes } from "react";

interface Props {
  // InputHTMLAttributes<HTMLInputElement> 에 type, placeholder, required 가 포함되어 있으니 삭제
  // type: string;
  // placeholder: string;
  // required: boolean;
  // name은 필수 항목이기 때문에 남겨둠
  name: string;
  errors?: string[];
}
export default function FormInput({
  // type,
  // placeholder,
  // required,
  name,
  errors = [],
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none transition ring-1 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-400 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
