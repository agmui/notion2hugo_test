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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNYV3O5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDr0OgEMnrXcfpiRTq6761nq2G1OXJdcC%2Bu8zipx8kuTgIgOyEx8pT1g6p3faBE3wOizAiObnjq1GMtIwsdU%2Fzx%2FHIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWZGmz1LGy6DL0rsSrcA%2BLdIuyVjO%2BrgpJUI2Z5grfkg2ROImmvg9%2FzKE0stnf%2F79zfeiw34rr6HypCI6XqsgVtrwyRMoL6OK5XSznyBnCGgYagWKjHWEhQfoRjyTEZBSPDFerhxBx4uEufoFTC2KoMIGB9D0ZK3iy2jjtGkOBO35Cry62fOIS0OIRCsSO10R0yRQhl%2F%2BNxklMYZNLac09NfTrU8gzMgh0%2FkBtpCoSrIC6JgEMatEbezkXrS3AATilW0ADMLWO1ulXHsEzedHd%2F1%2BryCuGxA6o%2B8Bl9TMIWqVZ4m1q8RrB%2Fsza8acER90LV7Mlr%2FWkfhKSzUui6%2F2Y3YnD3cKRvkHGcDAX8bLb5yHVoytTWmLAmVQh6MdAODK3Cg5OcmzCHmxfvoVa9zk4v1jeA0SC0LTVEG4uQzP9%2BNyKoXfUwthaBPPninSIxk30JcmDfZD3oZwstQub94gRexdXbt%2FNhQFxeFhPa8sHiczhzYfIvMKcHWZLlPBaou9kkAMrqiyNLuj4k4%2FDMXEW7LwkNUkmxmDJXMNgJhBdaxZD81eNQNvqPEu3xJtcJjoC8leMQwhOJTdoL48egFhwpvch6wgyIZ7OyZ4OrLUS4A0VBhwntSdobbGYO%2BQsugmyPfxfsugUhURRYMNLElsAGOqUB9kidZi7S205ZEGEzlqU7pvLT%2B%2FVmKLMOmZe9%2FMUoIEZr6REvsV8%2BxTZd9DXJGspJv6Elz8N%2ByQ1lJvpTOxo62aIxsKJNl1YksU4o8Zo%2BN6D942lS9fA9%2Bg1ocKLIcwT4b0%2FgS9IpxoSYOVQlgLyqtycVfzMNw6Rsbz4Eqzmy2RGknhJmg3AOZQRY2eCI77TkoFFIhm7%2BrqwH3KD6yOhaXWcfWI44&X-Amz-Signature=abdb0948480b16b8a793541e82dee382e56886877c15dbf37e88ee8c1fb3caa7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
