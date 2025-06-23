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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUD2B47%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD0h61rdjVVnTOf73d6lEY6wY1Ca%2B4Ntk6kFFK3ZTIFAwIgTA71NBozwPUcio0dNtt0Oc7vfRDPrY5JoXB1bjBTmbcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDPu6FSnQLaYVGUR7byrcA%2Fo0kuGhSVZ6Xpw82hwcJ23lJgOfU96f9iulh9wPKyZEVHRl7kTiTYwu3HYfK6UoydZshseOIu2lwMFnf%2B3k3luPDQYYConEJZqb0B2Kn1kBUc0dTpO09Y1DqOGZQgKXYXWQoP4cRe396a5PDBn2UiOHl1DDfY%2BXF9N3BgxW0JPvwSQ3EWRDP5RuDWyEkUJe0v%2FzPMIzsZ%2B6VLRuGvpBfDklooIB9%2FKTuF6zv88xHfxv30rEHZob9Z4lam0FcMbTSviNw57vifLgz4MQsHxU9NZkZ6P9dSY%2BNB2HCWTjJjVgS60yVcrcg%2FkoB9U8pVRwfMoxPuwTWo3wIeEpBsh3f6Z6VnrLK2%2BhpoI60JRMYttIU00FFakng5sISPO2751nzpVMEoR%2B0EKhnp518KCBTd%2F2fUxaH41kd5YCDyAJhexU0MvtiXgSzIcx1efdzX2HWx8v4TUvkm0Dx3ai5fZpJQBO%2B45GBD6giPNoBXL%2F%2F9%2BkGH6EJ1qjYN%2FtHTF6Iaws0CujExIvOTVgAXe7hpFjovLN3BQJhBBF%2F1PgQtpHf8QjaPplyfj24pg6U1sgzj3eIoNFtPzPqzfGZ6ItJ6L1MKN9ssgL%2BNSw%2BXXRT4MsoZJNBMfdD9nWr%2BCXCQ4GMNvt5sIGOqUBGM0VR8euysfRSeE5qewP1Nn8Ci%2BysWVId8WF5zw6v210ps5NQmAZiXmM8D8QUdofp%2FOCjQQORWVrOwhaKvXUZm2H0YH6aw7ny5gpEzXK1ViK5r4UFE%2BlwiKTGAFMR1LmKqYQ5sb9NgCM17YCeiKUXnXKk32dfq9hr1yClKVwN663t3I2dzlrJFmiKZHxs7xok5x9Rr8bk%2F8HDGb09Dcbfc0BnvfE&X-Amz-Signature=630dedb7a1ccc6ebcd108ee662a514f56334b5b1a65d7d89dfeb1b083306af0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
