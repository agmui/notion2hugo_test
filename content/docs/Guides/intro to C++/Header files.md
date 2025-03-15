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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMWSDZVQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0dRLX3zA9q5YRzPsFdBGMaTMIUieoU3DHkCkGqVzJ0AIhANaMuT5v3dVV3nIPW27zDVTB6G6SC5uBveTrNoXXFN2JKv8DCBMQABoMNjM3NDIzMTgzODA1IgyDQC4H%2B1ohfFwY%2B8Yq3APkLg2RjR92Gw5YYffK%2F6H8AxwSbyIa1auTqVcH7iU0beEI1mnp0cHN2dsbAeA520OQUHHcTpsi%2FbyNbKk%2FRmnefXS0fjGZ2SI9Yf7%2FpWXjIw7QTwkHRxyVULXwATAoXM60Joo%2FyvewOAAEj9Hs4KcUELCvAABVr6njUR%2BN6lehiQSPO%2FRjzeJdvnmWEkEcBWZpeIJSk%2BPefGI8K1MTJUS1LQSk2m0zq5CEEv74NobX%2F7CYJfa6HgNW4YMIB5Tn6TwmEzedGUz7XjkOE01Oem0u457FH3h0l1scYbxxMaL%2BJ%2FdQWMyzPp%2BLikGt3hTvnLRpHUCMrUAOcxBS5szV6V3lKkmYnN2zbokh8TZOfVKclVxbgFtASjKXbAcqW6n5pnRDkB5t0IkZPg%2F1JivKcDE8fncEMbBtx2oaKkwfxtLo6%2FPQd7tmTUS8xJCRxBCuhP%2FKMgNPUt3mxeAc1E0EfL%2Bja10mt2ZqhU%2BhmE0knmot5X2mxWSfstNTEiS3AoDMBYsRPlntdlxkIp3vJUtS28edtzo%2FGYXEwDwfmb6l5nTigQMbusTbtowkJSuEHselOYydbv67L1CYkZZ8umHbC04WMvWzX%2BoLPCDIHzbB8eHkCoK6taXkEFyy0OtNCjDzl9W%2BBjqkAeGFOU8YjiURF20XVkWhCJ97misCkxHqm8s%2BAtdyXPuq1jlidNcDT44DV7%2BRSkRb8pknNUfu7u8Gm%2BfY4Rw%2FUBHSBx6NKpQfvzXf%2Fd9shrzvVvdxsjg13Fk3ORLkwkbBlHnWsWeU%2FkHUpcMGijzQTSjCLOeGMZTp%2FAvswYs%2BGVeOcrVooFjSYTlNkI7OBqi3FFZKFF0mhZexXNJHnHUMlZzd7Kdv&X-Amz-Signature=b946f29b51783304b212d092259e18caa738b52879c44447580c8144d2c51919&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
