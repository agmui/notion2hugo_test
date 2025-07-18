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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRVPBWT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDDYwgwLdwLW1VO39gUObe4KSuszXSBdalb98m4Lk%2B1dAIhAO9WQ%2F1Migqn2KUE%2FEZgcPeSYSXFnpluuEoIJ1PYDJbcKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8iY0w4qSt9zDVb%2F0q3AOrHaUgSXFPvQi8w8lJg0SjO0AD0BpxhW2LkDhxNVUBIlCVk9sFDWdk05RiNcLH91W807a3sZqiyHtnBYjvYP6SBAjsDIXD%2BALj%2Bx4ZAGuMXkgqnfFO3ylvwOewkgGIJ2JAydiwOWEWDlSmUC6k5ia%2FD9Ra1YR53tG16%2B%2FMcwlK%2F0fHEio1oY%2FSYR44rh108vZJ4njR0z5bJXj%2B6jJiijYKZs64ZnjMbki7QlOD60L1s37vpcTL%2FVTD52yu7dIC3LPdycQPeRgv6BgnZugSpXPQEnPwAiVI50yQ4p%2BE6D0Ea3667ggzcMvaIfle%2Fo5eGCvULxDBw5athDhannZwtd4MZLe4v4u4V2ffAWsh0DksKSx7e1k7v0QnJioYOhmzK0umK3DzDc2RuxFsxbS07vsqHNjb8zvZKdrsdo26lybGeiZCR6pBCQ6LpzlH76f2C6Oi0zXEv5Rh2Y0LGHoVUPYl1KHcZNKWZJvJMhZazZZHBEtwVDxYwAAFE8h8%2FeolBwIJDRBE6H9zSm0BDJ%2FZzOQLdKrNh%2Bx79pJCgzqBruL%2FiDPta489hgrqvsClyfByNbk2nipVKGM6%2BG0IWTBXZUnkfcO9msy66W%2Fjw7F3lk6kkJu8Drge1ev%2BIZwcBjCHiuvDBjqkAXLt6eOVY%2FRX8hDNDOCHH5f%2FJh4m5zzMj4QS2nfjeQMEDRZ9jnPf%2BxLyELaNY5byJ2ylnkAPHP2EP6Gt1d6GHv3ACJnqZv5wfZ%2Bn9FuLAExvmORZd1c5%2Bl5WiDSJP6fWVIc3K58dx%2BilYvsuhIvLsuIfJEZ7js9rN08f7vowOMT6OYNuQ0422zsCELDTFlKltvAVGXHvY5%2BmxOuYyGBRGoG8ze%2BI&X-Amz-Signature=bb911fbdeea9f711073d813d3f6ae9f4e25ba1a4f921b045cfc98bc22f253d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
