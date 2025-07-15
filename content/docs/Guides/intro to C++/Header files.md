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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD2EELR4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC8yW3VyugHquLFwk8BCR%2F2c7gOnIJvT1DnfLw9Fo66YQIgBnDMd%2BQ60a2JDceAwia0oejTx6GyiJnYj6rSOQmMxWsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJF8mSkaxFjqc5TVQircA07DgSuuczc0ix9z04bGybmDe8yw27kPbi9Cujnl0vjVfBDO5iThQibHGKXAZb2Et4f8H5v%2Byl2c%2FrWOK1rZq1PhEZshZ5UtgeNbNpCQzs0f09EgHsqKdpYdjlf8l4%2FnGj7zbBnH%2Fb%2BjsgN%2B1Tw152bg57HsS1OxQaoH%2FHt8uEq16Mhdm3gKSu9yeEjK0P0dL%2BmybPmQVG4Fybn8kbhgfjvYFiJpukuc4FJCTNkQoYoYXDlEY0ZU1fDG%2BcoSocDF7ICCCx7A1JooHYVhQPoT5o8omz6m%2F1s7NVhB1OaJxIbNzelOQgbW2F8f1mAFGGPXsH0ElzYyWjoVubrHyk%2FzPTO1zJK7Gtct1V48AGEUE%2BOdyDmOG1tp9l5kpnXfJXXgrUyNVqJZGbTdVM8IS%2BFbhlN08B35N6ZRvUCaV%2F4GGbTXnlULDds1EAY714QbpqfddhZxucE4jDipwCtXAPa51IZdpDnZ%2Bo14eBU2BS4iqPUDxWkezUJfiOaSPYQ9vf97lcw9Cu5YEjwaQ9Orhi%2FeBsQT5xL%2BNT4d133pjj6JH4NKeNieH6ca7bVhrO9uPdej5HK07zQ4tLmM7Dz7GTWe7Kp1BpQqjCF5zVV%2BcpEbKaUcTIEgVYBm9y7ud0wOMJyq18MGOqUBeYE5%2Bha3EBFIijM5qHT2EnVTHO22oOTH%2BJPwuNbjF24jXiyoCEvKGwgOzNNeZARataXUvpWNMIg3NEmbjqrJOuTzoINc6WjfURapbljS%2BKdzFLI%2Fm6%2FX4OhCC%2BcUWsSyed6c0aGwy%2FCsL1hZXaYJqmmVohyERBnP7ts5ad87YfFYIqIR6SXh98ddqfHrpOPi0u%2FAiOcb4Wy9OX2iWnUHeu%2BB%2FiAP&X-Amz-Signature=30c00e52d06747ad17cee36329a067bf4e2723ab178ea4e9670950128cacb22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
