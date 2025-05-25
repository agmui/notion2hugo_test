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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAWH2LUW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICHMfCjKURhuBxLwJOCvTDuXTii%2BycdVOCM06f7pt1KxAiBMn%2BjX2IyuWR%2FO2W9%2FNm8uznVSg8KtmrBM6DHEdNAW2ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMhbvVxMd%2FCrhwtf%2BaKtwD5b43famtbcGQaDAb7K5Do45H0w3rtaFDL8xXgVRsjkt7mYuETrPC5iP9mZP5HRMVOVnIATYlEC5ybhcMsK9LEz9FUqC9JLL4ZhK9bTHcSbPEOBOMUTh43qXZ9f4LEfRlgwvtNBj0SwnbA8b6lr0C5r2D%2B1XsXAzRAYkOPmUUlztzEGwirf66Y4FCfBlV49cGioWjz%2FOQtV7BEiT5IdXrFn684MSA5wMjn%2FfvA0AKH0sWlN%2Bfixe0tcCqO%2FBsHlU6NN0JGc1N4aezcp4f5d04W8JmLl4IkHYzoWWidUuyThpbSlZshPLd9eP2cH8bzXiFxz9s2lwTZ8swluVZXaNUaiGaVn14TDKBc9jeWmnOln3SXivd0HqaqaO%2Fo%2FqW8Ka1EirTeFwIeo%2F9G8nXJMJJuGmrdP0CafLpLuWO%2B6gJVbD5qlFEQWCk9f17m%2F3dppHxivZuZNeojLi90DM06oM7nTNKdKAzlTXWMcWLmkRUVzJ2ASrkjwmCAerkCifuO1%2F83W6bbyeo%2BfEi08dvmE6%2BbcqMux5N8texFvLIdsdqSFqJPBOXroB7z4Xa%2FIN3O9REq500dODp0mW0WbG7FDB1rGhyDn9%2Bdz3OougYgq6Pq7s0grCcBUEMeW%2FokCgwk%2F%2FMwQY6pgE%2F%2FpODIERmPj1KOdtYUiR5A4Sjr1pNZwwhiNYjezZgNBMggvj9wW6C7RHJ4GKqjxwe9mn4gLiqnqglQKjsnQsSAXKzKhKRsY2c%2F8PfVrBKTgR2Mc0f7LLpkO8Zt7DNeDFfT%2FMxvVX%2BxIeW7qHikJn8Q3IE5SXieVBULcPoYkn6wv6v5Lr9waB3AczYKDhzlzuw0msAQtdPJ426hq9pKoQfouxWKa0O&X-Amz-Signature=8af8413979f7adb95b4aae952e99d6ca1ae507987ca9a3656b89e06d5892aa30&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
