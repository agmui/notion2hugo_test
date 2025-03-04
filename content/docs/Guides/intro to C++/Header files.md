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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K6AREQB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6G50ZDyEOCwuy3VImvYY5YJXLO4P0pOrifzlj4efvSAIhAMgL8Ssp9SjoxSwjRBr8iHzydLeqlX04ENG72%2FkaRJABKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhSUim8u5CwC2Nt%2BAq3ANXwvfY%2FE5f994qJV%2FyuciuyMheSAQzTXnTxOmyyo%2F0Uop37kBtfZvhyok7tIQrad2qD4geFcQTYkwsm%2FeqT4yw06NvLWN6x9KLxYY0lLWciXoZWVnni6SDunHtx2qzjp6uwuaLyUlApQngMEyGP%2BXNZTrjT4gOVsjiW8N1jxdCpUu0AMrQah5vFpf%2F%2BE%2FhLDCQWT1yobi6fK1vLUKi%2FWL1jfRez4fFCbb%2FEG0pL8Rt8maWSfyAfShUFxNSjOsTGzJxDCXND3F4%2F9CxD18WPewQAEDss%2FAvVSygkhnRMaCtVRcShF725hqB9sUeDxK4I5y5WNG8%2F%2F80u7Ay%2BMVZ0VmmJgCZpqapKnpefW2GkWGXP12PZLcQIU6ZL66Ji1kIqPfSGHmPs857gsHtCrBBWvlRe1PI6CULOiELjt8AiB5832yHHZ9zM0wGFQ%2BA6PkEW5wJ%2BEb%2FA4Wl%2BTxR477K0y%2BCk%2FttU0V%2BYRWdK%2BaLFV20J0A6TBDAzvrZjJ2vBBBBSe%2BbFElh97dahL3jcS7Kub5uB4Z%2BLsmTywRuuxz7Aq4rKTmk0v5E0RJD7cg5gYtgD1TIc4KnDQE4r5GOi2njTl%2BzjVMAnNQM1%2FVLhFU0mW3kj3YSv79R8FEOUlGR9zCLup2%2BBjqkAZyyHXIUC0UfqsCkdls3a6HmzZ3Udy294m96AnuqGGakFThyoW5Wdz9EwAXwORDLYWYf69mlPnYV4WxAl3%2BgkgawNczkN7SBoL23l7Lm4SfJ42GPu0gl0jyr2uN%2F1FOJNXrO97VSGSS3JUUhGUs1qz79xHBLwKhRVV7atVbW%2BKQm%2Fk3rJK2ndLvTcif96iMT1UrwezgB%2B8B9DdSJQi4ZOpYUQxbv&X-Amz-Signature=11f6446d2ef2e600fffa4c020de32a7cbc93956af78e08954f07b0a09b19dd8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
