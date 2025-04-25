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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URXPAVF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCohAikLnIzMqpR1NSza4Ayq56OE4IVYAjDd5YmUGfT2gIgM%2F3yyBUUc%2BWI9iqiJRr6IRSVHnjyz0vxqfpLc64rC3Yq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCLslj%2FnmKYCJwZETCrcA%2BN1Lq%2FF7WN8cofNmZWIDuYTDuOozOS2Repyh%2FawiytUL48mcIyHGVm2PjMGHmi4WtINJCaSULpPCm5MAniCd8gMGjL2vi%2FWod7qZoNTI1i77wPAoAShwjxts30aTQPB8WnZ1qdxcNf4x4yoRa70mkSGgqve6CcYBL8VK2BJ%2FBlHm5RBjyj7fjq0vGmwmbndXasi7A7s8%2BPM9Dk0QtpRr8ajd7bp99l47mZAMY75PlrSiqdUtFR9baa0RbH0qf2Gf0LRsPs%2FS41D7crP%2F5prR7QvAOVMPHqwgU5iPWX9Qkkf%2FZmkMoTdII9X1hwqGcOkufMujAjocj419nvbkDPUyW4C6GEhTStH8bMOewsZs%2Fuj1cci98uYGuOl7YMnKnM%2Bi%2FrubZdMFWQzrTFleIib%2FzavyYr22TMKJEopWZyhM9Ra2nZYZUd%2BAUgABDgA%2FlWWa4xc%2BWxBe9KYYenm%2Fapf09v2gPkjaA7tZdVcxYHnmDDUPjDrX7qJqWr8LNXliUV57T0R9tQWtsqqoKvPjn5LYtrd6MZP4f%2Bf4q75o%2FgpwHGXHKxW3akZ5mQ%2BSvyP3duN8wK1ymS4HFcEUGnNYXlIP1lml0CxEKQVgoGofybhi25ygu8qFwpVlLqPiix8MO6isMAGOqUBYBx3uNmczzKz9fxiGFzc6e%2F76HODdPIrmzH%2B9lpaLkLZfQ8%2BKFK1%2FdMX%2BqUKyaPCFIZzEv5gwvpXTtzZcFzSdTJfkl2Bo%2B8RdJJ%2BVWVBSwdWbOvFRUa3SjzW0Rd%2BAPtEIKlu7Nlfo3BLDccqdMdeAfpPpSwWJ50enroBi4I0Vs93V4hAH8E5p1LYZWMGqYkn0jbC6NGYDVqCA34P1Zkp%2BNYTuc3g&X-Amz-Signature=60c49d684242f521680f4a30894cc377ab2239b6e3bfbe03bbc86d3c2533cc98&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
