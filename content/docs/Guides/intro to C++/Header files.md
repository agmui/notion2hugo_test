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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RL2AV4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDj%2B0kkJw4xknElxInJn6sKHE8eD6LZ6dmubqlZw8gF2gIhAIRXiubs5RXk78w3ZWlJ4ioi93s9K8XUfaJj9H4Rzd9DKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw33BlVbesDfXI6WB8q3APaFZtPCKvEbPIbif979e%2FPVzRbY1nPSEC5ZI9Fn%2FEmv2bR3rCQ1y6P8C6U1CJhX7qSSpG4kfBjmdVm%2FdOX6FTIochClsJGikC3k%2FlgYIreV6ri7zrDYAddz4bDelg9z%2BIKJXA06dvxe%2F9%2Fj5%2BeDIvELC2XQlMjAJVhoTLEyYIQ%2BEzr9ijPl8ARi29AnQWmFU6pb87PV5882QOo%2BIPCKlt%2B2CbpQ8jDAxFvC6GshsukSGHOtLuixx%2Fn%2BrPRSWDVG%2ByAAevwku9SE0olsA3qoEuuTdQnQRbgeBUEpNZeYKLYNZsjILuQIyIw6im1fvCi%2FdocVLkr3j4curilpVSK9rYInRfjL%2FCsAoGOPP3VnkLxIOWlcUne4%2BUuOZcC2QFXzSG7QhjfMAL0r7P80S9G4xsWPvxP16XloFEmLYVWqYocFw869NEAgXfHuPscBMR7ubm%2BnWjox9O%2Bu85NQnQc4cKFOX006LDZip2VEIlnPs8YvIqSL3QUvgx8UABw90KuZyAJyW1dcZNUAQaQHos2luk3JoJlKx5WNjbwRTyA5Wb9cGTtKHA1h1BZ%2FFn%2FZhNXDb4L5WsYnejMSiFQQTGUmjr6xt0sGm55%2Fl5w9hmye5uK4pyIWGmzJ%2FOWMKgpnzCOq5PABjqkASU3rk52DyOVEvRLSdmfDt3D7cMpjh1843SIi%2FRQseZ6fUQRV9FkmA65wJ3B%2BbmcLQcEkUrX9HWlSR3fmIpqVdxIa1LL2c6NHTZ4qfDtOtrUvh%2BVECbHsLgx72ro9AinuAPY%2BPPdZMiaxP%2FRRJj6m4wWXd2MhScBt099Z3L%2FmotqdL92UfPd7aef%2FBlD9vEZri7%2FK%2FsFzOZu78et0lIngNWkZBTU&X-Amz-Signature=8fee497caa798db053d3c42ba0128c49fb85aaab523e59ac0ec92ac1c9c61ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
