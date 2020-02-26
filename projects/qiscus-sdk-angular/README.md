# Qiscus Sdk Angular - An easy to use chat sdk

## **ABOUT**

A library that allows you implement qiscus into your angular applications. It abstract away all the painstaking setup you would need do if you were to implement the raw Sdk

## **IMPLENTATION**

### **Step 1**

**GET YOUR APP ID:**

Since this uses Core Qiscus SDK, You will need to get your application id from qiscus before you can actually use it in your application. That can be gotten from [Qiscus Chat Dashboard](https://dashboard.qiscus.com/dashboard/login)

### **Step 2**

### **Installation:**

#### For Npm users

```bash
    npm install --save qiscus-sdk-angular
```

#### For Yarn users

```bash
    yarn add qiscus-sdk-angular
```

### **Step 3**

### **Configuration:**

This library exposes a singleton service through which all methods and properties accessible. you need to import the service into your angular application and use it like you would use a normal service.

#### a. **Import it into your application**

```ts
import { Injectable } from '@angular/core';
import { QiscusSdkAngularService } from 'qiscus-sdk-angular';
  @Injectable({
    providedIn: 'root'
  })
```

#### b. **Initialize it**

```ts
export class YourService {
    constructor(private qiscusService: QiscusSdkAngularService) {
        //  You need to initialize it in your application
        this.qiscusService.initialize(APPID, options);
    }
    //  Define Your own service
    logQiscusLogger() {
        this.qiscusService.logger();
    }
}
```

### Note: **Parameters for Initialization**

**AppID**: This is your application id which is gotten from qiscus after registration on the platform

**options**: this is an object of different callback ranging from new message call back to message read call back. A full list of items to be passed can be found [here]()

## **HOW TO USE**

### **Authentication**

Initialization is just to make qiscus aware of which registered company is using their sdk, After intialization, before you can send or receive messages, either one-to-one or in groups, you need to authenticate the current user.

Authentication can be done in two part either on the client side or on the server side.

#### Client Side Authentication

```ts
import { Injectable } from '@angular/core';
import { QiscusSdkAngularService } from 'qiscus-sdk-angular';

@Injectable({
    providedIn: 'root'
})
export class YourService {
    constructor(private qiscusService: QiscusSdkAngularService) {
        //  Initialization
        this.qiscusService.initialize(APPID, options);

        //  Authenticate current user
        this.qiscusService.setUser('userId', 'uniqueKey', 'displayName', 'https://someurl.com/avatar.png', {}).subscribe(
            function(authData) {
                // On success
            },
            function(error) {
                //  On error
            }
        );
    }

    //  Define Your own Service
}
```

**Where**

-   **userId** (string, unique): A user identifier that will be used to identify a user and used whenever another user need to chat with this user. It can be anything, whether is is user's email, your user database index, etc. As long as it is unique and a string. This value is case sensitive

-   **userKey** (string): userKey for authentication purpose, so even if a stranger knows your user Id, he/she cannot access the user data.

-   **username** (string): Username for display name inside Chat Room purposes.

-   **avatarURL** (string, optional): to display user's avatar, fallback to default avatar if not provided.

-   **extras** (string, optional): to give additional information (metadata) to user, which consist key-value, for example key:position, and value: engineer

You can read more on authentication at [the official docs website](https://documentation.qiscus.com/chat-sdk-javascript/authentications)
