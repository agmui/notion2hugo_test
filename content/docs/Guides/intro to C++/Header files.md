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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG6PAQBE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBOzlY7BDMrmRsWYpRVj9SrSwIRPy%2FAAIx6aAaf99aIfAiEA7%2B66DvhaOrhW7RP%2Fhhdn0hAR%2FsVZMcDBTJsw69S9SvYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdZd1VbnH4NYlIZvircA5vEMu51O5dysHiY%2FwvM8MR957FKSGPrBk9ewsnY%2FATQkpdMF3ajAWt59yTFOcS7%2FyGaQMi0niQnp4BgCbBFEe5bWQCcofgUxfgy7ZMHBINt5U8C%2FBvaQMjAlT6u5ON4TJBBcYcEefbP3wwztr%2Fl7cY93tbXrMiwlzQdtsOYhteUmg%2F%2FgVc8f9NRS6BQvSrjG6qCsDkZ2T2p7ofSVck1FRTFuvXO6EXVZVTK29HwRk88TyZye7k%2BkB71U6v%2Fh0ipsFke0c9ymEOZccujnWhflYsnEk8d%2F7PN45hlCsE5vt2Ltmnib3bpSZIoC7cyM3oQFdofLRr8TiNt7gmITwTB473CV%2FRGRTi9qTjON3wh5ROuAb5waLZ6GHNRcovzFShhI5BqpKIoqRs1WqD7TZ9n9xqwTbEzH7kGBRjD6SWXa88UM6MNNvuqYBGqPo7llrQA2eILipW3iQu2QlmP4s%2F5XGMiGjeV4WOUq1%2BYyeK9j0O7thUk3FBhDF1aTl2Ysu7v4BTi%2Fl9En4mOwHPGHzefWB0k1JXIGYpqfeIO8QVXnEe7%2BGaYPt5dESzuwe90dH2Rei71IZJJ8NYqOLW5mOpt6pshvnTnZQ0qwwUSzpqE4R7SgaImxgD008VbitgmMIS318QGOqUB6Kdvr65KYvUftaDfAl5rVxuH%2FvThI82gn6G9x2DgjKzQ7FY53UofRy4H%2FGOeNPjI7ZvqL3Twn1JbXwiIWtKqRWDu6Cmr9bJb2W4WQlT7EAFYr5BFxvzwBf2GpgQdkMTV3IJ00VNnOW2xuEAC1zIH9otLL5WjBmP6SEMG0Kc%2BKBq8pZo6LZvjl1IrA%2FbjlCRrSPZpL5Qo5nc6J0iWo%2BRwthEmQf7k&X-Amz-Signature=d046d0a244ec366d30e01b367f44e4bf5b16cda4e8e09f1195753e4ae13671d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
