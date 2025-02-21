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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGHALO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFngY5yscx8PSCOZxndiQU%2Fo81uOPel8sTxicM8zh55vAiBR7E268C29cOWse8317jzH2xsnO1s6v4UsgJVvy55eySqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2FeMwRG%2BYxQ4TSiNKtwDmstApm8x8qv5oOjOvkd52QOXYB1TsJONJjGe9oOn%2BzZtrpfEDI8rSuQ%2BTvf1%2ByF%2FxB7lIznbAdzUrPY2mTpOEG5LQQUOCwu4sxEP%2BJZL5Y5u2cnaevIZjwFlc1DU%2BPe%2BBSY%2BIRYlFu%2F00cbl%2B53PJCl%2FiQsOKOBm0mJVrFGKjG9ZV6O%2F%2FKx8NZUvVm3CykzSEINVBLy7jogiMkMKLtf%2FE86kGlMhiu6I8PVeYrj63%2FuvDT6NvSDZtJrPZkznaIGMAHhBawxK14ORtY0Vf4HlWktv%2FGYHUJugH2MXN8czDeU8EF1a7a1WujHv53iH3mEjq%2Bu7TR7jcrhU2iGf9%2F0MHNYze3AdOOvUOU0N%2FsMXmbojJcrylvi97tYu3xvCa5PV1kQwNKMSzCvxviK5oHMOpOQD0o4JKd4RaNyrcVhtKeBdtab1rle4hjL%2F6CfARGUXKWy07r2JEo8epfihBiOm7CORKOmH4v5VNhWGqh9ezLUGjNPmyg1JTDAbh%2Boblq5M8InTW9aZQSftPBiu9rHy1ZRpFv2rneQz1Q9WM0vpufp6Fm8%2FcorCGguj8VdSaEQiv7wd2P%2FOhBcsU3dlGESX9FhHuCf1oVuudH2AUtv3L6JrkSxl9lEGETQT4jAw0MDgvQY6pgHO0d6vmvDrc7K0Qh23IK%2FNj%2F16FF1yLtARVYwF6gbv5uY9x%2FKLB35wFQd3Bj7KKsRl%2BHa%2BncTWXDO9w1v%2FfppcyAkIBx85LpwENjEU7YT1cfqOE6sJVkWtZeyJJZj%2BvmhEp2Aip4jke%2F792npYP%2FVsXuZNaya%2F5UTVyuddc11HCZhDUbiGpmC1kWea6196LGA5x5tgrS6w2Gc41f9GUXnhmzzOdh9S&X-Amz-Signature=a61f98e574cc17201a3a6c012e346231a4436882969d215f7ba6d2d99fc6d9d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
