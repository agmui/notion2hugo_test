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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WF76HBF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp9rAl66VvjPb3g3joH29Hy70Xmvz34Ajqr9V17M7zAgIhAKNQx14WKNwzUwDk3jG2DW9bmgO5WOxmZi4af13yVlo7KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG0bMGkku%2Fjr0eS1Aq3APBtUvEXC0xOXh%2Bv%2B4P3SoWWiEdQutO%2BDZhDR6U0ux32tJTu1GpOjyrPCLwSUmy7S0NkwweVA7YjVhM1V4uNou8QrV4R9Uw1%2BxZjtd67Ayjfj%2BA%2FR32bcOcN6Z9Q8FESMbmCvsNkAs3DUJ3qGOsK8T14om3qqi1gKZfjduWs9W8HtRW73O8caqVuR7scHiJ3P%2F%2BALP2AR5b4L8K%2F1qkF4iWkk94z5DNdPpJ4%2BsbWTJqmPiyXN%2Fs1fC0G2jsHgAd7ILQgyuQ3%2BV9TAMGDBaUCM2Oho%2Bya3ICGgHCTo2O2TetFzASmVfYKFqpYbW3iGm%2BlIo2smQyQElAygxKC06f4v27UARI6fjG%2FPs2yLU%2BWJP1bcGCDQke8enyWvOcEH3HVSDIETU%2BUJ3tpYke%2BhzRsa3B2WWL6c1cD1YULr2jAl%2BkOT145QFFbzTqNjgrqGXBPElt0SPyT1mlZ1k3XyVP6vjy8gJx3sSva5Nr4oKh1Oj80oPVdslsKNGkCcd3fPoI5mo7ya7CIDp9ztIvLjxappTRX9O8dycAyXAvvQlnRCsP7%2FPbdrj3%2FmBLIJpPxztRssDl79weeQYOsAWvh4OIY%2FzIU%2FtnPcy0Y0bK3%2Ba009fWbpC%2F0AVguJLGIm2Q8TDBzcDDBjqkAc0p0Sc5K%2Be%2FUlw%2BJo7vVxEsLr2ujcAq%2B08wjRGngOw0AjleCptXwJ0BU9SWXmnWFbxWgkBEa5Ac33lp7G%2B1%2F%2B1don1ZHwaNuTX1gTZd9NadC1zCM0JDXkDwec0OBAjdtbO1%2BGoMATx%2BbFVYGtNXoDXfj7SBw9cC843tKqnPxm1E76t%2FrNsh3A9Kr99Wn8djP8HI%2BScW2cRwm7NNoXzgwp4%2BLIQI&X-Amz-Signature=c690a6ec07d6a2459e06c36ea570b6cea731ee0fdd1164ae05a554ea26ac603a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
