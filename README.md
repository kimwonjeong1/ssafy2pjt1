# Sub-PJT3 `냉장고를 Vue 탁해`

## :smiley: 프로젝트 소개 

### 프로젝트 이름

<img src="https://user-images.githubusercontent.com/60081201/88865312-83417100-d242-11ea-9cc2-c83c84303b21.png" alt="logo png" style="zoom:50%;" />

### 프로젝트 소개

`냉장고를 Vue탁해 프로젝트`는 **사용자가 등록한 재료를 활용하여 맞춤 레시피를 제공하는 웹 블로그**입니다.

핵심 기능은 다음과 같습니다.

- 사용자가 자신의 냉장고 재료들을 등록하면 재료 데이터를 기반으로 맞춤 레시피를 제공합니다.
- 자신만의 요리 레시피 글을 작성할 때 `냉장고를 vue탁해`에서 제공하는 에디터를 통해 쉽고 즐겁게 등록할 수 있습니다.



### 주요 기술 스택

<img src="https://img.shields.io/badge/platform-Web-yellow" alt="기술스택" style="zoom:120%;" /><img src="https://img.shields.io/badge/Frontend-Vue.js, css/html/JavaScript, vuetify, BoostrapVue-green" alt="기술스택" style="zoom:120%;" /><img src="https://img.shields.io/badge/database-MySQL, mariaDB-yellowgreen" alt="기술스택" style="zoom:120%;" /><img src="https://img.shields.io/badge/backend-Springboot, swagger-ff69b4" alt="기술스택" style="zoom:120%;" /><img src="https://img.shields.io/badge/server-AWS-9cf" alt="기술스택" style="zoom:120%;" /><img src="https://img.shields.io/badge/language-Java, JavaScript, Python-important" alt="기술스택" style="zoom:120%;" /><img src="https://img.shields.io/badge/OS-Ubuntu 18.04-blueviolet" alt="기술스택" style="zoom:120%;" /> <img src="https://img.shields.io/badge/WAS-Tomcat-lightgray" alt="기술스택" style="zoom:120%;" />

#### 기술 특이점

- JWT를 이용한 로그인 인증
- Firebase Storage 이미지 업로드 
- Kakao 공유 기능 
- 식품의약품안전처에서 제공하는 "조리식품의 레시피 DB" 데이터 활용
- 드래그앤드롭을 활용한 글 작성 기능



## :key: 프로젝트 사용법

### 로컬 웹 서버 실행 방법

#### Frontend

```bash
cd frontvuetakhae
yarn install
yarn serve
```

#### Backend

```bash
cd ~/app/backend/
./run.sh start
```



#### Brower Support

호환 브라우저는 다음과 같습니다.

| chrome<br /><img src="https://user-images.githubusercontent.com/60081201/88929957-cab51500-d2b5-11ea-98aa-013452b4eec4.PNG" alt="chrome" style="zoom: 33%;" /> | firefox<br /><img src="https://user-images.githubusercontent.com/60081201/88929960-cbe64200-d2b5-11ea-8399-c54eac3ea214.PNG" alt="firefox" style="zoom:33%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                            Latest                            |                            Latest                            |



## :clipboard: 서비스 설명

### 파일 목록



### 파일 정보



### 페이지/기능 소개

#### 홈 화면

사진추가

- 제목 또는 작성자를 기준으로 검색창을 통해 게시글 검색이 가능합니다.

- 조회수가 높은 것을 기준으로 보여주는 인기순과 최근 작성된 레시피들을 보여주는 최신순을 선택하여 게시글을 볼 수 있습니다.

- 게시글에 즐겨찾기 기능을 통해 마이페이지에서 모아볼 수 있습니다.

- 1000개 이상의 레시피가 준비되어 있으며 무한 스크롤 기능을 통해 끊임없이 레시피를 제공합니다.

  - 1000개의 데이터는 식품의약품안전처에서 제공하는 조리식품의 레시피 DB입니다.

    > https://www.foodsafetykorea.go.kr/apiMain.do

- 우측 하단의 화살표 버튼을 통해 화면 위로 바로 올라갈 수 있습니다.

#### 냉장고를 Vue탁해 화면

사진추가

