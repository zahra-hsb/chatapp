


const ChatMessage = ({
    isSystemMsg,
    isOwnMsg,
    username,
    msg
}: {
    isSystemMsg?: boolean;
    isOwnMsg?: boolean;
    username?: string;
    msg: string;
}) => {
    return (
        <>
            <div className={`${isSystemMsg ? "items-center" : isOwnMsg ? "items-start" : "items-end"} w-full flex flex-col justify-center mb-3`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${isSystemMsg
                    ? ""
                    : isOwnMsg
                        ? "bg-gray-500"
                        : "border dark:text-white"
                    }`}>
                    {!isSystemMsg && !isOwnMsg ? <p className="text-xs">{username}</p> : isOwnMsg ? <p className="text-xs">you</p> : ""}
                    <p className="text-base">{msg}</p>
                </div>
            </div>
        </>
    )
}

export default ChatMessage;