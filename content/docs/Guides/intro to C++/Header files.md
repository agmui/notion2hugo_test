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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNR5F2JZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoViDFMoA%2BEuuMU4GnezSQAjgLVg40a426E9l%2F0iMgOAiEA9VRP%2B0xCpY%2FwYizUFGm1KYmIQ01Bho2vlKI2rZZekyMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFlTfORv3FQgExIHtyrcAxgJEy4NgcsWIhQA0JyQt3NlaSeTKOR%2Fug1W%2FVM92sJnyXGvVKXCuo6qa7bafE9IuFulJJwM9NlKLAcCUJtD2GXJiYbUxYEiOz0WlvHsVp8zLVqqpUZvRnvBrOL9mPr1QcH00DPbq1m9UQWLAgMfteY5RCrVGv24kBtOZ1gId66IKAEydv%2B6H36J3A7x1bbsC%2BNlPVr5720D7mka4c2p8kgkolQRHW%2F9cMOatnp%2Ftr5fK1cWlvHP4P8Dg2gApVSojf9UvBjujyatYV51C4yOnFObjNbmh6ZmEmXcA6VBCRlEdFbt2DuJAVFkP2zyLxnJUYAodTb%2FQGZBStrNMwz1lkHQRwbfI%2FL3SMTjIEdiOA2GKo0j9EkxCuxpkrqh%2BkmnOnNozrXCl3vWP058Q03yfGquT6R4vvOpKWxRRQH%2BxxJCcZrjjl24tawJQab76KkpsLC34Eh3iwmHlDuZUV2ch0jABVNpLblxmXJ%2FpLYioA2M9H6kmlASGYGh65vLt6ZVdZ2D55DWZrEDHfC0eqGntbly1erl7Upd%2FiC6iBTM9uVCdj98%2FsXzQJ8ZRow2MPXmPoOFZ%2B5y%2FURJUolLr7SEAVsZzml8ku9SMrIc8GXg6UZjxVjdHjWGUpkVyBygMKaey78GOqUBmZ2UMBSeGOB1bF4h1jQtTSNENXJ6u%2BldLdhVYvGxzmAkNsPLq6q68nP4DxTL05KhPVv8fSNdQ%2BxoAuKDDhOgsdFHUc9wDC6xvhU4XaVyvyovgoqA2kb0mqFcVhx%2FgSVH8gNWg45UeZPrsQJpP3vhVqd%2B5Ha5HGukhATbaZXIU%2FwAVvqg6iyF0Bb%2FxqzVEkSTcO38dNC2RB8xF9vOqbJ4h0oZiPQf&X-Amz-Signature=64f5991acfc8d041b8d3e6cef847cf02b34e4fb1885dbbf98f4a9e5902a6b2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
