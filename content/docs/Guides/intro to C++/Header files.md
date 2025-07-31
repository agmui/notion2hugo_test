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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQWDVN5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkpbzVFCkN2CDNN7b5uZ6Ips4Pnfpg9d6TF%2FlHs59UpQIhAM5d%2FtjO7YueGhoJFytx13UIELJF10xkfwh6HUaOoD1tKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYEjXUJi7SzYwCGksq3APXDay9ictZ%2B%2BE0mhz7zMVXUKNXdBXOvMdXqQQKH0GgP7WGnqsi4YUaSbGKwoq8CDug9RK%2FcIcFmOuQVqle9CsSboY2qIulU%2BTsv%2BST%2FE9eLqbHntMOtKb2Rx%2BrZjZcY9PA%2BPV3LkHsazCzvlIQ%2B43RlaU5SFAqpgBiyKqc1XjIzTzzZBbCYxvUaC6yxi0zAYjorWMEGZPytiV3kPf%2F1J2CUdHd8v7ur60is5SKaHuZ%2FWu1swHAukRQkHrghCRupjOiRi1q0OYHQeNkUBqwqOGif4BUNQgvhnniTZE%2FRXJJYePk333xMyda5El9bly1y5dDpC19boKC17oWVWk6sEMv4NgMP6W0Arfx%2FX2IDgHYsWYM3BUt7Im0YRbGU%2Boo8PnWNaaARi4lgSEvAUAuHVRSDUyCC5ZYVpdmcd9jNCfETbR6VkCo91MsEn3ANQoGvnO6SSgIrvHzcl%2B%2F93QmKEgtCicnmm0SXn5JloKwd%2F9o1EfPAh9aWjAFBmm2zpDgNSvJJYQ3w1WV0h%2FCPRR1f%2B%2FRYUG%2FJidVT7yy1tgFU8RlMkeJz7yf0qpWZiQ8nqgG%2FmsFUbF9IkaVvpzpQvY240oU3s1o5sMaKXGNmLPTDR8lxIngdAGItJ8UBEDC%2BjDh267EBjqkATjUx7v54%2BJCxHpJfLnpR5h%2FG0GDMBkQAml3uhllXmvf5v%2FIcrYu5mrtyiZaUqmj6%2FUcMGEX0Eh264GL95y0O2FHLXKo6HcYysxJRuyjcyBjbeIfP6tes%2BGCGMj5m4tssKGYb4O9k1GDa5N15Q00wS4u5vJkq6zHP8LfmeLfACI6btpX%2Bgjtu2AOFc5p7%2FNFxW%2F4lk3YMCGRr6cbGEq3h8Hjr3A3&X-Amz-Signature=552c4acb96271b6234d07f5db9aa8c958c8114e43a481d478c4bd4ea7c0a7447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
