# 딸기마켓

`딸기마켓`은 `Next.js`와 `GraphQL`을 기반으로 한 중고물품거래 사이트이다.
- Recoil을 사용한 Global-state 활용
- 폼 라이브러리 react-hook-form, 검증 라이브러리 yup 활용
- cache-state를 직접 업데이트하여 api호출 줄이기
- URL.createObjectURL, Promiss.all()을 활용한 이미지업로드 최적화



## 설치가이드
```bash
# CLONE REPOSITORY
git clone https://github.com/woals7480/freeboard_frontend.git

# INSTALLATION & COMPILATION
npm install -g yarn
yarn install
yarn build

# START SERVER
yarn run start

```

## 주요기능

### ⭐️ 검색기능
- Lodash의 디바운싱기능을 이용해 일정시간이 지난 후 추가적 입력이 없을때 검색이 되도록 구현하였다.
<img src="https://user-images.githubusercontent.com/94383932/241235192-12b78233-452e-49a4-8463-b51c71fb443a.gif" width="800px" />

### ⭐️ 무한스크롤
- react-infinite-scroller이라는 라이브러리를 사용하여 무한스크롤을 구현하였다.
<img src="https://user-images.githubusercontent.com/94383932/241238171-1fb34301-e84c-41b2-a12d-c66209fc7a83.gif" width="800px" />

### ⭐️ 결제기능
- 포트원 API를 이용해 결제기능을 구현하였다.
<img src="https://user-images.githubusercontent.com/94383932/241239940-cfbffb69-910e-4594-860d-83187a228988.gif" width="800px" />


### ⭐️ 카카오지도연동
- 카카오맵 API를 이용해 지도를 구현하였다.

### ⭐️ 웹에디터
- react-quill이라는 라이브러리를 사용하여 웹에디터를 구현하였다.

## 화면구성

|자유게시판|게시물등록|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/94383932/241244476-f347cd17-d2fc-4b1b-8997-45051a8d2b9c.gif" width="600px"/>|<img src="https://user-images.githubusercontent.com/94383932/241247871-09799c72-d760-4dce-aa5c-04adeb8d404e.gif" width="600px" />|
|게시물 상세|게시물수정|
|<img src="https://user-images.githubusercontent.com/94383932/241248539-31bdf434-dfa3-41c9-b033-9f518582e61d.gif" width="600px" />|<img src="https://user-images.githubusercontent.com/94383932/241249595-4a4b728c-3122-44de-91d5-456c044f5296.gif" width="600px" />|
|상품페이지|상품등록|
<img src="https://user-images.githubusercontent.com/94383932/241250290-4a26fe60-8758-4904-b1bb-95c92843b618.png" width="600px" />|<img src="https://user-images.githubusercontent.com/94383932/241250565-42497aaf-d14f-431e-a325-8913e1bcec8e.gif" width="600px" />
|상품 상세|상품수정|
<img src="https://user-images.githubusercontent.com/94383932/241250993-67cc396d-b746-4928-92fa-9adb2b1a4919.gif" width="600px" />|<img src="https://user-images.githubusercontent.com/94383932/241251228-05248178-a923-4e05-b8f8-e872913b48ce.gif" width="600px" />
|마이페이지|로그인|
<img src="https://user-images.githubusercontent.com/94383932/241252460-508886b5-11ac-4601-8b3c-1cb03741683d.gif" width="600px" />|<img src="https://user-images.githubusercontent.com/94383932/241253329-590b17a8-6922-4e07-9546-121ee8254bfe.gif" width="600px" />




## Stacks

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GraphQL](https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/apollographql-311C87?style=for-the-badge&logo=apollographql&logoColor=white)
![Ant Design](https://img.shields.io/badge/antdesign-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)
![React Hook Form](https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)

