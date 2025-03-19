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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXAP75N2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDsIjL5nxGHB79e1PnJTDW4%2BdRQBBHx567zhMdG%2FKMtiAIhAIASFA9%2FTobYOKaM3z6S0DCWhJU8E1lRnb4ZpNE4dfn0Kv8DCGYQABoMNjM3NDIzMTgzODA1Igzdd0NAweTcg1Y1rSIq3AN0BSzFgt7xtfFFpvAdC8Qc3FR4Votrnl4X6%2BpHECZAUXw1Cz7f48U%2FuaIWjJWph9OuYAL0rxepl8tkLsOWQHQkSIuGPC8sJc1dAokJxUe9%2Bo4eHnAQzF%2BHM5EGUXBKTPApFS3cdrEFlrjK%2Fnl6gSDkvqJ6DKJVEWaZhpc9opMfHawqXMBjZoU4tFwEpxYkck0B91BnYQ%2FkVI8sK%2FRT5PWlXWIpzN1b4zuru3ToquyqeAxDT0mD6e6e8aF%2F23dsfL1ziV2Q0F8C9dTPkV9X2Vr%2F7SEmiTZss6OyJzlOe%2Brm5O2baaWBuuFk2h9fUTUVcroDe%2BtM2NFRlgJve5I0eG3Q5vqi5LELgwLgNjTlymlb0v%2BLEhc6krNv2%2B4ubbfLAfvAEDL2KEC1haqMQ%2FQo2jzc%2F4rzSVkEjWXui2bbj%2BhQ85XeYZ0dN7MylcZZOt28Fz7mD5f%2B0jLH87abVQBBvFdjI8qF3Ge5teetcPUB5CT3onjc1Z1NAD7cU0ca2Mrfr2UFn98%2BJ1ddLsQfsWjF6uTAuRX9IU143jWE0YOOTSRF7LiotCc4fx0Baiszqn0KLVviPodVjKX%2FVOiAAX0V%2Bh0cWx8i38AMB7WsMoP6mLzDP6%2FY9BZSLwi5lTgPVzCIsue%2BBjqkATyXhcrt%2FhBMZ3ffCOLtUFQmPsa39Ao14dTF5h2CZmnqUliTHT%2ByUD1knwwTUyj1f1PVphnCFVywhrqnk2xjIxzWUIwawxx%2FZKKoQzTd5Db9u%2F338jssTCGKqzLRw8vQCoJO%2BkEbypYoq9I1i%2F4jbIFw0oEY4uF0UDIU0I%2BPZ8pX0cViexpJ%2FSDjQaM96sb6seKdJh0a%2BjkzCJbXBN%2F91HKSMBNl&X-Amz-Signature=7da98c8c31ce9f45b7f72590a1ed6e483cae47a266f627349b0faba013c55a25&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
