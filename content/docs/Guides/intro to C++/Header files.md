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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2T7XOI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdWnt%2BR6JHkdBLDO6OdU4HCeVegRGzkwGoYhIwqyzi3AiBpa1v2ajKj5frWf%2BMDSkIv6fIRKNAlZ8pYrnnXQUWSviqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWM57oUCi7zexlnviKtwDA98mSRAvjluFa2LoKUsxNRKLXyjR7yW2KAL%2F9LcHpTjYn%2B0zkpxsUIhD3wHNNeqzMOQCEwJdgR9MyPaFgu5KAyHuHbetss%2FF1VD2GP9Pr1kdingrOYQzm0isZ3qqofCljUiCO8SllK6%2FQXB3qAyxIgkydu30xXZ23mtoXbODIxqIpGJeRQVgg59SzEOiNWiL9EvHsUCiEnmANF8dMaSUN0fRtBQtaqK6Oa%2B7%2FzGdGXnXKMtNx9m3XnkeWA8CuHXeRsxUyBkpdrofu7aRWtDuLGMoT6mvddBKc%2FTNOWyf5KDcm2VZdRPgBmRqzaOc9Bfkh3NEP3FjkIZ7XoSvxitUrUXcnW892BiaLBuHzMuUuzlKLeMVqbonKaXq6%2BkOoyXq6isi5oQD8MJlydE2BTcr99fDiQEJcl%2FhLiBbM5z6x33OUZcIGygHQ5vkkh%2BOV%2FdnMtaOEzBK8ofPGEu1YQGo04lFvk%2Fgxw9U%2BNsw2UJgc7xbYthYlfDaT6Pv8dMsW%2BsqmDP2VfmjCq13RJ5w7i5mEvzf%2BQPYkPFUlLgxUrGk5FiZlaj7rhDpws8L7bRopnTzK4R8hB1VZ%2BZD4qGeQNBi1Wrgf0oTc%2BMuG6e1Fi14%2Bacp6CjuSEOsRWS2xF0wsvnHwwY6pgHcn9jCXA6%2FTSZ99YhDOmcDLp8Qk2ZqmISzljawet1PbFImGLkhLAbjjoe%2BUKTwf1Aoz6lleUKa4BmBQcGZIpgKR2Nj%2FAE8x9RSSgI%2B4UfjhPy%2BH8z0%2F39Yi9I6LQ6xVB73egAMB91e8VFAT5cl1%2Fa%2FmoDvt%2FOmpsE8LGo%2FDVglNFQTk1tyYBSHH9P2aSQxpDekijVEvyYpse317L%2BltuI8OW30Kxzs&X-Amz-Signature=014b13cd03fe3b0c3fe0efda0f949d5835a48cfa598db07c732d033eb08bca2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
