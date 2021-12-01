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

* 설정 후
    ```js
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true
    }
  ```


### 참고

[https://react.vlpt.us/using-typescript/01-practice.html](https://react.vlpt.us/using-typescript/01-practice.html)