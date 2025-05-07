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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRGV3E5W%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2fmPixCnj4uQEFsmpATltf14LP4TVXARydKka1BaQxAiEAh8TFngxintx62wbDPY4Ta9MnZJK%2BK1jJknkQ0hmnfcAq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEoSzz9Y4LK4h4JDsCrcA3Ls1iu%2BP2zfQXDtF3TH%2BybDB8479cY%2BhMylNAfWyDD3D%2B2akmn0CTTX2EsrTMtRtvjJZ8aTIlkbjjskkFlmgfI5GtvN8jcxM2NoPZwaNaBO39hUK8oR1Q0hwfKHdGeZrsSpHYjHBMPE98LBGu9VwCE06Md1dVj79j6wEg0ZpgA5Vqs3tddRHf5Qxl%2BJCw4jmIhQw30yqJED%2FtijEfchDRVI5q1Zr%2BOfDR2hXmeIbBFmtS2x9ER6gwHPkrpKxbF72B1xRyo05i0Vaa2KXr3EQHg8o9mrI3qYaGIw5aOJA8OUyvwbwBaV5iEjkJ2MIcHS0WO%2FK8dzxkTO6xpLxhsn37cgJ74fCbx0qhzWJZgcRtcw%2B%2Be3FdInj7wM8FvD5bk7h756KknLOWAluB5xPzfGNs8uQ6iswX7rE3pxg7ppS6xk75ZYirntovCWLH4Snl4cxm7PkkJAgrcr7AQ06uDN%2BSnbxoQpXv%2FgUFjxo9zeNw1gg7ZNPghOm40VkKZnXZJg7%2B%2F6vT9IxHm9ZQvQpQML2LKpEIdZQ2izt8A%2FdZlMMOs3ERuxZ6rZPT0LSsgJmvWrmFEyhwhko4y1Ooa0HmOsDtGJckbM5C%2F25BzzVRx8gFtwESwDIpbVOT9uP%2BMxML3p7sAGOqUB2AsTuovn2gh%2FwcSLBP26tcRocZeUMozc4tiZGzNfdRpHPPBI5Ri1x1IaegurQurezYQmDjIqAaGcB7yX4l1wXViiprud7JvnrtZQsYfc5myPkBRfKedmbd1lc1wkRQzFywZsIri5HM1OO%2BFKAxKyJqONqD7OsLK%2BrqEgGiDx0SOS5Sw3%2B5n7AyNGsw3dW25infW1hLWDSa4HTEeE2PhwdFhn9UiJ&X-Amz-Signature=254a2ac52df4c720cb2c806c43b7bca2f6e7ce2bbdc74e6c4b6c407149f36b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
