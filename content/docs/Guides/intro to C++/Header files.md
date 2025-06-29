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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOLJR64%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH30djKg2VXvO92T7fFldZwzSbWR0ZxkmVVGNflnW3YRAiEA3PA4QUae7l3InxEP32Vvk%2FMi5Ye9tScMzF3n5m%2FByX0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMQ0w7Okd7YBRsYlyrcA4ywXcsHgdEu8i4kyWHT982QAyI%2BmPc%2BP3yL8d3iie1azCZ6HrIlTgHoBEC0jIOFV3b2ijQUEdFimKvn%2Fjoz9wQUg6Cgggg4HtU%2BX%2Fy%2BqZBlVIp86XL9YdHDgtVuTWcpZAUDy1bCOnyMoa9peDrXiBtBwrs4%2FllFHozVSYYvb%2FQuYENcNaqCcMGtA6KX4Fqo9FWp%2BOtJmCgR0g5XG1hmBbi2ciIKvlxU3wgSliEPzv4%2FO6%2BbBSKwVUjAH%2B04A%2BKJiohvgWQA1KZVTyAgH1Y6RTsbl6cqyU%2BG9lusRhgArIUHU80IUjlyNPFMlRayG6TmUh3%2ByWVibGhcalEmRCY%2Fg6X0SQoSpWF2%2BzLhosCqBbz%2FYtT%2FEorhlp5BRjvTv%2BbCQgdeCrmwWYlmjvVO3VH0eq1Z4X2D1Qkx1pldHc2YZvtm550tijklHzi5pSkJK%2FWd0Br%2Bm2CHU%2BAjnQScVrAMHFD1EyW5n57PzCaRg5I1wOOGJDkzCJD78Tw%2BmpRnnONE9hEPkDR8%2BrvnSMJ0f75nASg478pvvOaBMG6qh1%2FMIV252mVj6%2B60XVZrhWd1PznTq8LGuxFaEpNLE%2FaTd67C6knJY20m3YlSgP2QlSl%2F1vf%2BNSkqHUx9aE2l6OZBMLG4g8MGOqUBjuIyRshV0YgmBVNxiluli4PCwYez%2BUWZL4bln7HnTJDWGxGkBjhEt%2Bxv%2Bv%2FLBMqLOx3s9pfJ1bTrJ0QGjI9xMxeIVNtjcCp0dOclVNvRnjkgjKN7Uzpg0FSFOp%2BCW9qONAGHRXoOErxf%2FIqUInvxHO3Wj1dJnb1DzIa4v02qDyFAKt%2BFToc6AlSWhZF4B8EkrrgO9a6kXlXMV%2BwJM8tOxG%2F72mUA&X-Amz-Signature=44d9d3f1762091e8c03cb3ee1381f6df298828215a55b0567e77c46b4cdeeed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
