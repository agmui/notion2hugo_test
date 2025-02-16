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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIF22GR7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC%2FFWpn0yU1UiqFMTyXLmQ0IHP1ES6GuY7hST2n1Otd0QIhAJeSgXEynuwxDEeEMBTHEFDYwrBVqaKgUOZ6rNXWnm0IKv8DCFIQABoMNjM3NDIzMTgzODA1Igyt2P%2BXoqKttQ2cjSsq3AOIDedQ8L5YTKyCPBh0mAy%2Bsg3BFePR%2B8mMLruQlisiFqFlVY6CPvKgTs%2BHx%2Bl3pMGujP8Lve9SLcSfkKlck%2FJi6NdF6q60pI%2FG3%2B1xT8Y9K040I03QwEiBoqOwdkpUBu2rffRT%2F62OzNSCmK8kbnuFxmBjSPvFyz2%2FZQr90G7iaA23HhDOzIXzJwDoEBrO5zGXYBIfL0pURR4UPwCXbvdoWIUCK3UkUPFyqWvA%2FwqV6G5bXEjCpYFGxqHtg3eRCybmC32FNC6WFXZrOxIPKq7HkM%2FV48DjP9phP8ySoJ%2FU3ZSVffhBsSMpdfcq7junEfl%2Bq4YfmFeZv6fTaeDGjdyQHBuSDNhOy%2BYhavzUQIcgzUHwEegZ%2BtxjKuUqQavlQFuiDfWNgmry%2BBtrRoUoxlOXJkZ6S0OEP3tlC8AJPUdJE2iKLQ3vjijBYk0r%2FrEiXYWeLkSQA%2B9RWwXOwATF553jENP4OJi3ed29a4YZs47ZX%2F1mv%2FLJBbsb3al%2Fe6F%2B74%2Fi9yKIsboLmnd2JfcOf0zjE5PU%2BY6KmbbZ%2BYt%2BNaQepCxjpETopx%2BXBTlEsA5Xtevm2%2B4WS7%2FA%2BdgVSpq6bAJYVpNCahDRAI6xrJd5KFv5NdmUBSqL4h22qmotajDo5cS9BjqkAelS7B2lmeQfkj1Qlr67Ddp7uMxpNv59kFbpaldbySIz6Q9CsdiHZh6i9ThAcHrXc7rdXd5pJSHWFuNpgRl2UkB3irVMaCtY2adKEKkNJ0w60leVWjgGlPfHpPJGOwzfeAeK5OZc%2Fg4JrkjiNyzA6FawKOlRh%2F%2FvKnmmx%2Bxb5stWLRP9UY4Ikd3vPmMFDqBHoeDlX35oFAAd5YcujjZBN5%2FpVgxG&X-Amz-Signature=ddd57737b9219a04344319a53c3ab4bde97e7b0da7b9c85cef2a64546b36d88c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
