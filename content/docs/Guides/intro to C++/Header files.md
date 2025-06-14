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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJU5R4ZM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC4ffbDY%2BxaIU5Bt4ouFRHHJ2o7o53DXJfxMU7HEf45IAIgAb9TTAXuOQbw4AMdhEDojNZLYsx6eQXxDH372Y9S2Qcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDD46jQB758EmtmsbySrcA7Nquc099oyqBKcVAhNcDByJAdfTXwYM%2FbJwEYGj%2FSz9a8yQa2vt3VfD%2B%2FTt170gJaiIMjKuvyySD%2BFZ2yRECZQkA66b2E7jsQj%2FJbOQr5nwtmAm%2BHglfcEfX6rDW875lKfJT3fOTwMwR9L7tC%2FVfe7Erguby1JMgtKfaPwEZh%2B0n1l0%2B%2B5sHppaeapa9C1b3x12wnNN3FMULrqXj2r248qCYEA34KpxBziYvfPU5pvOm2QmIsv2%2FnnkKyCVx2X6cpomiixNiBVk4ngPvaTtS%2BgB4FrZXJ%2FHHiLYqPz4yHugDp%2BOcDF92HLVB1QlvAZ4ASBmczb48x%2Bghx7mC7KdrkjPAlOw6kOOU3DV2eBMpSGnogu8IHvDlwbP2qmr3ZEajnPgvA0%2F%2BqFOy5g8%2BaeWVpFWwwhWuMc1cPW2fE1c6HmIpLC36DOMglydZFRwhIruP%2Fp%2FnO5weMOY7l5huS52aIp3U0R6zazfCgMl9jC4LHzQuIkVyckB6pDY2CZSu1YCj8wpRoQbF5n6DEtrCgv0YHE7RG8V7PpOskaA6VrmAzpwpD9dBdbpKldKj2G%2FBRBRMX5gNsheeSaLYoIkY7KjbT29NN%2BIAu%2BMbOZQ38Suy3pVDABu%2FwVF7gVkdckrMIKUtcIGOqUBEHNFJlpFzARaALtHR%2FUJ06m8g6sqMdDaoS%2B0a4Grq31niJugMGZn%2BW4IwjiMfMw6Zc1eYMZR7Wz0i1VUpdYNhofPPWAXvvfz7SPL4mh8UzcgZxIRT7c5MjffBPDOIexcgtLSVOE7ibY0hsyLud0SU07pXdvpes7YdvE5wc9s%2Fo%2BAORc0ivPTLwuAZwTY0sC8yC0dwbF7MMWV3WLTRjKCpfBYWu25&X-Amz-Signature=c97b008c41806f64e5ad250d0097e4518cec21946de241b2f344d1d41e4aeff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
