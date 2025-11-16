import { SubmitButtonType } from "@/utils/schemas/types"

const SubmitButton = ({ text }: SubmitButtonType) => {
    return (
        <>
            <button type="submit" className="text-white w-12 items-center! justify-center! mt-0! bg-black p-2 w- rounded-xl cursor-pointer border! w-full dark:border-white! hover:bg-black/80 duration-150 active:bg-white shadow border-black active:text-black active:border-2">
                {text}
            </button>
        </>
    )
}

export default SubmitButton