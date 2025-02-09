---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAN42YQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYQJLm4G3X3U%2FFOuV6ysYRZj1jSueFAy0zNkLjp%2FAcAwIhAO5B4G1BEHMKxO7750fs5iWNaI9Mws0d3yKOPXePVv8DKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHmAROkWGHxx6Zfgq3AOmt2HPSjC5IHVgu0beWbAlWnobffLhBhNdh0hayCUEIYKEGoImJo76erMrDsyyEe5URjtamv3IjlCCOJkAqXg7ROrmel2Z3hQzBq%2BuUcYX9lCuekfpwNqnpPosdtNGAa%2BeotMq%2Brig26O%2FclqQKZfhoCMjmJgpnLT3aGyxJgJZgFhc7tKeyGwWht%2BQSyYkpY66u8aWXxManCNCOPsmtDV2de0EGt5GXos1Xj7kzxPY9%2F9eDYWzCyAMsS2WhvViInQnwvZtq8c9rTig2aC6XTCuGKIQmKyjGUd5RXglNqXTBj5q3cNp04uEaESJT6y6D8WfECInuOgIR%2Bkq%2F2cKQmBv%2BcBEJkhrt36avFIgo2PS8o8u0CrsblzQnUDSoQ9IinesQ%2BZP8UMVyUC3qVrctCg%2BmAvN%2BvAlKIWZxHXZXeiXMbyDA7GxfQ0iw1ySEaHh3RNVw2DEX9AQdNzmv8rw9CNqzmEU938b0Wkz9WlGInvt9c47yyKJ2BpB2qTrRkwZvS4pw4z4NJbhxz2wtMLRczyBupZeenSSXX63gNuWYkXAUUfuYZO6PqKDnb7Ztq%2F9tp9GduOkMFWz8Cdv2yMv5wd7nrly8mQDT8776%2B5MIsIMw8b44FYCa0Xbd2JCRjDa46G9BjqkASCHQ1kTsUjGFihJ92SEh3bZc8ydt1SZWFUFkkVxkYtLUbn9XNYOA4ezfqoHOdzSQQU7k2Faq%2FujAiZoA9%2BX67sPRmPm1vGrgSHtY%2FZZLIC%2Bbf8UK8wlfk0yEM9q%2FO1uSvvlK%2FtCY%2FfnhSzv4qgx4Y3II7%2FPib%2Bmu%2Bu4ejIXkA2t1WsEqPVx3%2BO17Z6c7qPVxcv%2FKKRzaEkUpISGKMfzbyJ%2FVSL3&X-Amz-Signature=de4d6f1bf0693bf79b6502caa2d14605fc77a23c2497227ab7913c96f7e323ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
