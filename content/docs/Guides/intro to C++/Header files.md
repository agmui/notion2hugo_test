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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIFNCD6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDI8Ks8fDJv5eItIZGM8KSTEx3xNWzP%2F0CnRbf04%2FYohgIgep5%2F97LJPhPbXaMpXcvWb56CGl0CaaS7OkNVod6IbOYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL4tOeoGondNe7GDACrcA%2BhsqN%2BcWoVeRjJJK%2BZ9u0EZ728GYYZ8jdt50MwdQSGGW1zXAVLae0%2FErtpo5rrq7mK993xKHuD3d8Zz9XRVzIcbb%2BtYxFCyFa2OKcxOCgNa16jFGagoH12RRfnb%2FEunThMZ5zMtbuMKil2%2BM%2FqcDhpWDIJh8LFmnMMXi51jPWaHCpymosSSCvRDeVq1n%2Bd5bt8iKNqIBicNO1kcelsPm5efqPD1Vtc9y5NxiFMZe0mel1qMBukZCYuAiehY5zPc0tgezFss9Yj1qJxoqAPWkodFZObY6JrXEPJ3FHHpbWZZQy7Rum0n44PpAIv8ie4xNkkC2QSEWdUR4CObYOtvbzfOmxiNAepFXKRqu%2FBToYq%2BXmHPgsYzNopkgsmyAeX2bjSCjWpHDtFzV7OUaIRzh9O%2BYwujCgzpsAEXbHudSIw5jGdinaOdOGrqLrkbGqykJUCQ6IMSuFo%2FSQx2ndyNIh%2F288wjcJA%2FzCZ9PF%2BUGM%2FzuKuxiuYvMKvrtxgF9F5a%2F40fYQBfyrvqExGk1e4Kwub3Mk%2BOKKHW742hF7Yr34cLHekeSeVBJ9FCsvq2dm3IxGhRqV%2FzvV9wB89El07YMYT%2FxVfNBOcEFMzt2zmqLCTofhREOTXgJF%2FidbG0MP2Mgr4GOqUBBAtcdYSOxMtNcXhDqmd8Zb4ya0ITUpkbpn8KlGRDD5fqHMWN4LTkJ%2BGus%2Fkr5XcbFxVXEJPsQbDheH2caXri6qmQHWpr9v%2FFmI49JX5RjK3%2FIrLRR60l9fgy%2FzLXoHpomInOsYqy5ND0eZHc3a9QVsWEivrs753jsGQvHuAJxlZJjCiiscBWDXjKixkVd0PdkpGjN1phSpv4lNtOj9HAQRGXmYLR&X-Amz-Signature=6a89971f5aa9439d89bf80942aedaf00d57debb8ff5f8e023782f45fe7c56ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
