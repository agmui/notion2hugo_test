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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2DACTA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ84i9%2FE1KHSQCvXe6KEX%2Bzh2N3m5g0PURW1krxi6oPgIgAWKBmc2kdDkLfFeIOfOEZhLZqs7ZkNXe%2Bv3uSTXectYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFBhPcT5uZ5RM5QJ6SrcA6%2FkMDr7gw1yWBYJECK3sO7gM6iBafHiszPaxKNEoHxhZ9c3Jz%2Bk9udlBh6NTOk%2FchrP%2BuSGzqNjeh9tzUQiqJ4zbKBpYc85XiBW30AHkv580d9e2inOEwd%2BNMhvofFVHC%2FvUNZ8jJ6UzFKUK%2FX10qFFVJOLcRxaOq4Rta6WS7r4Y94C0pBRztSRLoZN%2BzApo6fC6dpV4xbBm8rYUi6Ma5XVEYtrn3tj1CX8tkooEI2JxEJNYfTsant05bKAWKWqltm71mqPO%2BqSYVpRgsntCmd0EsrFeUz6OOt8GhQcBmUNUyEdQXMhZuF6yq%2BK0C8i0DMAy4POD%2BVSJLWvuxgmpyVqPGDyFc6VkvclkiwX8Bqxy%2BiTsHLgBi4a4VmfEDQQk0HNfyzdCCCJVHsiLRiIWUA9Cdvs5AJ3FqSu%2FK6CKrT2lb2E2dciHv60Rh77TbnUk7uJY9pJdFaQ0ATf8dUl7Xkecp81jNl9aMauvJJm6YtB9Ne%2BIZR%2BFw5t6dyIZgwihuRGmJtxA0GF7EtsmmyF04LVC3YdZ0epw0ZOQJXT52km2KWLmbH6eq0vsEHszhKv%2Bcv2vQ2P69Vqos%2FdKqnZWNQc2r9hwaHwwQ0z8nKtZVWMQowQ5UP05cXxfl1TMM%2FAu70GOqUBuQJUc3T3qAnV%2FiAG1egCgjMkdIDyzHkpBvJgCpebx%2FwLivd%2FfoUplsTeDjdZTalaRr295GowB%2FYSUINpWakm0wKRbjfxNVoEYNbBz7TobvhJr%2B96LHXk8FXJu82EJUZp2Pwmomzkgbg%2FCQNCA1eyD4uByKOOYnUC%2FnQHpx%2B%2BX1%2BZwl%2B2qeBikCtbxyl2X5hVJUQGU6KLZGoRLj2yZnmpAY2SVUvh&X-Amz-Signature=9bb63a7e8b9401679ff4856866aeb72450420b9676749850eedd56693475790e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
