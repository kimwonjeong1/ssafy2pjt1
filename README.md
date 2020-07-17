# Sub PJT 1

### [웹 개념] 웹 서버 `tier` (일반)

**웹 환경 구성**

Web server ↔ Web Application Server ↔ Database

- **Web server** :  `정적` (ex. 주문을 받는 일)
  - Nginx, Apache, ...
- **Web Application Server** : `동적`, 요청해서 응답으로 받은 것을 의미있게 만드는 일
  - WAS [Tomcat, JBoss 등], WSGI [Python 군], CGI [C, PHP, ...]
- **Database**
  - Mysql, Oracle, 몽고DB, ...

: Sub-PJT1에서 WAS의 기능을 하는 Spring은 db와의 연결이 필요함을 잊지말자.



## 0. 프로젝트 이해 및 프로젝트 개발 환경 준비

### Sub PJT 1 이란?

- 스켈레톤 프로젝트를 바탕으로 SPA의 기본 틀을 구현한다.

  - 스켈레톤 프로젝트

    로그인/회원가입 코드와 Database Dump 파일을 제공

  - SPA을 구현하기 위한 프레임워크 : `Vue.js`

### Getting started

**프로젝트 개발 환경 구성하기** 

1. NPM 설치하기

   개발 환경을 잘 관리하기 위해서 설치해야한다.

2. Yarn 설치하기

3. Vue.js, Vue-cli 설치하기

   - 설치 후 프로젝트를 생성하여 잘 작동되는 지 확인한다.

     ```bash
     vue create {생성할 프로젝트 이름}
     ```

     - Please pick a preset : default (babel, eslint) => babel 선택
     - Use NPM 으로 선택

4. OpenJDK 설치하기

   -  JDK : 자바 컴파일러
   - openJDK : 서버 운영할 때 사용

   명령창에 `java -version`를 입력하여 설치를 확인한다.

   ```bash
   java -version
   openjdk version "1.8.0_192"
   OpenJDK Runtime Environment (Zulu 8.33.0.1-win64) (build 1.8.0_192-b01)
   OpenJDK 64-Bit Server VM (Zulu 8.33.0.1-win64) (build 25.192-b01, mixed mode)
   ```

5. Maven 설치하기

   - LINK 에 있는 바이너리 집으로 다운받는다.

   - 압축을 푼 뒤 주소를 복사한다.

   - 제어판/ 시스템 및 보안/ 시스템/ 고급 시스템 설정/ 환경 변수

     1. 시스템 변수에 새로 만들기를 클릭하여 다음을 입력한다.

        변수 이름 : MAVEN_HOME

        변수 값 : 복사한 주소 붙이기

     2. 시스템 변수에서 Path 클릭하여 새로 작성하기에 `%MAVEN_HOME%/bin`을 추가한다.
     
     - 환경변수?
     
       명령 프롬프트에 dir을 입력하면 환경변수를 등록한 것들이 알아서 불러온다. 현재디렉토리를 보고 없으면 환경변수를 찾는다.

6. VS Code 설치한다.

   - 플러그인에서 `Spring Boot Extension Pack`을 설치한다.



## 1. Frontend 스켈레톤 설정

- front 서버 키기 위한 코드

  ```bash
  $ yarn serve
  ```

- Spring의 기본 포트가 8080이기에 Vue.js의 기본 포트와 같아진다. => 다른 포트 번호를 지정해야한다.

  ```bash
  $ yarn serve --port 3000 
  ```

## 2. Docker 설치 및 설정

- 컨테이너에는 저장이 안된다.

```dockerfile
# [명령 프롬프트] 명령어 정리

> Docker -v
> docker run --name maria-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD={password} -d mariadb 
# -d : detached mode로  Contatiner가 백그라운드로 실행되도록
> docker images

> docker pull mariadb # [참고] mariadb image 다운로드

> docker ps # 실행 여부 알 수 있음.
> docker ps -all # 설정을 다 볼 수 있음.

> docker kill {container 아이디} # 실행 멈추기
> docker start {container 아이디} # 다시 작동시키기 위해서

> docker exec -it maria-db mysql -u root -p # MariaDB 실행하기
Enter password :

MariaDB [(none)]> create database ssafy_sk; # db 만들기
MariaDB [(none)]> use ssafy_sk;
MariaDB [ssafy_sk]> {backend에 작성되어 있는 ssafy_sk.sql에 있는 `user` Table 붙이기}
MariaDB [ssafy_sk]> desc user;
MariaDB [ssafy_sk]> INSERT INTO user values('ssafy', 'ssafy', 'pwssafy', now()); # 로그인 기능 확인을 위해 db 생성
```

## 3. Backend 스켈레톤 설정

### Spring

- backend/src/main/`WebBlogApplication.java` 가 메인 코드이다.

