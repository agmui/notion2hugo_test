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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRMGB5J%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAW1dkcBltaRiZ0zWREzT73bRe%2FVcpnYHLnulJEqGXuMAiEAwjQUBKDWaR8mLPcDA8GhEvFU068uw2xj2LrPsYScFSMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHDiRThLr%2ByU%2FXpabCrcA6FJ1K7TOWUrrzTy12YEg2UVlVieMzjTmpmIdXJMGyVpc3jMxRVwjxdpb5DljtMUZ4rr5Qtn8eECtYnvYoPkQTIxgCOJ2m1J3MrF9mUKcfytjpwljn0XczIzzGtoZhZ3cMtVcI3K9HAOe4uVB%2Fie244VZmKl96zQnKXSZwI3%2FnV72bCDJD7k22U5%2B8P0KCNEfLoqdBn3CYEzncxxoBx93ub7giCVCMu4SB0LeEnPljE2T60YsbhfDIsm%2BhIg%2Boks1zfyxONfsoQSMsg1%2BFBWnRsbiTpXzCyhnwRjMCpGu1L0zuPtbO%2FWATd%2BiLhQ0m5d6uSocZhZKYqBMb4EV1Z%2FtaciehURHs4sWgXvYs0PZ3ssjLgB%2BKsIa2HMempP935rHj2QPFuhqESFxzQuk5E3suu9mWfAMifCcKtFtZKaqTS7muZP6Hx296BElD%2B%2FX2kiTh4%2B%2B%2BtcnyrejcP2yGPp4cfO0VxgpqKkf%2Bho%2BSI4q%2FnKn1pAMQgFkbB19%2BrVfrPyIliWeFG5jbFFB4JT8%2FTAQxmduKAcyji5RxMoay5uGsi5bal%2FkkRSCnKae8PyX5mjvt45e3hFYcygHKu7%2FYwXqUXPlPsMeGjXeiE6uTIvrW8DbNvvRk887Da%2FOVy1MJP8ocMGOqUBuZbg04GAbt44B8oebcFDmE%2F1mTU4ByUBB9j%2B4TGcgxIubF8dhdL%2B3bZeXviPqmu5RU3D%2FHavxOpzcDxB1ceuW48BaStn69YKq44M6nMUuBZcWwfH1qLWZI8cwoRe5x3eUWVxi0E695PGo6dzsNSg2uk96dlmvaYrXHpTx%2BruKJvfit1cf4e8KBzU%2BbHS%2FHdSqW8%2FN1HK4wHBaPoTa5nyV7%2B0UJj%2B&X-Amz-Signature=9b46caca2d2756b4c223ddc84cdd50a39c6044a813fb6ae46ea7a1d1ff441d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