- 사용자가 마이페이지에서 저장한 냉장고의 재료 정보를 기준으로 레시피를 제공합니다.
- 냉장고에 있는 재료 외에 추가, 삭제가 가능하며 변화에 따라 레시피를 제공합니다.

#### Recipe 작성하기 화면

사진추가

- 재료 입력 단계, 요리 과정 입력 단계, 난이도 & 소요시간 입력 단계, 후기 작성 단계로 총 4단계로 되어있습니다.

  1. `재료` 입력 단계

     나의 냉장고 재료를 드래그앤드롭으로 손쉽게 입력 가능하며 입력창을 통해 추가할 수 있습니다.

  2. `요리 과정` 입력 단계

     요리 과정 순서를 드래그앤드롭으로 손쉽게 변경 가능합니다.

     하나의 요리 단계 과정을 입력하면 타입(재료 손질, 요리 준비)과 해시태그, 사진을 추가할 수 있습니다.

  3. `난이도 & 소요시간` 입력 단계

     난이도는 별 5개를 기준으로 별이 많을 수록 난이도가 높음을 의미합니다.

     소요시간은 시간을 기준으로 작성됩니다.

  4. `후기 작성` 단계

     요리를 하면서 느꼈던 소감이나 꿀팁을 작성하는 공간입니다.

     썸네일 사진을 추가할 수 있습니다.

#### 게시물 화면

사진추가

- 쉬워요 어려워요를 클릭하여 작성자가 아닌 사용자들이 체감 난이도를 나타낼 수 있습니다.
- 자신이 작성한 게시물인 경우 수정과 삭제가 가능합니다.
- 작성자의 이름을 클릭하면 작성자의 마이페이지로 이동가능합니다.
- 댓글 작성 부분을 통해 소통이 가능합니다.

#### 마이페이지 화면

사진추가

- 팔로우와 팔로잉 조회가 가능하며 다른 사람의 마이페이지에서는 팔로우 등록이 가능합니다.
- 자기소개 작성이 가능하고 프로필 사진을 업로드할 수 있습니다.
- 나의 냉장고에 재료를 추가하여 저장할 수 있습니다.
- 즐겨찾기한 레시피의 목록과 내가 작성한 레시피의 목록을 볼 수 있습니다.
- 개인 정보 수정이 가능한 페이지입니다.

#### 공지사항 화면

사진추가

- 웹 블로그 이용자들에게 사이트 이용에 있어서 개선된 점을 공유하는 공간입니다.



## Contributing

### 오픈 소스라면? 

### Pull Request Process 

무슨 설치가 필요한지

### 기타 개발 규칙들



## License 



## 기타

### 브랜치전략

- 저희 팀의 브랜치 전략은 **기능별로** 나누는 것입니다. 브랜치 이름은 앞부분에는 front, back을 명시하고 개발할 기능을 뒤에 작성하여 만들었습니다.

  - 예시 형태
    - front/{Front 의 담당 기능}
      - ex) front/signin
    - back/{BackEnd의 담당 기능}

### :calendar: ​ 개발일정



### :school: ​팀원소개 & 소감

<img src="https://user-images.githubusercontent.com/60081201/88927797-ecf96380-d2b2-11ea-8347-550fe89453cb.PNG" alt="전자파컴공레인저표지" style="zoom: 33%;" />



### 프로젝트 아키텍처 





### 알려진 버그





### :honey_pot: 프로젝트를 통해 얻은 꿀팁

- 백엔드에서 `,` 꼭 있어야 했던거 이거 내용 추가

- 글씨체때문에 비밀번호 안떴던거

- vuetify 앱 뷰에서 v-app으로 고쳐야하는 거s

- api 신청시

  - 신청 API : 

    ![image-20200810131554473](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20200810131554473.png)





### :pushpin: 유용한 사이트 정리 

- 뱃지를 커스터마이징하여 기술스택 표현하는 사이트

  > https://shields.io/
  >
  > - https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
  >
  >   다음과 같이 LABEL, MESSAGE, COLOR 순서로 입력하면 된다.

- ERD 작성하는 사이트

  > https://www.erdcloud.com/
  >
  > - 팀으로 생성하면 ERD 수정, 공유 가능하다.

- 무료 이미지
  
> https://photo-ac.com/en
  
- 무료 글씨체 `눈누`

  > https://noonnu.cc/