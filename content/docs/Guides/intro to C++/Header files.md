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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V2SL4FF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDzwMz5E7JAa9ZPaKRsQH1NIXHOOIAGKyx6r7UPWR2UKAiEA%2BAUoH0NiMruF6TKB77iV46i4NlNq2hIJV0d4PTJKRpgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNiAq3gTbO4nsvidHyrcAyCKHZOEZ9AVDBb%2F%2BbC6xjl4hw2ToTMVPZBE2rRVRHDoozGjnfUIgtEseULMEQ%2BNdYtzricSPsLVGnOmTZaSaIhyv%2BDhU%2BrZIde35PLZgy7O7xBenmXPaMTjukv5YOPvQob6Ic8520oAth1Emi8encH6XSB7QshNkhPFPi5KV93EzLD0eqHXBL1qaHzTkqtH2SPSey6%2FSWZCu%2FndDLupgq%2FZAV9KDeq3mQFShN3TvJ%2BFSJaCP66WGRarWnlbnNJ3q1tfyFfHrZc%2B4YYQd%2BUlVzukJMric0tsFb4JBtxPi6oGJggpM7%2BpC1uF8shyP1KR9mJoE9MJAcLb97J1YOIEFtk0h7X0AJIwlhCW3Yu0KXf%2BEHWeytZKdaqLDVizXcWAiBDcbVTiueYlVZ%2FBUGkdMTvRIVzu5zGXYezCeMQJij1KRUxl71tiblwGZpNu9DkAPP1VH%2F2Qn07CWAG727iW8EdLlaNZXO%2F475JNKVifmKERhYOI1VsiMtUM5PDxA2GKkyzZyshnYdWVgE0FstlRMZrCQHlpNcnuKoP5O2B06uxg6JeRPQeA4q50bmG4vC%2FMdIEcXVykWOpXRYNUoa9JzkSnQAcUR4uY279PJyJdNmyh%2BoJig25jQi0mHoPNMJy848MGOqUBMz4C9aZTKx1K6TjUF1wtZ312n8p3MCVE5SyW5BowlVNinE3TGp146dMR9e%2BS3GUQCPKVrye5Fc%2BANfPsLr3kktbwQVs17m%2BxlBOITQTQAO4%2FM1IOGoTLI4AWf%2Bjhx93M2KLVZi2w4iHU%2F3lBpA8h4H5bIF3rRSkqgRnejGALuCkBhaS9Z8G60W6TPmd%2Bs%2Bl7cqONCC6I1JvovFpaioKHjWyY8Nfz&X-Amz-Signature=8a0465b63c4bb7e36fc7f5c726f1108b11425e10f71614243423777f726692ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
