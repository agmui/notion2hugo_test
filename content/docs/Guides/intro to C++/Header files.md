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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YI2EF4A%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvqejQucHo%2BRLxcuZibtai%2FvE2YNFMc0Nabi8QDa92OwIhAIhSlASkejV3d345DDPURR2oRrrpx4gsJKLufYnawMaKKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiJn3ZtbNZmMp%2BtWgq3APWI%2B%2Fs2837u78%2BGP27FuSq%2B8GZG5KYbBPRH4LOtwy9BW%2B9%2F9AMWmsRXjWG0Bd%2F3OTDewESKtAdIX0Cjaym0U4g%2B5NP2jGl7y0f5t%2F8wa%2FsVKQEq65Uo4PBRhu%2F0UhYj7pHAPchUq%2BrV8Qvbm19DbFvYQhZxVGuNAJy4KTMTg3htf8Gx0%2BCgsE3ArHI8XZY6N%2F482WFfmGI8%2FXrsBiYbBA9AsnzDSOyKhzkNz57TvGUouECPE7%2ByUzlQbNO3ZQZmL%2FWlx9MiroWo3pBmtYhcPzjMbky7QSHPhlWzMNeDseNsVtu9sxhNhwxtC3d8lIXFR627S9mLkwDWq1qxWdskuD5t5NCqfSJ9zaHNwcA00UnT7YNAiGQ%2FpBD12TLxtJFgu6PYdR%2F8iTHz0N7P7EqK%2F2WKG366qDmECezBQVNgTAudcRuBMRolF%2FOkvlfR0GIeLOebAejIYfoX3A3zuPNtjJYkCP3K1Glz2CC6VeJbe3VLXinIB6bl10ikNWLrusfpbPrI5WyJzhnlYFEPV3IDw5MKCZlVYfj7k4WR2qDHnnvUMDZ0YIIXFK5pdHtB4whElFVE1vXIU5rmf3NQrKOw93Bd2LB88NCfxFJzWS1Bb%2FzRrjrQNsdWd%2Fw7p6jhTDzmLW9BjqkARaF3x1PPInEsUCMpX6bIlY7%2BEavvTJg99WwVwqYFo5oTfP8bYum7mUZLH2Z959GdYNDUHjTs0VjavM4vlOufO1j0NPij9jvq7nIlXGSWcLgqsGDbc5hq%2FcB3NmpcXJIz7Qph4asF%2B%2Bt7m5c6mQA863uWc7eCl72aLXA8uGcA0kRgmPHa67jx4t39Jls2j6ZZ8yOohnCyJbNCDe58RtzLauc28XZ&X-Amz-Signature=4fa37a5b283cf4c9242e7355f7fe37fe51dd33eb16929a3c73966339960eaed9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
