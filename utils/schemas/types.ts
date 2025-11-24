import { Dispatch, HTMLInputTypeAttribute, ReactNode, SetStateAction } from "react";
import { FieldValues, Path, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export type ProIdType = { id: "add" | string };

export interface SubmitButtonType {
  text: string | ReactNode;
  icon?: ReactNode;
  className?: string;
}

export interface UserInfoType {
  _id: string;
  username: string;
  email: string;
  fName: string;
  lNamr: string;
  tel: string;
}

export interface TextInputType<TFormValues extends FieldValues = FieldValues> {
  label?: string;
  id: string;
  registerId: Path<TFormValues>;
  type: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
  icon?: ReactNode;
  name: string;
  //   register: unknown;
  required: boolean;
  register: UseFormRegister<TFormValues>;
}

export type Inputs = {
  id: string;
  required: string;
};

export interface LoginFormType {
  username: string;
  // password: string;
  chatRoomTitle: string;
}

export interface PaginationPropsType {
  onNextPage: (setDisable: Dispatch<SetStateAction<boolean>>) => void;
  onPrevPage: (setDisable: Dispatch<SetStateAction<boolean>>) => void;
  nextPageIcon: ReactNode;
  prevPageIcon: ReactNode;
}

export interface ChatMsgType {
  isSystemMsg?: boolean;
  isOwnMsg?: boolean;
  username?: string;
  msg: string;
}

export interface LoginFormType {
  room: string;
  userName: string;
}