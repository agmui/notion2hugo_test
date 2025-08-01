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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERM3RPO%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnv324TXEVifhp3g554YbbYua7ILt4xHMDFzhTm0VL9AIgDyGIudnXRlphThag%2BNAhj0I3o%2B0zalfFPI%2FWaBmdfSsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHi4SdCNVWe7ptJRzyrcA332y5R3RlKJUxYbFg4NjJ6LqV9ylXRZS7MU7M4YmkSItnYdM4Y0slFuntfdsJ%2Fe2JyiOmbz2YiJ3YmLDeCC3joymWCjnRhRIcVsY3VMF%2F4xrEC%2F4OUAWVT8vALO8xKT1p1MqDJINpM833nWdKqbpWSYIW7yQK2BZgr1vTC4zIPITA%2FZlMnx%2B1CdnBXLBV9Z2L0D7YOdWQ0yqz0e4ULssQYdlQ6fE1xtW7ZY1zT50S1mIdF8AwMK4goyDzUsHUldRHVf1poEUOYAk5U56AGFuPsIPRnmVb8%2Bv2rsCR3O97RvMs2cYLJyQ8VwxxRdgMGNVPYLwfkd1yXMUzdX7oWnqnBH9fF49co4ebs6XcI7WnPbQSGnGzZ1YoszfZFDzA%2BYPgklDMIiwYC4E9Ar9THXGou1th554jxsNmRi5VkxVX9Nz7JF0Yc5ZEgbONGBddue%2BWT6YDch6NLY0mL3LC8ICSV8n6Laf9tjj4x6L07k36KjxFcCTIDLCPN5xcWkyYNoh%2Baz7cFHINQEqrZxzgA65qdyKp2fOPAbVasFTt%2B1ogBEP0p42GNBvKFD6LT0SOYUN0d3Pgb9AzpPoln9x0Q0KYEpz783%2F%2BSOHCqoBeU8%2FKoPWH2LBtDYGj9NiMFeMNXVs8QGOqUBrx4ltpXMcNRRu%2FFOVbwPS5VtG%2Btx%2FvSgQ%2B2RlrX%2FtjH%2B2Fr%2FGgVK7Qn6xp46RmueLryHbB9fMxSJpgJ%2BDDrwIE%2BFkDuWA7kt2a3%2BJsjpgD1reK048oFhq7KvV0kxdi1XM8oJcOX%2BH7mElwkv9Px33krAoJD0mvv39u6gBLmpagOSrhUDXKDhDp55UgLkpRHM3tu0UQnNwWMMJuxNLOOghzvaF9E8&X-Amz-Signature=0e425806442d3728b969dcc0c8fa498ae738018a4041810de2b78ac7a936d760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
