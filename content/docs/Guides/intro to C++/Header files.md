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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RUEEY6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEvFYkOudCrGN0MX9AsNiDygaRv7QWk60cVQQ2TW03GxAiEA7XOm6c3DNTOY2uaY7nArs7SibVQyCz7ybzR%2BCAwmWykqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEu2kFEoExUWbLD2yrcA0kWELqjPGArdJh3gKDPdbV5i31BcEe4fhDgZVd%2FbnWkq%2Bdo1ZGD68j97uG851Q9hEtSIlCGYpI78NG7KuLxvcByoy404Wq%2F6bjQapLV9%2Bp3VYR%2BBKgKd5M%2F8K1QIv6qoVWz9I%2BMpArvC%2BnVwSujSEwb9uGgWzB59fsBkwV0GWzEF6qtofRKa10rD6NNqkKyNNHFI8Ed5tOX8oFla2w302KlqudPxe3a4ySkEIdfA74Zwktv7nSZUn5r9qQRbcZZGnKjhuUeSkgB41Ms7MkGK1bZ5i%2Fgee3t3G8Cqbs3VRZif5KlDClz7JuxEv%2BKUxoNPQIZvcOOaPzxahDqYVNYjME%2FlvnLd7TllKMIUr9AB%2Fr%2Bu8GIB0rjEjoEqWY8saFq0oAKu%2BRMYM9NFMwLwGN0FWE2cRdmZiPmEbUxQPGBM%2B0re81T9CdduQWJxwY5Z%2BPFn2STa5rWdlg8npAZjVdTN5Qj%2Bg4YmU3%2Bb7el9p3ughO3Km2Gmqlcbp8mLpaEPFJ0P4uXenIy71m%2FmUfAMG9xbxRvM%2B4T%2BvGVVF8QE5wLEUZt%2FGxEFcoEGcheb2%2FDu9Uvg4Eof5QmYLDBsEnmpXETp%2BnlyAD6hfU3PIxhgPY6EF28i0sxdfsSTPPtR6TbMNrBv8EGOqUBBCxqoojb4FFneYiRDrPyb1XGDvrB%2Bq9sWQ6fyUNiqfyGtw3DwzSvnJkUTYxX0M9KCUZ8YJVROK6%2FwvZnvPuGzy9LWP4BxUrlEivIUkSLb8ZUKUNqMWVbfocDBzg%2BUS7ammNGP%2FMZeTYTtNKSN%2Bs3ipGW1i4hQGzBLqBEnyVxBFxDlpj7WThxvp8WAiDMKdSOdf6knfN9SUd1Cxj2fwDOqijIzBtz&X-Amz-Signature=cc09fb4ca22acda83364291adb2efd630a2af158fac6984ba5474e223f1dbfe9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
