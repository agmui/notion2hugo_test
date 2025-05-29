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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGGXZ4J%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFi8TUP3ycQKVo1074sbwK%2FGYvgf4CqkUb%2FYnMVPB2HbAiEA3eoY9N5WDxmTUgSQx0%2B2%2B10O8NLvtdTJVPE%2F5ROCT%2FcqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxOIUd36rroYMK%2B5SrcA1C37Bp1pNJRDZqu3Zr4N%2B9SwkJWi6AJQtv8NbAf8ME%2BMC1MHRu1uEjYdXQVCgfXuGq8%2FPfoAIV0mY1SZUyIAPHRyFLYOuv9wGQi4NHKfO2wzf5i%2B5ELq4uMzmBTkaRHLnjfynTWtLc8NU16qdq9E6Nz1m4hbgoYcvtMZhARt1RPdh1%2BWh2zcqiT11VzDybJY9lHQ0XaNnGrzrxZXp%2FD9hB6b%2FqJ7t8nPxgZhc3ffdxyLKvgJhZ59DD%2Fsx7whKgT%2FuUQOpOt6dX9ASr%2B3xGk3XGkyV7RtfBjm3fXnjeO7zsGKo5IRQwkUjRpb7%2FHXMvVEHt1kNI0Egb2eFt0Zz4ASFOz5lknOYvYy6rL6cTx%2BPiZfZ77teQzWh2X%2BAJLcGU2%2F51UkpiEvvHlcJIDy%2BDj%2FAdUFdn%2F7gEGlNaUyod1hoEko3Pa6F8aKEBxCl9qa1A%2B6Ghp1EDhYsa4ApnIoFpVvRZ8MiZVwQhJd3DzOL37%2FybTlObGvRMDIbreqBiIIiEY4ZvFaA227ITTH2r6ODUVVWSx%2FM8xtS7Gj%2BNPPmmcuZSDkSzKnEq%2FTSCa3zBfgnrGTdnPkV%2F6P4n8cIILpAuurTYP6e9Mvxss1RJ0iU9%2B8Yh%2Bk96uMn3Wil2FC6hyMOGy4cEGOqUBsHjmQal6X%2Bmb4EmkxaHH2sAb6HMJ%2BFoHj7XldC3z%2By1gXgxNgb9EKTTws9rUSq6S87iOhuwZjXB8%2BYD2l8j80Y%2BYejpr8W23HX5c%2Fm3yvidsPEpJk0ca3WL3Pj%2FUiIoP%2BU2z4TSo4f%2FF0IHSrBH1qe8YhaYhTMLYW7I6fU%2B6X6r6HvOctzWcPySxF3rJCp%2BpmUlnju0437OM8Y%2BGuxpBbarJeUbY&X-Amz-Signature=c33938b29a8cebfaea8cae10fccef0fadcfd8bbf75f34ace2a8e1aea0156ecfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
