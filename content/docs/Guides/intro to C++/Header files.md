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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SVDE5H%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkcTmieuGjl1wnWy4QHyrdKnysh9JzvRybPiTVa%2BQ9pAiEAql6OanvFLj1GMIME54cWDwv%2BNBIFwSoMsWdqV6tPEKMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJEUAg9VIIkSBdAouSrcAxdEzI4Am6mG%2FiCKmnW4taUPIwDTN2GoTUFQ%2F6awY4crVnX8UdIPtjZONzSul1HpMsb8sGpSY5o51P24BMlwE9GO8iufE7tmKgJKkQa%2FNG%2FC3GABNFCUZKK%2BAJke5Nf6GoYP1yip6kRjlOYbYbmhM0Pd6%2Bdv9km3f2DPqpU0bH3LLSSJ1ETuywpe6Bq9tud78aJe98JahAUN1uGc7%2F4Kh9DTSWzHHRR8C81KuosjQR3RYWKP3UJQwU%2B3MoNkp3vTXFCeDp4T7iiMSUnQ0IAOb8FITdd5npefxaduKpcLUehTT%2F3WWm8cbP%2FlG7sflRuaYp7BnowVqx7IgqzS0UOebn2G2ggdfZPRb7Kd7P7MJsLiLQXT7TksBjplOA9zaeuM%2Bu6DaJNDWBr%2BIqjTirziIHp4ZmzsiNgBYbc0kQKSIAOrdwpxAhohhiFQeBy37p5h7GGfnqEnh8m2DUu2DfDEPsSuGlXXrB068melKycgQMIkhs97w14Jp3lJg1EQqwX%2BVjLkModTPPDBTZTjdzLiObzcED4bnRXRBZ3ZDinX6Nc386vqgAQ31qzsrZrdHvWkcmRpPji1BMCuVbkWvD7%2FGEDU0kNKzBy%2F0udFrhw5F5Vnyilicxf5NGePW33uMLyRpr4GOqUB1tZWJKPL%2FTMjODCEoisvdXM6NX6Lt9%2BI6%2Fkd3MX7Iba0z3VALHjWcdKovFqeKNYMjoTYGzXuQmzciqXrQGmlNTdmNjp8YNtc8O7LAHmTl2iAvz5GEqHdcOtsGwuDcZWOfjKuqyQYrrhVVJieKJW0cTRLT1Tnof6%2BgCipeHStXgSsx2%2B9wqYgQ9aPZzI0JTq3nFJq84sG2qPxHuF9BYvGOhwrKYwh&X-Amz-Signature=b8607aa9005d0ab40fb92c5aae1d737f60463e6fe2e9a4d23989f9f18cd75095&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
