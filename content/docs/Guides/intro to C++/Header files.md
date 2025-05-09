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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSWPCOY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGe5myvMtTE8PSZvLrVfSlDy7KmQLB8z2vGSAdlgo1BXAiEAvazdbKx5F8dZOrgJbzWdYnBdu0R1WrHj8Yn0qcz%2BxTIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtliqFcksxvhKepqircA5cyqIjI498xcsCEM9MLqwngIhzyZDl5UvoppAx2UHE55qDEo75Fgpu6FCj%2BVAAnt0LqJk7WztPkHlbqcZJ3KLEQ2a2K5qNfjonRVY1HOfJ2LKJx8SfZxR6i3bqPvYIXzPqQ%2B0ogySvg2DP%2BwGRPAhvLncQ7kgQwBSlR9c7tp%2B%2FUZdcQbmERDn5x5NP6DTOhncGlZQGszNPjKMil0MHElGGmb%2FlywTI%2Fr7wvTRRauLYdh%2FaPiIOV4jCtK9XIgSwFmH277Rh76OSdGlTDI7A5dTv94K6N%2Fzy%2FXA%2BVKBd%2BLgYYpM3mliEJzL6x%2BNZe6Ix9S92FQ%2FQR7UqwXRCnTFjk9OQxk2E0mtIdEj0HDJs1XRDWASAx5TRZ6zsF9yHhPq%2B7LOWg1JwmF3cAZefnhra9yA8%2FaI5rbamgliAJyKgwEnWpA5ZrCC%2FjfYNiMPo4NWm6L4sSZVfzuebmArMJwGYuKCqsA16E6X71L3%2F57xqKj1M88I5bryMRDs2pl8oZC2Pg8ZDTN8RxLK3QPhY6uFTTS%2FBZB9niKhcEKxpHBoN%2Ble%2BIxpP2Jaz6o54%2F000J3p%2BF3jtGFQRQ85EmWsvVXDk%2FWWLOBv6KCWiirjk0uIh4M%2BFvVaHBEXrAjU79m%2B%2B0MLO9%2BMAGOqUB%2B1JWNcWod%2BMRTd1Y0rJOCPTAZgU5YAjZcJ2LDG7opc%2FLWBjG68eeo5MUca95e1sIHQrcYN0xODURO%2BE3eXbDrLN%2Bg4LCW6dHx%2Fok9b2143oDPEVq7xvh0GnknUHemR12eC93QKrtGT4eEByGST%2FoM9tQAFHPQXJIIgeyhfOCrqLSyJ9z2eQWPodudJimM5xmbrfhjBTrKfrOrW8HOY00GieDJChS&X-Amz-Signature=84f97f9110e9525e2837f02be2c1707706fa11861a09fc77f9e6fa8c02c4ce38&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
