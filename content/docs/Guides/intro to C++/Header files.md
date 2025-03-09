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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXUPJD4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGCyTcoJzWwP1emHthsdiTfOkWvCsrRcuH%2BOGNxaYeNAAiEAuzSd7xtsZRQZy8EdzSdS7YZjDoLdby%2B52%2BUlQd%2BgYlIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFItve2IkZ5hTbVEGSrcA6LQPjYEk9%2Bk8BNv4ifSRRsPGUjY%2FUHNbb7%2FAxULoOwLC8Y3IcUp%2BftQHM4n4bco6FhYPkihin1Ua8BzUXPjTvJ2Cn7TuTEHkdZ0CuG9g78%2FxoJzPN%2BXUP5nWJtHYMRmxgbTfDAKd2nMwS86w%2FHJ26g4FXkhLYZ%2Fj67gCJ%2BuSoH0uevk9GBvqkGmnNpIJtIEtq3%2BMcAk3gtNaKiknv4T1os0ucQqiZW%2F%2FNi7FVYXtajAKGfKnH3jLAoWCsdkHplnBAnr05RB2vLwrjujYKXSNO3b5u7KYUhMBruO2goPxDzXK2Q7DdZwGTg%2FWXMREUnQrECD8CbzU8CevolM7uGQ1JzChrieNtgshtdj604ilvO4Ij6V0fvDxoP1LXF5Sh2BiTZkgJnafPegS2%2BZ5ihxSS6htuzUwbKBKZ8Xrk4nE3zJKOPfrcsRaGZBcobz4Mx4rOzfvGRvPkMqBMjz7W72ORzBOntTv4LOf9CHDKJzeJEGuCsQFdZttuvQp3kRaAfat6%2FW9mvFWxLPESqPGzDx5ShlI2yrjd36cTksUf9rVfn%2BdHkQnO0Ky1EOBHSyetuM6Eo4Oth23FCglEqccIaA7NfHmGyp1miVDndbgkkjIA%2B3NE6Zv00j666qheAEMMKotL4GOqUB2VK8V5oy7FK285mmno%2F4pn6e%2FdAwe7loQO5CcEK6n0CwqtBvJGj67Skox21gRZ1Iu1W0PVmiIOJnQ8Yv8WmoLWEmquwXho4rdQ95da1RJEng1NiCTpGX0wRAn6RHpSIbGXsuniZ%2FWKFoge9BdJz9nlZpC0pki%2FmOITrlymKqKtx8iYr8CVacBDysApvGQygNsasZ2akWVT3YIAhJA0KQ142J4WTp&X-Amz-Signature=2743667df630b4786aa98341851cb8befa7e475f6f4c88297e01829f2402ba1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
