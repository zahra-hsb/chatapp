import { TextInputType } from "@/utils/schemas/types";

const TextInput = ({
  label,
  id,
  type,
  className,
  placeholder,
  dir,
  icon,
  register,
  // name,
  required
}: TextInputType) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="w-full relative">
        <label htmlFor={id}>{label}</label>
        {icon}
        <input
          type={type}
          dir={dir}
          className={`border-b p-2 rounded- placeholder:text-gray-500 outline-0 px-3 focus:shadow-lg w-full shadow-sm ${className} ${icon ? 'pl-12' : ''}`}
          placeholder={placeholder}
          id={id}
          // name={name}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};

export default TextInput;
