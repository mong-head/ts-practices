# typescript practice


### 설정
```powershell
# init(package.json)
npm init -y

# typescript 설치
npm install -g typescript

# ts설정 -> tsconfig.json 생성됨
tsc --init
```
* tsconfig.json 추가 설정
    ```json
    {
        ...
        "outDir": "./dist",
        ...
    }
    ```
    * outDir : ```tsc``` 후 설정한 폴더 밑에 js 생김

### 실행
```powershell
# typescript compile - tsconfig.json 정보대로
tsc
```



### 참고

[https://react.vlpt.us/using-typescript/01-practice.html](https://react.vlpt.us/using-typescript/01-practice.html)