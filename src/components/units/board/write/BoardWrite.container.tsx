import { useState } from "react";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  CREATE_BOARD,
  FETCH_BOARDS,
  UPDATE_BOARD,
  UPLOAD_FILE,
} from "./BoardWrite.queries";
import { IBoardWriteProps, IFormData } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주요."),
  contents: yup.string().required("내용을 입력해주요."),
});

export default function BoardWrite(props: IBoardWriteProps) {
  const client = useApolloClient();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [imageUrls, setImageUrls] = useState([
    props.data?.fetchBoard.images ? props.data.fetchBoard.images[0] : "",
    props.data?.fetchBoard.images ? props.data.fetchBoard.images[1] : "",
    props.data?.fetchBoard.images ? props.data.fetchBoard.images[2] : "",
  ]);
  const [files, setFiles] = useState<File[]>([]);
  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      writer: props.data?.fetchBoard.writer ?? "",
      title: props.data?.fetchBoard.title ?? "",
      contents: props.data?.fetchBoard.contents ?? "",
      youtubeUrl: props.data?.fetchBoard.youtubeUrl ?? "",
      zipcode: props.data?.fetchBoard.boardAddress?.zipcode ?? "",
      address: props.data?.fetchBoard.boardAddress?.address ?? "",
      addressDetail: props.data?.fetchBoard.boardAddress?.addressDetail ?? "",
      password: "",
    },
  });

  const onChangeFileUrls = (fileUrl: string, file: File, index: number) => {
    const tempUrls = [...imageUrls];
    tempUrls[index] = fileUrl;
    setImageUrls(tempUrls);

    const tempFiles = [...files];
    tempFiles[index] = file;
    setFiles([...tempFiles]);
  };

  const onClickSubmit = async (data: IFormData) => {
    const results = Promise.all(
      files.map(
        async (el) =>
          el &&
          (await client.mutate<
            Pick<IMutation, "uploadFile">,
            IMutationUploadFileArgs
          >({
            mutation: UPLOAD_FILE,
            variables: { file: el },
          }))
      )
    );

    const resultUrls = (await results).map((el) =>
      el.data ? el.data.uploadFile.url : ""
    );
    try {
      await client.mutate<
        Pick<IMutation, "createBoard">,
        IMutationCreateBoardArgs
      >({
        mutation: CREATE_BOARD,
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            images: resultUrls,
          },
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      Modal.success({ content: "게시판등록에 성공하셨습니다." });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickUpdate = async (data: IFormData) => {
    const results = await Promise.all(
      files.map(
        async (el) =>
          el &&
          (await client.mutate<
            Pick<IMutation, "uploadFile">,
            IMutationUploadFileArgs
          >({
            mutation: UPLOAD_FILE,
            variables: { file: el },
          }))
      )
    );

    const resultUrls: Array<string | undefined> = props.data?.fetchBoard.images
      ? [...props.data?.fetchBoard.images]
      : [];

    results.forEach(
      (el, index) =>
        (resultUrls[index] = el ? el.data?.uploadFile.url : resultUrls[index])
    );
    try {
      await client.mutate<
        Pick<IMutation, "updateBoard">,
        IMutationUpdateBoardArgs
      >({
        mutation: UPDATE_BOARD,
        variables: {
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
            },
            images: resultUrls.map((el) => (el === undefined ? "" : el)),
          },
          password: data.password,
          boardId: String(router.query.boardId),
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      Modal.success({ content: "게시판수정에 성공하셨습니다." });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteaddressDetailSearch = (data: Address) => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
    onToggleModal();
  };

  return (
    <BoardWriteUI
      onCompleteaddressDetailSearch={onCompleteaddressDetailSearch}
      onToggleModal={onToggleModal}
      isEdit={props.isEdit}
      isOpen={isOpen}
      imageUrls={imageUrls}
      onChangeFileUrls={onChangeFileUrls}
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}
