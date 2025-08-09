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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2EE22M%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDZr1QUNKLXWEre80XAPaM93GpNvYiQGvrwVoBU%2FTBIQAiEAxTg8q69ZFrzrKwF1b4gd3PhQY4a5zG34hEioS4z84q4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEenVTv399yUSmQTSrcA5iaVlHdLRFuUQsEjboseARDNIsanHv8l3JAa5dlC3hGWSZrwS3Zz3L32hXfOnw225zTAC%2Bs7eJvn2FfRQE1gIKOdfw3S%2FIGLm%2BxJ3GZNScBZYTnqUh5kLito%2B64iA1nHDWfRs9hKILQop399FgDns%2F2hCN0JvqE05sVGA0J%2BE8FbuS%2Fwu7NXNeWSSVsHEHhNMlhzd470Rjt0yNWsda%2BrCoXZ%2FUhCHDABj6tlNvI3QJfvuVtyMysTlzfcUP5mFpz1iCWQT2PcasSkV0w1E8%2BhFnQ%2BENn0Mb4fW4GibDPmdcYt%2FPXcITaFYshcaeUW1txNymTCNW%2B7thG72s29lGRM%2Be1ZBYU%2Fj8URVSQCT2UeXeuytwZz06g3AxavBFdy%2BBG6smf43mIeEg3Y%2Ba10rMliyT0ghcYlDAuE2V69rAWMimWOc%2BOX4SYjjeaG6RhUAjjxeQwJjdyismVmNw78Sul1DAnpu93uDElVnDExDIbKm2V65mxo47uJgJPUuecPHYqcJdp8joezObQNPoMv0PdIrdcQL29XK16ppgUtqCji1SDpF4p4l%2Bo64Xq2OKVjLa66ZadvT2%2BgJoUhy1rLxAnhpfgxk70fOEaoRIB%2BIPqkmRyhpAoAg2Bfd%2BlEu9XMP%2FE28QGOqUBVg9pBAeRSF04Z6ueP0DkUwSJjByOj7tI8tqjQFRy%2BM3SDY9XwCqCGxwEneWsfonhfqm2loaUSsv82MLUpSNZg5CwD84Mg9vSTl4oLTVyi9L9rYW4AJAc7UCsF1QmCTc8jsNZrdMwKakAxEdZ%2FU%2BC4wSSt5AiigyaeimjX1oPVmRA8Hl6W%2BTOU8SSmnGYgoz02ROAprii9qK95SuLx8%2B6kPfULL3C&X-Amz-Signature=a5f1551683f373e36b43b07a59cce1f558582fb3da214ea82ead8e8064b2dc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
