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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6TQVPE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAhMO0GpHccaSjzlA7cTX6l6NRjFABH7jDeSglcDlgCjAiEAh7GBaQDo4XWBVkHKPs1WYJTHhhGIr164HWRRuVF3h80q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMPnY2nK0B3jSGja9SrcAyUk%2Bc8f6M1aSZ3XlflUr7P%2BGGNUmUzc%2FK8eg6P4ALRdIBtjzLLemvjdq%2BOI0RCvJbDTBhc3lNq1KHYV4jfeBXT34iD8wo6X31G8CLmfi2jQGGpuFNwdUFmsrX6kovl41dkGIrdjdCnnaupf%2BcbluoxlpFnIRgqXPQn5urvS%2BnlOA6Kb%2FPp5GmKJa4V17EXvHNXiVKRtMM9iLdJXAq8rrNvO%2BnrBQvz68DlhEgyxxghmeSw03GmKBfi10O6SSou4QB9FaWnST%2BVkgX0B8D9wLPznnBp1jEhDGSb70gaUDHM%2FLea6bPFVMmWSVnLPtdi0Ig2pVasGI632tSPs8MTD0GKB%2FJcDle9OZOOz8T94rOSC0CizVECq2BUXV06SXuvCcvPkEamAt%2BeFGY%2BCcMFrfK6P7P8iIqJOlCfwO6oUnip0wivQwoWkS8Qgjs36hQbWNBUAPL3%2FRHTHaGnGXEPDksMZociw3%2FvEBJQbkfKmqSAcRxIepwQitKRZxrvmcO53O6x66%2BWqfXPenkp%2FSE7OA4gcn85PA9AbPNMUzgEpe5GIJzEjlwijlNn1NKPqjK6hClA4YW5Og8u9DRIF5l7VAY%2FA46xRYGzj8OPIt2yLVO%2FPIh9KVkbu34%2FZpbyQMJ%2BT3sMGOqUBOMlan%2Bx38uJ6T0CRxQY7u2BkPgkoHwdRM1ukERLEEDsDB6wE8c8%2F7Dusa6wjtxz1X3o4cVimUxo8h2v4nf2iJPisH73XRSutI55HkPnFKzdCygwhIjrgyQx8r29JMelNNQlq%2FWPzOpceSGsFclJykhruqDss9pOrF0tcCN41%2BSj6g0AX8ROoPnmqIyEql5Hg2BOnvHMfwg%2FW9o%2BgVbrGz%2BSMEN6c&X-Amz-Signature=a428cbb74fb7545bfd3ede7bc3b8e3cfe1a766606cd271c5cd2f9dfb31d6b165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
