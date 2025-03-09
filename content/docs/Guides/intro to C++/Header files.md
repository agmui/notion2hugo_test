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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPMJCAS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIEDmKod%2BtXVzVhR3xKY8pbecf5nRw34Rsz8J0WO90xvEAiEAq0X22ZigwYNbReMMpfNgBAp0QCZuvHtKgmDxblpcmDIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIkrzReWkaoD512cASrcA1kJOQ3Xe9SxmHdwBoVBGj7XtAjRWaNGEu3CjGosCAXhkJ2zPA6K6MhwW8YMOoFR9TQdGh6IShfrXfIwy1%2Bdpw9Z4ahD5xagjchuCuvKtlAuVREV8tHU%2F9hg%2BA4cK3I6n4Bzk1o%2FGc4Wf0BGCHzbjA4qpNuFUjJDVvaLvHMlOWeOwmCEWRBzv61NPwn9hCNAY7gfU%2F3BnQgkujm6xw2qOuyAXrm49tUWrThxGDkyXPzmgfjWHiSExgn27b%2BBukCg9UgvuK3w7YoYGt%2F%2FE6EkcRyssVQ%2Fry%2FLVvJRrsivFstMq0TFR5p2dS57tbovBpW2VA27rZenHpu%2FIbXC2yZy9poXD6HHjaJ0IMD%2BEXTLsvA2zgzNgKU7FpWLD6eskQ18FyoBovyirq9El%2FHnRnX%2B0PtIQaZtkDiUzf3AHtiPAItcyG%2FXqjE80Ig7130SalQ0ngsAeu11pvoRohSN9R9%2FfEaqhH26prB6FAj0tgVp91fr%2F4OsuWj2E6C3aHSrLTpLqCO%2BSu59ViAbTKjE0aWN1oIgKbY3Leu45HZZ8xgvfm7tku2DQRwhFfrH%2BcWSvEtre6Rij4scHNolOgZB0J%2Fc01H9SA4mH5yHY33qcSBMVONzb9ObVhy3uw%2BhMcH4MI7rtL4GOqUB35thX%2BxWVMnEV0h64d3CKU7LIi%2Bf03TTvdBATSyHW1w8imOWxG101xE90wKIZG0AK0VfIxYs7Uc8YyW9hjA2bYt9iehzqBQ7laAOi8HTogmPaEuCkHBfbLCCsB0UWwUzdng7wAOHiFLb8P7hjNqJ%2F%2BD%2BdsFveGI%2FpNBkJiHrfIHDvGtgvnP4RKSMb9JHu6oZ453Mf%2FQigBAEWrQTg9CovQjn5c2j&X-Amz-Signature=30f0d237b68293ce9d662e37c24f86878bb98a169ef65b52a390b1f564611d28&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
