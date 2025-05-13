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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B2HSH5G%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDlp6vZCIXLgIQvoqNcsoM4EGJfRqGbxkdSw6IvVfkuLwIgduHIO698CkICbHM1jPR77KCVLL59R%2F986VTl0yBs4IMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsOgclOC2fMmjTOFCrcA44GIeo5ui07mQF9vT60WfpkVS768DchyE0HmIbFPZyacqHbeq%2FUdWbdViZAZSGtRpqdeU%2FvUHU4zMf22AJW7gzZn6Msh%2Fh14MnkzZNLmVEQjSg5PutJNiBUlZDxcwcsiwi0QNnWNx8S3IcgP6YXxEGMtHgQENdHk4WoqHj7RMA2DTfshiTjuOK9CArH8oAx3hkvIOXKPmUXqQJnw4dkIVajYRs%2Bjpj4XLc9Gt3q%2FkAT7f7MILcMkMTIxWz9iNBrpGzp8jhMx2Zj7CzS01IBTKzQM1vmk075XSP16fDJ6HkojuD9bDfY0NJgNnZHCu6I3RCDmKmDMzxMnr8UKelX6I64A%2FiJgVllxe6QzXmG0WQsmP7u0t5TGXRXW%2BPCXFIE7sSIpXPFiGMelRhWwhrOORALHf01Q1gsWkUNENZ2dUEkGpqi%2FEsZYzxNo8wT2di5pRJ0QCRSqKlPwR3%2FRj8166SFenAKjx435Ouoe1tDPYXklrWP0r7FdKdffcG7wHzB2TRo39LeD01XMpC3B7ZXWEg6YRSEggPlwzLN7kGKHrK8L3mnLN%2FUrwt0i697gPrqCwLh3Htv7M7rK1UhTUyF7kbQ%2Fw87ZUS79M8I5AGSDKhfnzIy4Nsajs6lmhGuMLqRisEGOqUBZCJpRQ4FGrZ124xxR%2BBY93MgTyTVm8%2FVZ4CwclCqlZjCcKmbnxq%2BUWZ7ZwCglZApBY1UMYJtWR%2Fov6FRTGG7nY%2FK0eHR2A7azc%2FK%2FWzqgEk%2FvmC1YSqSxXP0ajIZCe1gRarH7uqQBWgPeIFBuVHA6HqBXQxkjIAAeFUIY7%2Byp7ImZzBFojzxP00oOiNOgLFZABThJedUhEW5RZhrkYsx2WIErLb3&X-Amz-Signature=be98c5423ea0880ebeabe35caea1a24bd3a07d60001e6559f1d6b524d3131770&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
