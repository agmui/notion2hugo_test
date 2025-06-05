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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMFGWOG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHxeckfckYrMDMiCRfAAW4WZRbqk3eS4VBPVOC44BCY0AiEAg9yaO95BvN%2F08M3QOMh4Bjli5wUeJsnKIMTBtIfuRgcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMmCtSEcYKeqNJEe%2FCrcAytuXVGEuLlxLUrzxsVve59kB3ZkOpW%2BxRQLKFlUkiGRLHuC7Mt0fTqBruYunAZ4sBRfK9o9RQ7w34qY5YDxmt8KMr%2F9M6XN%2FeORjZq1kBcP%2FVbe1zQmxsv1uyHPqa9sEJGiymRxOLkMK2BCclXmywA33%2BfuPeSRmtjsh%2FjXtsH3v2VhsO2VWcN%2FEVoI55UqeIv40gMir6z%2BRszyPc7nYbUKT%2B8%2BVeJI2MhbIoUdHp2m1phaX8BzLhC7e%2FBS%2B%2F2SwZlDCZySYDT3VXfARcit59h8MZah4e5rh6Nwq%2BHxu8q%2F0bZwhoTjTAGpO7NMLIcgqEACqVcyF6rVZg3X4QMbnRdgXwxk4VlNFO19mONxUqmuqwKcG2wS1bsE9V2QAB6MApKPIBYoDbi4RfxaXdTFOWq3oYZ6bnOJs%2F5PbqzwYOVyXyxMHNVXiSzG7HY%2Fp5ezzJJar8NxQ8yjuo%2FJ%2BbURkUYjUii0Nk0pnh58FatAYFTnKnI4VsdzRup2jS7P7p86AbKX1jYTGxi6YVlvlWpH2L2wPhwbVYmTLpqNt7qJXV0AM5Zry0sI2R7sF5FU7UI3ZDsJGmmu8p%2FN%2FWB85sxF0o%2BVhEj8ffyYJkmHDNTE0lfVEEvVsmlmxXekna5yMMHnhsIGOqUBCwzOL0UvV5isxqUpDTkw1aYYxYSDy2Z5QQCXXNaWNkin1JAxDin%2F5shqtQXkCAaTyoOK6YxCjqUX%2FoAA0Hc55SnRznb8F5x5zklI%2FhxZW24HJJKOeZaKeGQuwoWPSJBR4q31XbwtgNgZoUQXvyHCz7V5VWeCEO6L%2Bb0CNYOdrclkqXZ8E%2BFlp4yg0ovGr9ZTe%2F%2FGDkn1e6YKgMj%2F6%2FwF1ee2wIQg&X-Amz-Signature=a667c9a10f3586bc99944a78583bac7afff51a7288cb2aee3f1de1625693c9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
