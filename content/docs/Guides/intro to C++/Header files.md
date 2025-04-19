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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK77N3Z%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDiON5xzpIaMBSkocUr5kfDcaOJzKBeUByN%2F6FahPfzkQIgVihFp4NNrVb55PJgSarGjSf5oAYfAiH8MF7W1fY3YWgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2QfpM1aGw6mfOcTyrcA4IcrI1rPvnKDpCvdqsBG9Qr1kkH%2FuXU85ryy4uvRk%2BbBL9k1Wf3o%2FZzJ83JD6at5fo4lL4OlqSRwrxBdAW9JtVaDXwG4KBElCZMUe7wIIOVvGFnyvM3e%2B%2F1cthXzWyipEkgn6%2BItbkyZRjXbzFn5JPK%2Fr6TCSJs2MycVLt2s1HOFAkv7k%2BW5Jb1GT49oTBIqmI6pPIGX0O%2FSs7PsHSsUB9KGf7gcAmhzJnlNjYhSvM0GEBygGyMEvVCIxtj6u523iC2kIUxQsGVlmPPp3Mw1%2BDqeBDOyRqpH1OwO%2FqF%2Fq5ImyErjaDzk%2FJQUb3L4tkA9FHiD5FFNcvu8no%2FaUAPceBRcRYbfcJxLx%2FLKRPyTjZ0XhzN6MIvCuRjpb2R654yQ8xF3FFtCAJ4%2FlQ4xAttIPJLibc1iCNi1rMRlEE4h62feVoi9ybDuQ8qfK47cviZOkO1pSt994EfjsdSmt1Ig1sybs3%2FSGHAe%2FQ3uo8UpRONyxPDyjF9DGZ7RojpApPGWTJr45NaU4BS7mWQYJ%2F11GpeHsQ9bYDwMGbSExcgUDWFKFc4Izx%2FOAtrg4Ki6eZp%2F6ksJBsfC%2Bt%2BhQSHEFPGFwKDsTVfdBZ7sWdeVCObNcyNgE1Otp4EsRZqzN0aMLegj8AGOqUBA13k8bzdEGG5b%2F2RoS9rF0kBYfgxg8dphZ%2F%2BvkGeNEimKFntyWYg18xEZ2Vrspur6wqle52AQ84vZ2tRQ3PpQlEifSByb%2FDlLjtpA4KCNw1%2F5uBgLkOUu%2FgmmmyXYJaYcPT6DySOxP%2BcAWrE3GxAYJ8fLtBozYbRtAM4CsYvvAKgd6rMxhc4qxPmyiFN2RpQu%2BrinHf6bPh3i5090YNAJHL3%2FUrg&X-Amz-Signature=c399a27df6f45472f8a60de3fbcd1672a41d4e2b3368303968bf3efbccfc6cde&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
