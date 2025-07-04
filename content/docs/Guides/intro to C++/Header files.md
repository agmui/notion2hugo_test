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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JXMS47%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDxeHgXIGqU8R1%2F4kBe5WGLZDEwq4qjCVZ702ZxPA%2BenQIgA9lOYHujmCG%2Fgg0n0rko8RM6o3UgXwkrdaHXSkqkqjAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMiMJ95UI6h%2BydIjxircAx63Ou0L6Bgm74dXVZsQYvluNwKaklx5Ax7sWCuf4y5VZTnpTqG4NnwuSt%2BDic3CaJRbtChPy5lc3FO%2F0YJdquCctHfqQO6OPZg%2FJ%2BzqNHlrCMKr6Lw0mzaH5Zv9ynYscocd0qH2MVZhrq%2B40%2B8B%2BaTjasmCKs0%2Bh0NWZyRSmY2d1K05NfYGWfYsuKrno0vQJNj15vEmsm6Z0edcOA5yjwT9t%2B6s72uEZhhQtAYcH4%2FY0Uq7n79HUunLQazp4qT88B6rzWWNTEFUNs7Y%2BjmWy6HHLBWzKKidX8Dm3T%2F367hI5AGADR8fwO245Zb8YZ%2FdEdUpgJMVOpkGsrKnuMcm1CgllQsmJWkIxh4hzygYU4aAUP49%2BahB0ZPdotB9GWMybojNwr5gV4I6rhxend5jBVVcjNFIrQXTrP3IYd%2Bfbn4ATv3jiE8qropPe0f9%2BJkHhLCRMTJByvIhQtYvehBiBRfbUdywTw4tCZ6Qk0O44yoWKARCfVAGcU1xTA788h%2FOOYV7rJps5ZguKaIc43mzWc4tDpmXkySqcavrvXmIYd3w%2BZzqF4oZM1%2BTP8ljMiuE2d7qaJez7XcUHZp9Dpuw6ziiGYUK%2BNGUbd1Io9NlGUKWx709PuOm%2FJLT%2FEgHMOW9nsMGOqUBinYKnyC64kjWIH%2BfRGg72luxMUpVa%2BX26gEY6mMunBDuFiDALL6DubbaSzHtefPTbiMMo6Vs1OenEHP0BU%2BidS74zZem5D8vOscSvSgZQAI%2FUhplLbBRPPt2CvivtlcYjNE%2BgE%2BkR1RnPCUCtVzQThOrygEzCBdM%2BEfiWPDiX%2B%2FwcxYT7k24a6YxIhkZigTZGTJFfBPDHUJ4Sd6wIB5rIBmGDDV1&X-Amz-Signature=44db94ef2b806456f0e814f934a638b8e335bdbbcdb43b9ff26aee7dcb699c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
