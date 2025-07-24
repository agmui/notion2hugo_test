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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3KG7QXI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIE3G%2BrseCp%2Fvcz%2FM234q14HS8%2BPxzmdaiRmZ1AFwYbv9AiEAhmsllsgNNaPCi927lQwaQQL6rj10HVeGkp2sFdu3Gm0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPTOrswk%2BANefGAa6SrcA6J58IxSr9OkLV%2FzAhKUCQQzd0xkMPwbNFuI3r624EK2YsPRoUm7DUnXkF9aqLgAOkDqxmSqOzbxb8rmeu8aRgny8G%2FLI4BZHbBZYxsJjCJiKKa0s4T6KyKz8oXvaDTaM9re5Pv4mLLJOTZ1hsOmtzGqLE3wwFcCEbktxWyfNDAGWY8Mua5vfpkhOdbW86Yi0%2BD845ECeFI0tyRx1l4juqZNgizBH15GIvfNDzf8aI7fMjkPlNEDR8lgOxDyOlYjWRggnWEOFqSimf9Ux5wpMxqG%2BDoXrdthMaQGbre7e2ViFDp9ty3Qu5SXtEVrMtsAdKHhjLZ6MWJiEPkUQ1EeA4%2BhjyS47pM%2B%2Bm9wMedrrp2JG9Ca1PIZub7Ikd%2Fbu%2FWzszWf1Ec%2Frv5Ep3H82%2BAMRPriETcrfRdEI0vCkCwWr4NSAf28DzsLWjxywwqydbhq0DutnGk84uTGzWIqMw6p%2B1CEEGqTdAkwX8J1L%2B4yyWaT%2Fq23boAbUcmvbgHJyPZPo5zvDjxPp2eZAVZq1S6qapFJ2NwBDmwhp82V%2Br3168WuWbE%2FZVxcCCiG44hFkRWil3tQunHtVN9RvnyX8hyqO7LmUShNJKLnyOMcwidY3hihrjrf9q9AylVUy7TwMPzTicQGOqUBExwQZ98F9epHPT5BFKMgXrlb7Uq7K8GgB3z0c1gbq%2BWKrBAhpol11mhDS4x1SrQhK7BVP4%2F2Q3nAPo0kkHFgNCux%2BiDU879x61sWPI89%2Fr%2Bb5naEfNM5lDxL%2FNn4c%2Fu7PUK10aiFAa%2FkbCING0wAB8zyscDxlc1NWnRimt52CbWuU6QusX54gHuO8vv39i%2FdUGpf7zmRsdzZpX%2FFP%2FQ07vPv7L1f&X-Amz-Signature=880a6303f7b2d54c20cbed4987c3f6dbcfef58a6b1f6b2ef55a23ffaac8217d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
