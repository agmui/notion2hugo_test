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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVTB35E%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsf7r1fyihyFenpoP%2BwBD84PTOGBXfex9cYdl%2BlDOGvQIgB8BlmI2hUn%2FlShKo1%2B%2BmHUpb1DVtXL7aZe2707tCSjAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2PM1llH%2BV6lxtzLCrcAyLaBnDAAh3gKF4BMll7ov7wcibkh2heDoc4TEJZplDym7AA69mW3x1nr0blhdwCqgGR340kJvHz3GDeTYippNcpGU%2BJYfWfeF5ZHlIAkX8RVTlqBzf%2BKa3DjpYektPOtK%2FbEVGC9rwBME44IXFX2eWI3vWSNQqSXY%2Fa6c7TzDH41AJrBf5nuYXwFK4%2FhO6rAA3hVJhc%2BKQlAzJItmNctsreOYPHBXYEZ2nJ2VsppLVtIUSx0Zc4kr9NnaBHNYNp2d05NAIl0nh%2BDkGIbb25YdN%2BaVewB%2BomG8xtH2VF09I6qXdLUO3VRlToeRFm6LByxC1gZ6QAtnrR9oXoIvfdmpbl%2BHFvA7pyiH6liFgH0AeA3ykR5d7Cak31myTqmUlnIfd9XxiDxpag4RyrBsuBWs8ACAXGmZ5OO%2BGbeOm%2BXOiQBNrgO55zVYRePni9zidEiIn2yLvS9oMoYqSyqGfEFYX15HLUG8Gwj63yU3AOtWE1xpuppOCaNoCr6mvFg5iszk9g8KJyXEhz1YRRAB05gFdDRXX3Go2fOWUJjtRWSblWnwuR97SROCySowwc8pDSeaSNIL%2FYHuM2rVNQDnkGPZajTKAogIC0cH06oa02T%2BCLovob4CZSWi6AUD6wMN75pb0GOqUB0X7hidgbYDitGpn%2FP%2BvoYXX9NpenfMo%2FuCAeW4Ym8NMnsicSAMrdsIlHbWPL4G82jUbVmmggvbayDaT0uCfgQnMKSs%2Fpf%2B9QjYBkHEN1C%2BxXlGbSM7XYeH96ydj3mfCSRT7Bbqz4egEF%2FDkbPJeHGIZJdZNdllNZVNAPdw%2Fyn%2B0Nw3LTXquX8fH8R1GI9pM2L2Iuz3%2FEyRhYG1xROqjp%2BXbMj%2FdC&X-Amz-Signature=f25518b630a9fca5c5361e249ccf5275a0811b2f14aec22c2f9d2e003244f22d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
