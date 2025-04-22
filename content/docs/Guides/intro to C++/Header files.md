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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622F4OI36%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHAz5O0Wb6I47KOUqPnFjfcUL94aD01ziV7P91drtr%2F3AiEAnrakuzLCrjbwER5L%2Bz5KEfGzSc1B2IcISnKCGrzR4xUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgQkNLKfWM%2BIrQjgircA815NXSlzNt30Af9aS2Fm1vbRSXgPIs1YzRTsNQUMD9fhtLcrzTHNUFUq60TDlsaC9mk5wbq7Lm9A9i6qH6qQNUQR2QxNBXXmMa%2BITTVgf8vZ7cg1%2BdT%2BThIgTbw0qpTNQg4sWYT3txEUhtjNsiEwd4izk4fMfBTOSpzCDSxPlWSmmMdBurisYmjhvp%2BSypyDvY9cm6XCWL8Njy5C861f9Zw0cUP6%2BjQ2j2bYjjgp6p0X0oel0dUJrvMtWJC%2ByzuE7SLD8z2JQ%2BIpR2FximiF6onV2SbPOnFAH3F7YfbdXpovSFV3%2B04elcZwwZ3IEPS45qrNrLCQATdLDJE5yrRh34fGKMVw6ORPe3pPiGYNoKpfK93JriGVE334RI816LDMB5kwhgaRpHoR0TTvD6cvIKn7hmGgkdvN7zKhysRGu9acuywagCRBstmi%2Bb8hYyvsZ9%2BOpO%2FLa%2FBgnAVIdgB4RKjAxR4CvUBkThVBkqy%2BLqzaRsUwYyeAy535mDyER8f1k%2FL87kWSRDUeYuTMy8jQZuDSGuO6iKNY5uTeaK%2FbJWwpuxxcHEB23NiJCIu8dM%2FdmwXuJaxqe3pH%2FDfH4%2BMcyTDyQSGmN7x%2B42IyG7PDKjN7BSDPqpqz1tK0xZkMI27m8AGOqUBT%2Bf1Qj1eDKREjGGC%2BeCsJBp8kZa7Sh7qHTF4pbb%2BUv58Fo0yb1kprCUXhjNhqFx%2FJ3QhLlHf%2FbIN%2FIdaZoNN0%2Fdbqo1kp16HcvClJlB4PXEvAEogXDYcnu0Sq29x7dwykZVet9I4t4sVBF0R4xvSHqup0yhqrjJncRsnHSIIXkDQWBHbsJ7mpnvWqqs3AoRvTckTwSRgA5l4q4cpy966I7i%2BUUy7&X-Amz-Signature=fc4cd08a82ff9680844f6e9e4e61c94e029d69b1adedbb96471d19fc12c907c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
