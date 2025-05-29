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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFSN3GH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4fkTL3f%2BuFcfXBfaifIc8Gd1rUfgQUDEBwLpuBrleBgIhAPqPTOdNwnWKIYMoFhXGn6YJB2FFm0jaB46P2%2FOSuzVzKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2BkGDnyr%2F4md0JeIq3AN3rdNLmqSBP0qndbvyNVp%2F06vcvQL7HVdydL1Tk4Oy76BxGGHZh1nXH7xjH%2B2KkfD3%2Ft6vlBd7TI5Bzjvg6Anrrmc6YI%2BoHEzTl73%2FQAEADzbsYZo%2FGKPFFQ1uAskhozWt9hGpwyXXjUmhwSJ6Enufa9SICXvnObgf0gQbH1SrcbvjriXK8u5kmoFMpZTRvfov7P5Qm05Nz49Smb7d0yhpS93UgM1yI3bouwIQAOaDJqVVfXl0Okkz%2F7aQRBL9a8FCI1sSuSgIieL7Rw9YiJGkm0ZNuuFAzmhUX0uoyMIBr%2FUDWNVk6VBr0LAGeFwgiLmoyMI6G3QLi3NiRmDLC4eAUSxJ2e7CNgUe7gmBvJGWB%2FX0uo0Fn6RSU0tw93F7bSqXMs83Y6P0Ml94ohoOKZp%2Fl%2FwcLzZelvSJueOBsRuoKzXgE7H2r2hJHI6uX2mBjwxxTj9WeHK1Vy0WWnGMxlORUkWflKmIfah%2FPEhd950kwwa57NZiTocQwjrIpk7Humpd4j5BsT8vi%2BehY0XMbaCxpHBNApH3JZjjVc%2BMEkLAu%2FuAcI7VvbCWOQgbGIHJOhAY4us9UZTFokwyyUcoOxS%2B8tG3%2BHvlzph3oXWYCNZNMJu40LnScCk%2BT5wvUjDFr9%2FBBjqkAUYslKtrPX%2F%2Bfbr%2BNWlVUbFgCGfhi7o%2BBW2TbudO3I5lhEomInzZhSbjVXUvcyxuuSQO0Wgv3uGwnNT91yJV%2BJlyykSEIX%2BcGpHtQa%2FD4qtGmgYvHqL5Uc0kVX28%2BmljG6DIs2KoGsHalUxj37ip95ExJYWR3zs2LhzNITLoOKuVitNKjAq7Igc2oPfZz8Y29t4X63BdDolLbfGzyXSPvz19ERUv&X-Amz-Signature=abbf2adb4b114bff42a6ef0891d2d2812ed376a5d781b95cdfe0e5a238bb1851&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
