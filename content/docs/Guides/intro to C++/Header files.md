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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQPZTYN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCn6%2BwUSm418QXlTy7V8X9MXGvrvsoXucYLriUduERTIQIgR9qneWqWnwKisR3rx15QM4rGz0rLnDWAlVhuEg8GVAMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz%2BjkdS538f%2BCwUNSrcAyPGq0N6%2Fil0g6q%2FlFOfdPSx4BdcKV%2F1YTzj8peh%2FpaBtWtDWaScE3Wu51Cj0U%2BlrHp16xI7trKFKYTdMdPtJDwP03MMRRnrLWqS7tqrAqDnClFo8jJdpuzZopANUY41NoybuNnBVaXFNUUvZB490MHbtXePxYi34L21jmo8ijPITky2v0%2FwtUGkkHTWQXBl0h%2FZsTGBzvO5QlGmlBuBjT20j6b7sKYDl5II8NyWS4etkyw5yR2crr6nKcBlB1TfM0GrqcOu61dqsTuQmgmMt1Ix5ygDI4kOjuco81hktMYMlcrZJBwv9ngG5ftTlgnbFIXDWIGMxnLvxio8EmPxjyajCEbGTPcaEaWYIh0lF%2FLlFcepPRywmZVS7TPpB2rjKD2GBwz9doki5%2F2Q3isqXOhOSNR7s1RKk1lovIt6toDTGc2gjD53wPAf%2FbvpO6jOBCo8ynWoW8L3afa2d8zk93ebHdKIgptMTPg1IUad%2BrhKVCAex4%2BESpDygPOnOrZyB8jK5qVBGly05K4rgCV5VEb57q377uRhxs0jgnjjxAWKiWHrUmI%2F276kFBsbUwLtLMVehX%2FShLyFhRhq7%2F4PYhl4HfFmwZ7nuTolFG%2F9Y54Su6erax%2BhPQ2ScQFgMLz3isEGOqUBpLNgUzKhPJ1ny9OPbnVuDyBSXXNULhGJrfyRfHQH%2F5vdcxIeY%2FJO0jwiuvRae6Yqpvl7xmsAouK6%2F%2B3HUKR%2BJZnBUB%2FpW5MANG3pR9O%2BgZ%2Fk7FbXnZ3CCfqlf0DvSg2SqoeoJTSTEWolncDRrclpJApX1yOi4pt7ZCbHrqbanF8fLycgk7UXHs0nfYYbeGL4o4o%2BZbUeqRCnUzBNpNfLj%2BWVCsN3&X-Amz-Signature=40408522a11832bc0680ba5cbfb8b2b433f7373e436cf798d1ed528dfca93b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
