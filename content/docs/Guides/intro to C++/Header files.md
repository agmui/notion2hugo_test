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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SPDPH5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS3CK7AkpnPtFnQF4o4ciLC4IXasla0oiIGrKat%2FxWyAiEAx9BzL5IZjIq57Rsdix2EEw8Ehlz2QzekWE8OLYKwTXcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDETyYseezeWybYsTlyrcAwVa7zxFg%2FEefuSoUTg1xU3%2BER%2BRoxNp50LtMD20GUNo5duX345ZBNciAQIlnz30WycXkG8NU36QisBnef6KAzoKKH5PbjfrAaoOAxv9ue1dpfIF79mrMRKFqCTsMAGwDCC91X3DX5EoQ6%2FtfZW59B8m%2F%2Bx5wiHtMkY627Ye9lilzONwNjy7C4xTHY9ozaAQyo%2F2uj7ofdizvg5t%2BowWYMHbKxusznbvrMyWR%2BUpsDwjTGDOQTW71jdnXwAnAoXVrtTjhTF%2F9%2BWvBKl1AhH4L%2B0%2FdmW4PRsuwatBABtBtfc3mWJafcmHwPODD6yG6AOox9xXRiZroXP56BtvqDuo%2BR%2B2FI%2FS4Omg2jwNi%2BlOAAvpu%2FnJvlv00gfWZ8%2FcF%2B%2BLA6LXFOAsKN6Qn%2BWjit7FDG7GF%2BxEAXs2I3MxK5goFf1cnq5oz0CGgb5ZwegfB6Bfyr6%2BMG6yR9%2BuNOgb7vCIrxMwoFOzLocGY7x2%2B%2BnFYvJVAt1V8HC1%2FfNoLAB%2B9XIMkgQ71bewxiQLgdeTMe1ABrHyHuWPMzsupWMPIK%2FlzdU%2BlWSZwByoDoEpKwY%2BJCpHYUtjLJjtQgBfOmqhZEKRsURDdwKLAuamIObJK8QQkSa3IcmRrnK2rq2uacRmMOWC9r8GOqUBJAsJZhCOz81OsnCoyrj6Ibw0BepkC2DP4NdMTftStk9Cni4h6OkRAQZwrBcIIfZl6Q%2B02Iv3MgJhoOGUBI9P0pBA6NOUMXNyASZNMiy%2B0TeDkM33iZiVclD%2BL7eGXKNeGVQBlnQIZot6OUYEmlXNUYOnH5K2OXa7jJfxjbXfH7WHRV3Uz%2FIRlciyCeqKt1GQP7Sp31vTQw%2F6Ud6j8q19fn28KaGG&X-Amz-Signature=157ed7d36d3bab6e6375a7f689fca7bec2d96b771bbd0fd3f12f95d96c97eb40&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
