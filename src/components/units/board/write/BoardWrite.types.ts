import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

import { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  onCompleteaddressDetailSearch: (data: Address) => void;
  isEdit: boolean;
  isOpen: boolean;
  onToggleModal: () => void;
  imageUrls: string[];
  onChangeFileUrls: (fileUrl: string, file: File, index: number) => void;
  data?: Pick<IQuery, "fetchBoard">;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  formState: FormState<IFormData>;
  onClickSubmit: (data: IFormData) => void;
  onClickUpdate: (data: IFormData) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IFormData {
  writer: string;
  title: string;
  contents: string;
  youtubeUrl?: string;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  password?: string;
}
