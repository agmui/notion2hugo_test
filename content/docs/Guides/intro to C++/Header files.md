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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD4RWUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6sTvNWlw4%2BNlrHHZmroQxIFAd%2BkjP36tCaweQZ%2Ft9nAiEAp6yeKbuDsxA5uZAA9RtOUk9JCcyvcDLT4IAAcmklpMsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFOhiD056P0loQPr1ircA85xaFJyqe5rQWEIHM6cMZ5wMv8ysu81ugprx4fP%2FVd6tVjvowOsSj4RNixDa18iXgoej5a%2BDG529aVTdVbTp050ScRYzJhXUJJngFGM5idceLFQCI%2F2UipExPyMTh6C94ViE0eykkQwNy0uHSL8zWxjS7bG%2FEbgnPX6ohn3ZGM3GsK2mniqIY5fxz0Y1ZU%2FZerrEN67RVoOCCS9ob4t2wgAgs1qdmHEogZnLouaQPikzaMqOvus8cu7drBuZ9H1vWBcTrRTDJ552Irz%2BTqUPG4yyGc%2BI3mBwfplixvgrI1hCRf0vFDcc1rQY7athxEhjV8ti2%2Bj3RZKYC2MHz00DDx9k9w85mPbudh43KOCuLSVDHtbeidf01SaMCitSb21o6wxDGXIJ9uTZTIAFoGgfNyOy6fnkPR2i5MP15F9inWFsQujUeZJvW%2FfxfAADTQx92Z0Y4wCqd0ZS%2BOHNVE8Vs3stdC4jmXOL1lz32ZKYeg9DISlM3Rj5XvYjj6SxYvjhaXDDw93QkLQQb%2FxukA1Chxsmq4pke5UT9BTXoVgMcsgALtyW30dQpXsAmHFVR0SwtvxloblYp%2BQHZ7wOk5q27TrpNhz5Glqd359509%2BXYYTtdYfL0xDPwK8hmDkMOGwx70GOqUB3XmGwB1O7RHiLARtHy%2F92OkjBaPyYQ%2Fq4aYCPJB%2FLbROJzO1%2F7%2BS4Sk3wEAgb0cuZf6hCpnisN6hSyBF240MfM2HSbZ5gN2GAOsdwmtZjdQQYsK3Gy7GYu4Fh9vd5uJoBTdDeCQT3Bcb8Jcua5ttkaxGjhwfjn17sGhecGQcwk3XvrV%2F1F9Owq%2FKbglgsKMw0uNfSMLf7ytxTe6G0MU3luTVxyBW&X-Amz-Signature=b9c7648d934c83f7a6019356b28c815ae6e012e5908c7fb290d231d8c59035c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
