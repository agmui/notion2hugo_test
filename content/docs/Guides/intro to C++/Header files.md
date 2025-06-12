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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSIGZ4S%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCvEQFTGnyW%2BpHSbIh0fukNO%2BaTOHeaoTLK0uLAgM98nQIhALrQGQEoTdfButDneL9HsjaQZhth454eezT4ji3hWSXFKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKDMkqcdYMWq1umlcq3APBY145k4M%2F07mdB8%2BlvDjyTxIXG5cv1DhyZHJIOzVcYe7mViqfvUhawOLDxw2g9U7OQHmerK7XRBD15lFx1nDTGejdsR7pCnVOPuBunuKvcsI496UF1jBqgYNKID6g1hnHXJc6kvcuLgtXPXsZDkbcHTS4s9xDnKWqRDAzwfWgdYfgSm5VELavYb6XDPK%2BQL36xsw6iDzSG2D9q%2F8F07%2BoAI18naOwMIUsWZ14e2xN%2BqwU%2FGC6hdPuilFQ3Jr0wWcD0yJFO4%2F00YPriyrcs1zaYM1Qx3b1JAkqt3lrrRBWN1Y3%2BMWT%2BId%2Bo9tyxUuzcNkzgmnKBFHXwreKf289%2BW3y8H34MvW9xqSp%2BTUi%2FTwD2ZD2LmRfygKQtwJ3tuLzX912ktFrPIoRnJAW%2FhUumsC9iK4FF98HAF1IRzrHi33KU66rll7EbsCh7bgmbS9DRT5EdkEwRHoAVmTCJoDVGzRZebjwzZOAflyThu279KK%2BG3KlQGHfiwgTdXPhHWE7GwsPiwHvI%2Bd0L0cjulnaTEOF6eBe7mSZRieHHuAMs6pxxfpERyxn9P8TUYtnb7x5PWUaR4AcBCCTqAxN1Z26ZJxqBZMUt%2FynApeb2hhAAxH5WmTmiCNynJD1na3okzDCkKzCBjqkAfm3mMbwZZTHuwbgIfFP6ezeid0Aar17rfXLP2b%2B%2B6KUqJ40R81yMbKIEOTVXj7xvGwwUXorWF9ztN%2F2AF9md5ofqMc2w4Si5MbXn8d8jqLx28VHHHN7zJZmGP%2F%2B9V7UxHVVlm8qzj4288RnGpqmWE8B4O1FSwOl0B2UMtMNKC2DATAgZnAyRvkgkqzm5Q3Ny3oHRk9%2F2Yo8G0GVIy7sWPAq8AgI&X-Amz-Signature=efbb74afba41a1d22eeec5dacf6dc646ff6bec646815f50cecedf3a78cb8013f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
