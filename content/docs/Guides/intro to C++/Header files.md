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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYVJEQ7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCJ9coFmqi3cANsIGNVGuiVOOBuZI0gh8kYippHE8XsuQIgBYmhomBFrSdWK2EBNEecWTdHVCg4mtI4%2BBIUtRQF8rsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIRDugNGcHL0BL1wSrcAz44tCepAFblIm6cC9VEzEfjOX0uF8zkkOfr0iFuh96WZlErJwbn4S5JJ9Jn37vF6bOeTXR09J7BdAr%2FPSWHXk1rTDIBViFneLan23T%2BnDmKoGGjDTc3f%2BKDQNQTrwshrOEk4yxsc1soC0npEOcLOfaJIL6vwODDhR%2BAXqSxES%2FKiV%2BDOFm%2F%2Bzbm2G8nz5OLmwNut3VIOXHRzYHze476MBHWxYnfFhBfWpqGPy1OvBVW48%2B8ASI%2BluRz1ffRldSpxuLpga3FTWa4YY1Evb8%2FnMnxBay0ugE6D2KbRbhNCt1y2TQAx5%2Fm%2FQBV798IGy6RYC%2FR8VmJrV4gF564LO1W9uQ77R2ED3HPNiHL90mUrMpGUi7%2BT6%2Brqg0wh53UE2jagflHGtIuVd1x9vB4GW%2BoTK185rD1Ovo73kQqRvikMRchz7d36wzAgV5ZcuGbuYNG7gKr%2Fc0FOTwSViRAtTK1HOn9hYa1%2BeASsYkNEPjLGSwX2dm2HiKeksOBcoDuFRSEveM8k%2BJyawPoAgC%2BtvfMXiN92%2BJZiavUKy9yG8efHHeMKQ%2FB3%2FWse8F6aVsU41qy8yzdM%2FzTy%2Fwafz%2Fjmicg6aJrEIPENAVAYU8MsBINEQbnTsx9yDEW4P%2FPJv6MMIi85r8GOqUBycqP6p01N7jYzmjJ%2Fy68QhiZt3m25duf4EVA%2FjOSy3RCfzwDkFCseFibE2ozg%2B4Aw3y6TeIZ7yFt9aUorXWik0DKagxAl9cGreRYrJwDoQjeGheE2PQi%2BDe9G2BT2Q6H0fpfu5fcZr%2FBpkbhB%2BNVlaaXSjKmoT%2BubgTsBgnQPqwSkgj%2FMXJ01%2F2IMH2C5HEit%2FFQiFP8Pi7UgiQF%2FHtZ5mWts%2F9U&X-Amz-Signature=83af5200318946993d7b4a07d240467f3d354c47e27af21396a79d4135c84f22&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
