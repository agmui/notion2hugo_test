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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM6WMYMA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDrNyilpSgCotHVEOXOR%2F2BM3%2Fu24OuOkgUCRa%2FosyY2gIgYbJGH4gty%2B9ApQXVSyGWiEDi28ZHRAZTxZUEyDXVr2sq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAMFiwTFpMU38xdbjyrcAyb6KUA5%2BHLQILhB%2B7i6FJCXRmdk1yh9na4YTuFt7PWKtEhvYVx0P7IFH0O%2BTFOeMFxfqQvJjaJw9s6hgrJqc7yw1fHQATea94x%2Ffp8awfO3OtiB3Vqi0AQ1oK3wydhCr58m7mM6C6vogCCSm2hialysfUnWVr%2FFKuWajCbkc1ncg2qyBQeg7QrhXS4doyFernNukaQIMX6D9SNiKju8JfCKbj7JNVQaAWUnfOyNztM8ayzTWqu9Qm%2F2gk42jUgKZJ6RNo6eUufFcUC5CfaMiU5B6iWIyv2UKWzBJiFx4pmWy%2BIom1EiR22mOrEMVu4xUkjBNsjmoMXN0wycegZpMh3LPy%2Fmk0tvyBlefOQ2UXQkHJ7wNg1NcmPsVUwVcq%2Fc117%2Bo8NZOtO24fK1kkVnsIr%2FgaTjIJQe0GlRmJ9FaQYAr0lxVaIaTIgmJLOqHwv50h%2BM32GWO8Pd1D3Azay4Nlu2%2BFEFV3z4qm4QGKHfVsp4ZwKYebiEr4GygPKknMQlng1dxdzlnwsPdb9h7RoGBbGy5Z9ja4W96FvCbwq%2BfPQlaeBRlg3VYvPfIbU9iLQzfaM1gR6bPkWinSmgSvmrURRufCjFw8imO%2BoeeEVF9IJhzOZhfTpAZI6ra6avMLj3%2FcEGOqUBIldISUN7ukE1%2FWpQrwSVT0gBSldknxa%2FYtQZBbrGVfYom6H1bCEANfPYutc47EaO%2B5z6BQLfpS0IttRli1eef8EGiQB%2BRk2Y2ShOxWP0usAbqXWUyom1XZUQcvZbVVelF9sK91rT5uc0F34jkzMpaDsMAx33VrHuZtYZXFIyUrWm%2BrwOyAmZrhcar%2B3Xhc9qzkZel2HcChI7me4kBxDeBOzWWbTJ&X-Amz-Signature=cc7eb062a2eb8dc952716ec4e5a65c8f5d9e0de61840c248782919a339b75a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
