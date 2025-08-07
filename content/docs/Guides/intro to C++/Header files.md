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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3SNQD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQChtA%2BZEtpwOstn%2FZfxlL7dKioF4bc3WZLFO4W8cPHwqwIhAM7BjyeZO4fqWNk4agCTAHAnGllAzbJdIPq6xtmE1%2F%2FKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5q%2BAjhu%2FUvnkkki0q3ANstK50OngL%2F2INTh16ny5iTRP0ppLS6kuIUiJCZORWe8mOXaAxEjYSvu5SqO8bJsw2Tf1rcepCq4aA2bQZDr9ljEeFVQpAU5d4NzCy%2B2tpiBUi2g3fIja9WxlwU6QVAApFICDp9fM4%2BVhFc3c8L6Cdr1dd7n68BGwxnrdStuzBMRMrnlzirmD6iN%2BoX9y6E3Jp7QIm4hivQ8Uq9YOHza9NyeE9nBs2nWZVbuFDN8glRArNAyHCQEkXYWytpcXmdC3iomb87pY7OFbDIhVbDe6DMPbQRmXodn21FnT8kFLkK9LPhakyu29ZnkJvfEPft7dzDDA2RIhizPbY8Y5ZpFUaJ43jpWYZwpHClALJ80pfK7RptqXcRpnY%2Bf9GsWStzvdzppRQvZtkeedSnVci4xGFz11E37y7%2FAhYWDxCaqGok5xvfgBRk0XaUhqwQvkOuuszd1QTcZn4rVT5jgzdgiNLIssDdGdjGSQsLJ2PB3zMJsCQMZygPvvqtqMTNYFE7MY93mqs9A8SaIZBopBRTFAoBYeLGnuxvl42Of201yFcXuWJ4sXpqmpUzkjDTE9FJTN29AQsSHWS7incXJef5ArY8%2F2u467sMleHTSDc0KldZnsMp5lJHT1gNyOBjzCf%2BtLEBjqkAV9%2BS6j3tOUtE8AEdanrkl9Np7CoqX1iwt7AQR%2BMA2b%2FbvWnp4eOE3ztxV3y9wGq86aKri8WX12nhXL41kxVz4WpaJp0z5D2WyH6%2FhDaCn116YX9k90paQvq0%2FMHmyfnjCnKTJvxiL0lHVFjYXn6vBd%2FVXTWUtxVRmzczox8zmf6zc7ZzCgYrjIjBIXz%2B0Ad18LKn2eacjmQ1bq8aoPo6C1U%2FlcT&X-Amz-Signature=fb6aa04825bb510ccabbb832d1955a0f75ab87ca50cf05eea1be3ff1bc49bcbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