- 일반적으로 spring은 apache라는 웹이 있으면 코드를 줘서 실행된다.

  - 하지만 이 spring boot 자체의 서버를 띄워서 한다.

  - 설정을 해주는 것 중에 하나가 `application properties` 이다.

    - 여기서 설정할 것을 적어주면 된다! `설정할 것 => url`

      파일을 만들어주지만 비어있다


- config /`SwaggerConfig.java` : 중간중간 확인하고 싶을 때 rest 에 볼 수 있도록 설정하는 자바 파일이다.
- dao & dto
  - 객체 관리할 때 dto => 선언은 dto
  - dao : 객체랑 db를 연결하여 가져온다, 서비스 관련
  - dao : orm이랑 비슷한 개념, 객체로 만들기 위해 이메일, 패스워드를 준다
    - data access object 파일 : 데이터를 접근하도록
    - 유저 관리 

- backend 실행하기 위한 코드

  ```powershell
  ...\backend> .\mvnw spring-boot:run
  ```

  - [주의] `Docker` db와 연결되어 있어야한다.

- java에서 `interface` 역할

  - 결합도 ↓
  - 코드의 유지보수
  - 재사용을 높이기 위해서

### swagger 

- postman과 같이 db를 바로 넣을 수 있고 확인 가능하다.

- 실행하는 방법

  `주소/swagger-ui.html` 로 입력하면 들어갈 수 있다.

  ```markdown
  예시
  http://localhost:8080/swagger-ui.html
  ```

  

## 명세 요건 진척률 (%)

#### Req 1. Frontend 스켈레톤 설정

| Req 1.                     | 진척률(%) |
| :------------------------- | :-------: |
| 1-1 Frontend 스켈레톤 설정 |    100    |
| 1-2 개발 환경 설정         |    100    |
| 1-3 스켈레톤 프로젝트 실행 |    100    |

#### Req 2. Docker 설치 & Maria DB 프로세스

| Req 2. 기능 상세                                             | 진척률(%) |
| ------------------------------------------------------------ | :-------: |
| Docker 설치<br/>MariaDB 이미지를 pull<br/>MariaDB 컨테이너 실행 |    100    |

#### Req 3. DB 논리모델 및 물리모델 문서

| Req 3. 기능상세                                          | 진척률(%) |
| -------------------------------------------------------- | :-------: |
| 전체 서비스를 구성하는 논리 모델 작성<br />물리모델 구성 |    100    |



![KakaoTalk_20200716_161337072](C:\Users\multicampus\Desktop\firstproject\s03p11a314\KakaoTalk_20200716_161337072.png)





#### Req 4. 회원 관리

| Req 4.         | 진척률(%) |
| -------------- | :-------: |
| 회원 가입      |    100    |
| 회원 가입 완료 |    100    |
| 회원 정보 설정 |    100    |
| 탈퇴하기       |    100    |

#### Req 5. 이메일 인증

| Req 5. 기능상세                                              | 진척률(%) |
| ------------------------------------------------------------ | :-------: |
| 회원가입 완료 시 인증 이메일 발송<br/>메일 발송은 웹메일의 SMTP 서비스를 이용<br/>메일 발송 성공 및 실패 시 메시지 출력 |    100    |

#### Req 6. 로그인 및 로그아웃 기능

| Req 6.   | 진척률(%) |
| -------- | :-------: |
| 로그인   |    100    |
| 로그아웃 |    100    |

#### Req 7. Page Not Found 페이지

| Req 7. 기능상세                                              | 진척률(%) |
| ------------------------------------------------------------ | :-------: |
| 존재하지 않는 URL 요청 시 Page Not Found 페이지로 이동되도록 구현 |    100    |

#### Req 8. Error 페이지

| Req 8. 기능상세                                              | 진척률(%) |
| ------------------------------------------------------------ | :-------: |
| 웹 페이지에 오류가 발생하는 경우 Error 페이지로 이동되도록 구현<br/>백엔드의 경우도 Http Request Status 에 맞춰 Error 요청 구현 |    100    |

#### Req 9. 기능 테스트

| Req 9.               | 진척률 (%) |
| -------------------- | :--------: |
| 테스트 시나리오 작성 |    100     |
| 테스트 수행          |    100     |



## 어려웠던 점

~~

#### 주로 frontend 역할을 맡음

#### 로그인/로그아웃 기능

- ###### login 여부에 따른 분기처리를 위해 기준을 잡을려고 했지만 Token 또는 cookie를 받기에 어려움이 있어서 로그인시 넘어오는 각자의 uid로 로그인과 로그아웃을 분기하였음

#### 프로필

- ###### img 파일 넣는 것이 어려움..

#### 회원가입

- ###### 데이터를 spring과 연동시키는 과정에서 axios이용 및 get,post 형식의 데이터 전송에 대해 어려움이 있었지만 swagger를 통해 좀 더 쉽게 이해할 수 있었음 