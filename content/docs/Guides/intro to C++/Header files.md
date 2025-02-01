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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJCSGUP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmGbAWeTqi1zWArOnU1BKb8Dq8Wtt2vFxE%2FrmlKOurYgIhALxXX6mcR28opm7Nz0XcNLnEl4W9nwMfEVMfRyIvVRyWKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBEqdwSfgNUzH5zyIq3ANoUNcB%2FSyjDRi21Ez5LtBKee24Czc6WbZV681HT%2Fin06F4wY%2BIJd4dKtrMRf41uqXwPlOJwlAI9pvFbL5ln%2BH4vfVq%2BjLacB1dyQQJe0kcovITL59oMUFq1kuo39wSAIPTaHuM3rWcN2rJcFFAM1iRUNZxqIW7%2B2e8CTA6IPGMwmQmI4RL1pDbQTuU%2FgBi6IgfDsWSEoRUE3YeG9ZorKTYTqVUtWcCutb2OVqtqL2dzaMSB2O8GVSegR8JG8xsIwW5zt1UNYxItPPSWV3%2FE8NLG3Tza27e0gxix1x71LglmaVVLMwE2YdAf5x4sdIUsrQme4%2Fh53MxphH%2BH9bnUoHssrvSPVpotkFKMJY7fN59oyXDoyAbPZtC6xdY%2BenzBqFp6hXR3USb6AOxLMTkKV%2Bu6bvF8QzAQdAR53qAJhtk5J55MPxZ5ey3EIuUrSxlR47jxzT1clv2bnf230cxGk89yBa1S9q7F8J3UQ4T79q5tSgJlU2d2nAKXeoN83lPTTsaHcbfZDchtfmSNX7FPKGh2gLBhPYBdci0%2FskT5g9y05DY%2BN1j8jBtdcBM%2BGjzW3jONYTTbrqasuR%2BNAdFHmKaYRKJAqpjQj2i07HX4gDGzFbFJffJzz5IMmD3SzCUpve8BjqkAZgiDNo30erHPcDmicJJJzuo9UQxjnwkbwh%2BgDCDUnBSs09aDKSA1oMqd2T6c5g5dvDGEq8eA%2BOAvj5rbSPGwN9411b6eF9azJwONqK5rvcGp%2F5wIQGZ3XglsAzfhQVmWrzVlWIn1LJ2KgnGJ8oHcQyjrgMBzgfjEtDBGEBkVTelXIHIyzkN006aXJqjMWyfNb92q5aW9m5vpxVSOVPCkvUSD6Mc&X-Amz-Signature=8dc633cb49df53802e5e36fca520e11934c672a48e30000dad394dcb231ffb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
