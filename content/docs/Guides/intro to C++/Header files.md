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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3PMVRW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEd4BjBBpXlRLRT9LmI2w%2FEK4JHG2bzQTk7tFEzji4oAiEAiM6QOSto0dJfF%2FD2anN7F%2FGEspqSkHKJwgKX2I9ee%2FgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrmfU45WBT67%2FQb2ircA%2BHOeo6D4jBhHAipUA3lquMqcHiTaAFkl52hAcyF%2BCd%2B2u9eAZkniu0aTe%2BgywmmYn2k3%2FKC3SXaegVUMx5RaCGuYzWnYpMDku5CULqOrqnK9fgY%2BQjx%2BYQM3PMs%2FVf6uSgVcuHP9Jg33Cty049L%2F8ifBO%2BQquIvGi4F6%2BQOXpy2mfiOVgbLKKNfVfn8oLvJdYYosJADBfQAefKbdvb%2BN2Cw5FMSUPi76Tsz9i5no1svvjSKz7KZd7%2FYrUPeKwXjAZnTGpDtLY%2BRR66VXa1w%2FXi84rnpDMvTU5vLs2FHaUO6%2FfOtybGt83yn8Hh8QEFbuq%2BKOzu1sUhIqT410A0BXbtVS%2B6njzN9IDXEhDIBuv3f%2FVy31Tz89%2B9Ap3FmQFi2gKKY192R6eGuVwBJeOhL7%2F%2FIO89bQVWVWLlN0oaEv%2Fqjyn4izaIQR7VYclWdDqeBYiLYbW0z3BaJUCliHHj%2BQ5TVTfVr7nv%2FemiNvBi9yByo71PcCmrXksFBc4WaXLSapWzJsR%2Bs5j5vcsxmtpt26n1NH%2B47dLqizwY5SFlsapDSD8gdrrvHeGR2JB%2FC0Q7Lfva6mURVW4ap7jUvq%2FxfRhDDd3hkPRiQyN4mIXuklx%2BEUunT3H7NbalIqIJAMPD29MMGOqUBu9IY2K1Sh2HqHqZGm0kGDNHZc37FNzu%2BhUaGT4oyM7halc6VhKRGe7NlaBmkpLEuSAWNNNB8nixNXBImWFhl%2BIljAVXT%2B9wryRVxqYwKVD3vQ1yfZULOoM02pYsFOqNeEM11p1PSjUv6U06x%2FPePoNUTI8c900eJJMzNG8exWa8%2F%2BuY%2FmmznrSUVg%2BgSIM4cLZqikE2Ruqd4zzLGfKprejplx0CC&X-Amz-Signature=0c4db79f37f8eab2778d3b8ccde5f328c50c7cfaed5547aa4564299f6ab5cae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
