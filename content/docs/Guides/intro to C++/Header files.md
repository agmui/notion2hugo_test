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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ENKD3Y%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEPrGDNJV5zmyfoJHpomxdVaEamY5%2FKUdHgLBrEAZy0nAiA6twMPVf7inkcnPTPn92tcAVqMxQDwG0AZ%2F6Cn25g8xCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMosWT%2BvjcFdQmVSlmKtwD4K2tncrjWgjyDZ602Zg%2BtIoy7nyJpYpgMp4JXeecYs79xbTySeTEtRtDRau1s9lT1pwW%2Fn4H%2FLkH0Qwhojk%2B91glK2xRdL%2BV79%2BjON1bJ14Dw7Wq7KRuUq45iApm4tjt2py0PfxQcnG0ao%2BuRx%2FodNvDWoB7bvoI%2FY42UInXafoPklUFv2WWDqmRwNYUVws4tjwclbBjJRd2Cm3GQFlw5kovLN6LUJBB%2Byd0Jcxh1h94guCYVuKd0k8cgJHDcLO%2B2IagsMUW8ft8QnaisXOpKYyTPXnDg9w6jYtYx6JpkVrsTaeQJKdy2tJcGuQkK%2FGzok7d9KXDRP61aykkMENXJLZFB7ENTG6TuKROf6LF7HMLbodmk3nQhuh9namhG76Kq3aHSxETaoKJjqd8M1HVAWNtd6LIpgjvf9alBQtmTJYR0SYA86IqAwP47hv2Ei07liTkfynPnmTODiJLkexHlJR96%2FH9kAaImGKbt1uPCzPsG5XBiXFpYApFQexAolF9o9D4GetLqfPG1pSPvWQG9zY9J%2B40RBVYTvEixYMOiBxBXsOLsPFFx2ltDqqx0Qs3NQxZ0XUB84qCGE7DCxq2W12d2Qmv0mQMrLSagoXkDNT3iTKQH8wFoNXcTkowp%2BrpwwY6pgFKfXTu%2BAMJ7InqOC9FMmr7wiZEpJUOPLy0FusgNldsjaXYmdZgSQ%2B9FkojftS2kWxGFkTPu9HjTpYbXr5CmSkg3eFYcgkhmMzwdpMooUoZN0mtEYPvvAmyiHv%2FYEsRbwcUwVfWYPdnV38YMPLt%2FRIUT9O%2F9hIZjhTK%2B9nlxa7FE0avZc54wIupSLIT2FJ3cn2hQrRfZwxMUQmmXVWWJ1lo354zRQa0&X-Amz-Signature=468304c834664c9525cea04c6732e067d2573b40d9967ad4ea36cd5327b9892e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
