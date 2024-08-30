# IntelliJ 에서 github 리포지토리 연동시 주의점 . . . 🪄
#### (이것때문에 1시간 삽질 했었다)

1. 원래 방법
   a. github 에서 리포지토리 생성 후 코드 복사
   b. source 폴더에 checkout
   c. intelliJ 에서 해당 폴더 열기
 2. IntelliJ 에서 github 리포지토리 연동
    a. github 에서 리포지토리 생성시 **절대로 README.md 생성하면 안됨**
    b. IntelliJ 터미널에서 Git 초기화 하기
      ``` git init```
    c.  IntelliJ 터미널에서 변경 사항 추가 및 커밋하기
      ``` git add .
         git commit -m "Initial commit"```
    d. IntelliJ 터미널에서 Github 저장소 연결 및 푸시하기
       ``` git remote add origin https://github.com/username/repository-name.git```
    e. IntelliJ 터미널에서 Github 로 푸시하기
       ``` git push -u origin main```

### 1. 리포지토리 생성시 README.md 생성하지 않기
#### 깃허브 리포지토리에서 README.md 를 생성해버리면, 이미 커밋이 되어 branch 가 생성이 된 것이므로
#### 똑같은 origin main 이지만 (non - fast-foward) 에러가 발생함
``` ! [rejected]        main -> main (non-fast-forward) ```
#### 반드시 README.md 생성 없이 리포지토리 생성하기.

### 2. master 가 아닌 main 으로 푸시하기




