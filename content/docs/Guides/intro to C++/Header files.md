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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV32OHK4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUFOtRjQFO8M0hlKixj90aXi%2FAQhZiNwEUn%2Frwpzv8kAiEAuqdKTBZdF2DrSZ7e8E9615RQRm%2Fn%2BZxa%2BNwsnxJ0QuwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETus3ev9sAwGGVVryrcAyS4CUE3bF1gfVitek%2BiiDFTI83ORkMC%2BEfFpVIZUFpT3prnZZaGfHjmoFekYASRmOB3xNOvmUeAXkKV52RR%2B4gB1pGJ3YaHLbfY4t06cUCwT8xv5ytrDHRq6S5p57N%2BvyP%2Fs9AqTKBBa3Xl9ZbBBfoYPvDTbFYoQEnno7J38g%2BoFKwgwq9hjCO0vMltnlBRNDvHjxK5mw0sTMZ2IkfORT5QoumqNnhXhNMtSu4rbvcJQ73wvXKjJXfYd4nRzR1FTrRrkSLX9NDxoSEdTdc0%2Fgr0ZByi6ENcN0QwPBtPaDNskTLZzRjBmzrbqRzqJt3kSouYSytBHgDEblddlHp2VBjBtyTahXvPjHe2vTYa03DkmOVHhljIDqwiRi9rm0lVOuvONWHx5gDV%2BoDwgG%2FcBTRXvxMJhri8FtM%2FnzirtB5%2FU3SShiW%2BD8BvyUK%2F%2FoGxk1ekQSiSQutW%2FkKi%2Bg4JRR3JlOsbaKwEoPGlQ7R1Su7trYyiE6McPRm0gIeO%2FSYIzNaoPbnmMcGXloIi68tnSB6rSxjrRauHt5rI72O%2FPIS7WnBK%2BRd6O1wmEkbnToiMtcjwdH5m%2BM9qBcA2RYWmj45hlDrc6ALHWhP7ZWIpTCRKfjGxoaERdVjuIZItMO7i7cMGOqUBJI62NWs13Hzah8FK5wsyVK5FBhBn8HXeE5%2BDSlG6PAdUAc1YqFHMcd%2FX48XNFYixfiXNk%2BXiOoNthzOe8YiFsSFnP36zdmS62KTHEz8iGheCT3464Ihjam9fY4FOclhOInYmQezvGvToDOnGPUuUgSzUnBhP0heuhlhV%2BAEHi5fYNUPHSQT1fQkkm%2F9uMy3lZp4JUE0NhlqKwz%2Fxfy0iQnaEJzE9&X-Amz-Signature=53de3fbd90fdd39d80358407c3330c91c86406c0b1c54e5b56aa1cd691af4fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
