import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal
          open={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>{`게시글 ${props.isEdit ? "수정" : "등록"}`}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              value={
                (props.zipcode ||
                  props.data?.fetchBoard.boardAddress?.zipcode) ??
                ""
              }
              readOnly
            />
            <S.SearchButton onClick={props.onToggleModal}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address
            value={
              (props.address || props.data?.fetchBoard.boardAddress?.address) ??
              ""
            }
            readOnly
          />
          <S.Address
            onChange={props.onChangeAddressDetail}
            placeholder="상세주소를 입력해주세요."
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.Images>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                onChangeFileUrls={props.onChangeFileUrls}
                fileUrl={el}
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
          <S.SubmitButton
            isActive={props.isEdit ? true : props.isActive}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
