import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>{`게시글 ${props.isEdit ? "수정" : "등록"}`}</S.Title>
        <S.WriterForm
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickSubmit)
          }
        >
          {props.isOpen && (
            <S.AddressModal
              open={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
            >
              <S.AddressSearchInput
                onComplete={props.onCompleteaddressDetailSearch}
              />
            </S.AddressModal>
          )}
          <S.WriterWrapper>
            <S.InputWrapper>
              <S.Label>작성자</S.Label>
              <S.Writer
                type="text"
                placeholder="이름을 적어주세요."
                {...props.register("writer")}
                readOnly={!!props.data?.fetchBoard.writer}
              />
              <S.Error>{props.formState.errors.writer?.message}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...props.register("password")}
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.InputWrapper>
          </S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>제목</S.Label>
            <S.Subject
              type="text"
              placeholder="제목을 작성해주세요."
              {...props.register("title")}
            />
            <S.Error>{props.formState.errors.title?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>내용</S.Label>
            <S.Contents
              placeholder="내용을 작성해주세요."
              {...props.register("contents")}
            />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrapper>
              <S.Zipcode
                placeholder="07250"
                {...props.register("zipcode")}
                readOnly
              />
              <S.SearchButton onClick={props.onToggleModal} type="button">
                우편번호 검색
              </S.SearchButton>
            </S.ZipcodeWrapper>
            <S.Address {...props.register("address")} readOnly />
            <S.Address
              placeholder="상세주소를 입력해주세요."
              {...props.register("addressDetail")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>유튜브</S.Label>
            <S.Youtube
              type="text"
              placeholder="링크를 복사해주세요."
              {...props.register("youtubeUrl")}
            />
          </S.InputWrapper>
          <S.ImageWrapper>
            <S.Label>사진첨부</S.Label>
            <S.Images>
              {props.imageUrls.map((el, index) => (
                <Uploads02
                  key={uuidv4()}
                  index={index}
                  imageUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.Images>
          </S.ImageWrapper>
          <S.OptionWrapper>
            <S.Label>메인설정</S.Label>
            <S.RadioButton type="radio" id="youtube" name="radio-button" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.RadioButton type="radio" id="image" name="radio-button" />
            <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
          </S.OptionWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton>
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitButton>
          </S.ButtonWrapper>
        </S.WriterForm>
      </S.Wrapper>
    </>
  );
}
