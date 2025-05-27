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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VI6VIM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM7BOxIV7cWWMEiktZSUCs4jSOb8WtSMKT4DL0FyunjAiBIW8DbbQWbpMx%2BVkI2YTizqy6AUnVsNvTYW6cJF75lfyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFPJsGWiaEPUZq7keKtwD0ZYy9XAuj4ou2eXgm3CHfKVh%2FAhdlf4VkTw5Z8AdRjjcIzVkGUfrBT%2BF2w3fC%2BmMjTziFIFZgd7no%2BGtlVXS9ufMQECa%2FEfQtYrzkHG3qy0LJRo2VFeTMbeVQ4RJO47aLm9qiXgpBSLAr9b1VO4YK58A58EW6FpMYqB35b1D%2BEzzmHCiENqiFK1IZ8klHrwVP6Rjx24rdJ%2F%2Fsnfvgx5d47uPGxAH2xfHvZIg84pxcbDyh2P5A1cIlw3sm3qoqaVbOadFAcSRpKbuKFi4MIhwB5DM67s0JnUtrFCZokNXFym28UWItVzxIrz6TltRKwYKN%2BYWL%2BfEiL1ckNJkyiInP4SAVKs2xtFVMDYnlkKWv1%2Fq9Qx6huvchNlY%2FJkVWg2xxvF4FecvIgQzV5s7IGNbUQXK9Effi%2BnyDbqtzohuS03su4zYdpczPiOAgJl%2BAOsTOF21zKEGsLRwkGWJTPfOwhDNBmBHvUJZcfVlpSJB5QoTvxcOxIUTaavf7uB8bTuwTuD3%2FK5QMIF1iz71yW8wUI2TaE9nmuIbNmJUCxaq6JSBYlIT971fI8ZoMqjQaSMq7cRG14cNAk15J4m1WmzSdEnRoGP83K4hZNzbYRMEzXSq7u1oj7R1XQQa1rcwg%2F3WwQY6pgEB8MYFKydOR1taW5uc9VO7AXbUHZRlwf2yop7ota2c3avYOcy4etuY18bF7%2BJxdHc0%2BohgHPjyeWPUl1S4oTDTd0%2F2L9j1zacluFgQvK4M8hVJMW334TzuDUKCXuQiu7MCysF7GoQ8A9Cm8419fL9ZQlKXvPmhKaHBKEB77KxSgcKgtpzPtBli1Uh6PBmwXEOzJbFps1ZZ%2FYDmKC2DHXbt%2F2CD%2BbwU&X-Amz-Signature=9aa7f15d44c8ad157444cc036b3b03cebe5f03229ab6abe039267dbe262397cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
