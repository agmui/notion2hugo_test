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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUHEJMIV%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDjolDuRUmdhYXxLjBzDPMEDjlkcLZu3NaY%2FvUkUC6V4AIgMheo9%2BYjsMqN9KrXHiA8l47K5M0wAwLSRqGwX3Fc0QIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwGtjIcRvdOqkpM8SrcA%2FP%2FzJaUbLCOYjmEt%2FzgHaohObZdOWf1hf2fYsG2Kh5Cfu2zoyOjfd4VF%2BYx8Rnf2TfGLoYs5fGNolRa46ZLpNvhrTx0Bi91a8glqb1odx%2FwUqWobWw7Sui%2BvrKDj35ku6J7Yn5A3g5RrmoVXWDeHKV0RL3fH%2BU%2BjHC8HUvxCnWQdg42g%2FEqSB9FkfqDvfJdTmnjvh4yIM7F3A6QuNL7Rw54t7sWSL9WPA1HN39BAFapwJ1s2pnWRU95KsEbZ03%2BCN6%2FhB9vfRuZEuZOZ3okIRl80B7%2BsMm46ZNteHkvErYDV3xNjaTgjvBdN4p82oOiaOc67KAfUmaKJmgqpUBIzPvG9ynF%2BUzNcvz0X6VMG%2BwfVIdyFYIcPAnTuuFdgpK%2FVHqeLNQnqtSOThZRV%2BK0BzLN6FnK3yTuKsqRAQmlzOJvepsE%2FeR%2FPpp1gYeAyVvo7a3%2FJiUTa3zMf%2BXleP%2Fg6kAr6n8yn7lcFXoN3a%2BWPTvFBLQpv5PG3zYkQ7etWboYHDq4wrmE%2BcjZlOegsYS%2B%2FvsyqlHgV7kAhnISBnPUA5x%2FxGZkJdEHmamziobtiJcL3OuWKDnSMbkXa1f5bWCvJVGJ5IXDcGVp59Iaivt2fmBmXeY%2BTOcnq47C1DndMPuZp8AGOqUBQ%2Fm0s8E%2F1pGaIZZXD27E7crDmr9ZLKeGDYkDWfoJvJlUJFYPiW8frsmz0zjSdx3wCVfbDEBnG%2FdzoNN%2BNdfC7oOQ0SLBYxIsf8uZ8C34Usek78Z%2FEV4%2FfRKdAocr80kIFfuD2kxHQlZNn5b05pijhJdlOrLiLWV%2BH8BVp6hTvk8Cfd66ozX1cbH48%2Fp1KlTw22%2BfpKXcwxDAg1LVt46nQzRDTwWf&X-Amz-Signature=4a8b15ddf43242bd9aef37d44ac0e9ee387674a95344b22151302e9d2b74b955&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
