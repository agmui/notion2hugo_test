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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5R6SCZP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCsAYZgSXrkOakKjPKuamii0UBdyhLDoDtqBb2zS5J7AwIgL1MthOO%2F6WsP1dZLZWiVvAS9EpOpECZflO0BMO72LUYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNkxKzhZz6WaA5sYoircA9%2FX0DdEKLZuOAgOY8VNJG8pX%2B5WGCdyqqdmeD1a8z1hGevBI58Grnsa9aepkvDB1ysA2HsIWl998M6z9riDngaCx8WN2NVg%2FxRQOW0%2BKwxRxsqTqJH4YkmzPzhLMRRrycab2u%2F%2BYu29gALb3DNaMSmVnZiSIgzxXpfzk1iZ8ci0VA0rr8vi6u%2BQ9tT6ydVnFfjb2zhwEwwBg7pThlH4bWomXlvb6K4KZXaZgFUhS%2BQD4x3ll4M5ME9CTsuF1W%2FjNq%2B8Q5e3dMTJX1izJVvwevTirmedcI3W7%2FYLaCeKCBW29Qd6sCY3fHctZjBiKw7tkyMZ9CqV%2BJAM%2BZuhIgk5cZpPmfYfCO2w00hYD%2FOvX%2F3ZP7fFlpWS2yffOW9HGZs%2BCN%2BVirUbECy7DYpCY8V38DOJgjCm2tYosGQSHk0IILTPq0y3t9lf%2F%2BKZwPD59ZL4HdbpL9yp7ZzLQ1XiygRpOJ2nJ26jKdC1yTQeCXGsFk6E3WHArNGYnEwSD4iWoKXS%2Bd7RKdN%2BF4YkcQvx24u0NBbA%2FdxO2tI9u6%2FkHcv%2BseNlhTjrDWxBWsXALC2t1mM0rJZmUhsYICyYrph5ua3DoaUx9wST7w8vAiFsWv%2BC78JhnEeXdsmozjp8WjIzMPCzucIGOqUBNOImUXxhkxoEdUQ4un1s5lisJGxps%2FOFhiW0t62CR3albuzAB5EXW93k97rbn02czb%2FPCA1nEYnpxI0qPWGMCY2rIA9TTURI2omj8cFyCRsm%2FTooVOjuTfn9crvOecONZRDPBM0qEhrvINTseWVHU0RRNyvSaQuQPIlXO%2Fc2kwbbEu5N4MQXd52hjFvjTNzQMsNEjXVv9rTC%2F7LZ%2FxxE1PaaiPzl&X-Amz-Signature=2aaa36edbcfeb6b9b9510efcf074ed86ff84be8aca0a4c48f65659244d8f3d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
