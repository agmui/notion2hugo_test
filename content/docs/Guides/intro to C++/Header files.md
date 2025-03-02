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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WA47EGS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5QUEsPdEn5zib0au44acRMoNsAL0xjIWYS7Fb8BcepAiB1eJzaDa9WtSTqB3VSAzrelq8orantxqTaXPtOxBCjtyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhU3OXdZy5oa9bAwWKtwDphJcTaHY2g%2FW4aPE6MWfim8yq2EtpSl470kNVlqFZEFsL0UWKmfP1p%2Boc4krnPOmZOi%2BkElTV%2F%2B8Rw4E0JlWUzo8DL22RmFsXVaOtVgRD%2BC2aatUV%2FCkG022ZGbomEDiNXqK3Wfp0G4fzqWnrAhVcIHSXhZ1rKUTCpe%2FPgD%2BHlP2KXxaboE%2BxfdtB0pZy2wDQs17WD8tFnk6Y%2FbHLQ8Kglzb%2FdLpEwaipdjbZg0GNofOE3l%2BA0UwCoZlcEkapT8MsOWV2z5gOlLhBiwlsAXso0E5RuovPpV1plJwXOlZut7nU6JwOBNh2MjqRGfuW%2F2Jr%2Ffd6zLUVNpaxbd4qOfaPM3b3TDXDwvjo8nb0Xu8QtWdbtT1wEkNcZlDCF2%2FpdPyulLWnthutAuRX7U%2FkiPuUMLctu2WWhEWyBYLI0rw5g294p7s%2BVG1ftvQoAzr5q9cp7upkyA24u6xxmSE79ZhIna7WY6BquIq%2Fx451ZNV2T1RxSf%2FUy3pDUxWniPMwjLKRROon5D%2FbGU%2FEldKGYvOYbvta73tuayQ0rhPJYSGbpf6HAIwVg03Tm%2BIBl3sJmkMBFTZkLaVDGcGTjlpejicsGEJbJC3R0iWcHWEYy894f5AmSfxFPLjQXKg21Iwr6OSvgY6pgHVDt0E8FSrO7sqOuoJ4IbpDJ2YTir1dbhTrDS1thP0njAWOjCwn3Xz8PVCPoBKgXInZ0HpzxiTJC7GJ1td44%2BC9fYuwL1nAGMR8YyA3tJH2wo3B7Xw0ik4QGVuFOKob2iRY%2BLRlemvlk0Dgy%2FHMFHIwSbVDXDaKXV%2Bmn%2BpBwCCYmhNrc12NQ1uw2dhs6CU%2FGdvuhhHJ5maH1wvhYKOAV8swcHFSp11&X-Amz-Signature=5b653f853f9003f8b30c2aa43f2e7a904e8c4fa06542ed36e416d56468f92721&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
