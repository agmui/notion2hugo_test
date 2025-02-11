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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L5PZ32L%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc4%2BpLjEhN9ONedIIa7WuHIYxU9TFttEUUQZVgBoSiZAiEAsivWnpE0wB%2F40JvnYNjarzewRLRvLSqcGFwsmGRAnCkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BwZ79peeTCjvA9SrcA7HY4QfNjmnjDat2BxFa8UjrgJoRqBuvMmWuLdbZRp9w5po9MFf7QM4J390Stw5jOlIBK4stfhpiipTNgZykxokT6Xj%2B38W0mnHRHIvn6Ab%2B%2FFGZuHpYHVm2dT1035CrC7i%2FlHXCHS9MP82XMDkij%2B670bqfXVinciIVbVf89LFEGiUsDpg1k%2BokJ4R9wTMyTo70CeGH%2Bfogrm0pRq66Bn5JRSpW4gj45PIy25Wfn8NpX%2FW2dX%2FUaEUCiVi2KRrHjZvHRgeGYRa4rS96qRiSJgS%2BClV91hJ%2FtOiaQ987yFgP50hJjMQkprxs7Pe%2F2XG4GKhaVyBr3zsjhqvbNOYiNSiyfYmMXAjtu61IBEf5FHkofps%2BRJ8kxveUgpuh2F%2FTFGTPC0rYdnQWO7mE%2F3Lm9jIP5RfrJZqlJgc7fE7B0kq0TFUAQ6qQIoV7qM2j%2BpQNTajgmpE99s9IjOpOaCSh4ZyGc7ymSuSDHuFGTR8MUkOjbTqWrtOY1isZveb%2F8jXfkR5QlgSNXixZgFldMfIJlctqvdpce7LzYTyTPZMP7799rD0IG5mCNx6FF6VWltj2bbyjkbEJpbyxQbkT0xHZBjWIpGPhDPaL6PjATI9%2F3vTYfmM3bvOiJpkBPn1UMKPKq70GOqUBmbfN86iYThbl2eBglemBhANKloFsdfkILGjLnBIIkxDYSpB09CGMUoUJhyRBfH1XFoLQLC2dYDoAh0p8Nc4lVlEu99iS5WtAgLSnoFzdnFk6gM9b0QZsZUADZPvBOtr4VxVHg%2FGf5RosyQXKQ2%2Brw%2BCCzwxXp%2FE0KiVxp4jSoXxX2Sx%2BraloFd04uNBufxvoqGxIUINcaDCxRKnp7MwPhGE%2FGJFn&X-Amz-Signature=af4c30ab2b139ac259269ddfe3e09c7d268223aaccee485dba520396be5e2fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
