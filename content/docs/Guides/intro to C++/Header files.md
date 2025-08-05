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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7WSG75%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAzbW%2FNl%2BqUcwXV5aUfQQ1tIQsC6PWDsQo40V%2FghVGvTAiAxnMhxQXwlfKlLym%2BFMKdK4mM6egZ1Sof0h5Mn1F2PGSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMyfU0Z16iWFQZL6HjKtwDIoNm3TZDFuciEs2GuIv4mCTQNOdQB3eikuacz0GsSl8f9yZMP7d4Kn3vKvFYbUtPatnA1A0HUunjG63D%2F9D4dDY2UwyW9IRX%2BeVoFNx3Kqc4%2BxW51J6SJtDpyMF3bBlbbt%2FUTjcyxcHETMlknPBiDDbSDTWrA80hk6uaO%2ByICYwFcK%2Bbwlze%2BsrAdNcw7OWdqAuwFmCsF2ZEviE1DWMpyExqg1MrwgbcbrYgpiKlpZ4tRh2kFp%2BZzmOTs6Qj1BB6k%2BXz6O%2BWBFdmzMs1oowsoZBhJw56shJfY7%2F6yQOmnp7V8ib00XsZ8TMukgipyaVfu2NiDE%2FCslSazwCMZ1BozTStxGHOChGmmxGe%2BUUYzmlp%2BgQfTxk%2FJKMnC1k4tdojTguk2qqMLB2CCFW5xhdq0miv9PI%2FJNMVV0xZL%2F784mCuL9QMw8HI2KZgBU%2BpuvJYUVopjts%2FjsiXxhrtSoC%2BmCkirFW0g%2FbuvUSSxhPkfLysZlaZKov5%2FFr%2Fj5Aq7%2FzgexauiPnLPUN%2FARfY3NREqqD9O%2Fd%2F2967JanjHhVwax8ERzjRQ%2FFAr0odqgoDtrfiacLIhv%2F8ADdezosjsO9WJ5tVq%2BMnDG7Q7%2FooG1NyBdoj6aa99J0bF5TWHsowofTExAY6pgE8ArQ%2B9y4j1tV8zYSHC0O3iwCM%2FaM0zP%2B3SO6%2BowPCHtmvU2u4BhWfaGVTQ4%2BwNOedmqbgaHH6hOhyJk16Ex7%2F4BrEkIyNDm90LPU%2BGdcEDAmGCL6sgjrc6DMN6cBxNtNzEsg5sfzXQzM9Q3pgscIvLoyljubkme6cisTAICaLVBJNZiIlMBq%2BhsW7OPANz%2FuafK25QtwDpqXGLDRXMLTitrFcaogS&X-Amz-Signature=edae3bce6fa3f6b05a264cdab057b87749314a66eeef89363e79c76f43900eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
