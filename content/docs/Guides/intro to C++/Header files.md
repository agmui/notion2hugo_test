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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOXTWAO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC42FlkZwD%2FZAMgVsqG4ALVbjhTtzMGHURPOwR82Of9JAIgdfc70n09i26pJFGMI6EpBmVetD3O4bVFw%2BupchsFzi4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLMZYHVrLBqq3%2BHSZircAxeH9Yy%2FPL88xlKBIec39wko1EjN9zM%2Be4BLSDvXaLdI8A%2F8%2BFvnmDOZUznUX40FTrewhMOOtEJ%2Bu2ja78tBbss%2BX3Ha5eWm4TosJqT%2BCePxqI45joQ2ip3DgKLvym6mtheE86brCfUc7bvWznwdMnE4XzWGjlHfLwmSXQwx8OAGtwE2FGlDbrzzO91vATK2DEuQZBvsgrhgWpSwHfFCsas2A%2F1CjPwwrjpD%2B8d0puufRAwfAmGpqRxevvnHPUrD2wtY011yIrbDktyCTe3EYM4b3oNDJsFNOlT84N2fOajkD29C8hADlsBOBGGP4mFbMJueVxchsnGh4TsB%2BjiLtCMoRMQ%2FcNyJOEVZUYYtAv9gmkl5o2TylWytzqWe6uD%2BBwzndxzOCum%2BYelIKPapxM5bIsWSCVjjecGropNDqheAFehy%2F7Kql0EV6QSm9hYRuss%2B1%2F65VLTmZ3tcq6foVqbcDAkdVuHjFT0nOiKnH%2BFZoVMDu6NP59Z8oPiJZUltzfG1najZ7QWjs%2B7bnyR7dCeyKCkjAhXgKtfPcHHUlSKmg86qp3L1bfkzIMibwnFLy%2F3FtAcnjX69jYCtW5mt9A8NvLhA2oMNP1r1zPoVe3HfnN4MJBI1QuutdZcQMJSFzMEGOqUB%2Bnnj2Dx7YzK10qv0%2BpNp8kJvA5ZxZOCGwPE2%2FVlB3vScwWPeS631HGV6wv39ySbA%2BPHAyBfMGgDNzGCgXXdkKjcGfjh5w%2FaGRgV3eThXCAIQqEWqKblvWoEX3slSCM9Z2eHbNu9ktnzTAYPIMlXeZM1rH4AJbcH44H3CmTRnAHv%2FcyqID2XBLihv46Dr1SL1jQrWgTFyw9rrYgI1RZOij3GwmRP4&X-Amz-Signature=c447d83f3787a227492814f947d4f5d4542a3780a020a05bcf4d43e1253ce342&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
