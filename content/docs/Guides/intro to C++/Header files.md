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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCMHKDE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2BQmIwg0gT3amj9z3pM7d4hEyotyFFM1Ct6zf2Jdu9AIgTnn5iNZ7eLuAqG9UOfEmAwgRc6zxAgYm7Qukn7Urajwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFtIgpxX2RxvmovknCrcAycloT5Vj0nAzYyHvN91yDw7xfAB4A4u12Ll2LqgHJ%2FSMdZ%2B9DewJseuCa5G%2FKM9tQ2dInpLpIvaE8RA1aCXzLYlDwrT0GdbFEVqU8GoR4xOHnMZBPDh5FZe5nB7FHcv%2F0AKyboGziBt22JBOjTptuvV5nCRUXojISZwXd34vgnmpia7DiPyubj%2Bo%2FogL3iy1GtM8vB9eGqb3nNOMvc9vVgpd7yUmCHMq9%2FURXjXVp1c0S9ybQmGKOCkeHF06bbk5KMbglX53CxdxoS2nNhpifSpjF%2Fu%2BQYMrsIIwOu5BZe0TBlH4ljH%2FkA13e9%2BgZHrh31%2FAvrhmeiynYKueA7HDHtlSCzPhxDElCGYao5GSnWsIV0PkqAXBnleNyQHpZaA6cnE5RCCHOUTZdbJXWYKym5R6G5YfuXdUVwa%2BCXsx5CbQeN5bP%2FAUdnX0JJHmMsDjbND%2BkUd3puLmLMV9aaoM8L3T1%2F2r94aSuqh5KfsFnESTlkcc4NgKTvvvWuBv0hAgl5kX7EvbnrDQsYqqPPjdYD9j7T55wlLwNSybMcT4TIFKoDKugwLJI9ZuXvC966o%2BOIOFBH87%2FcDdLW%2F8vgUcjf6ZHk7BGT5ISK0wGGfpNEA2M3h0hwItrLKaCnKMJjP4cAGOqUBYCjadhMnhVXvpj6LYWBwCn3Zfi5UaQ3udFM9cnqoh77oSYPbOcrFOHhBvGHKYBsa91vw1oOMZN9UA7MyfazozjsRMrzPjgITjIiHlaoaFICXlvwglHzt9PSGb92Mm0fUFh3fxbHzpIwQQlftmc3%2BLRlWgKMkBIkxjgxtxR9c31pDhBJ0lK7IWAXeLDHUjQSpoEMin6t7cataBOHiG8Hz9MkKzSiF&X-Amz-Signature=edb6588abb58c4f037788fd0ca2fbedf941223c4997ede00b6b8af0071046012&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
