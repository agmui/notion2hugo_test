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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYXJBFA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDYhrQ0Whd62GgLGKsemfNN9ZwZSMfTaaWiIbVZ6nA52QIgd7c218kmjX8TMrpuEQ%2FANdxcCZ1khylANtYBM3ZvPfAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKBf83nZmv%2FobZMfvyrcAwygioiFErC8JBzoZtK8KWj%2B%2FcsEtGGXjV0VZZlQjQyomkdzmijo0FL2M3d5iYzIYP6GcPlcUkiZM%2FZ9KSo35Xx9OC39KwwwRT20eU7moNvvawSUTTxX5lHqiXasSFf75G6MGTZ2jsrmtu2%2BaIUpIYB9wUjd%2F4NNmGXEF1Ia4MToVYNu1e50Rkqj74Jd3%2FIxKYeY3BqEsEIGaK886krKryW5a7FGXnSpvJmtERUiXrqcLk1bsYYAAJzzdtoGARIUMFXXhTudPhk5hgnqdZ3b7%2FZSi0LO%2FlAf%2B0k4iP4%2FVcbc7mDSY67tJPVag5e46%2FitqtM97OICJaK6ZbxUWXmRKZpMtxGbQRdhseIvTdydx%2FSNX5PQQu%2F89AiGQoIZ0L42kgONAptUG0lq3qwn0S2BRD5KwX6q7%2BgPnst4GvNpaL7Ky%2FEF7a2bbronZP%2B6gDRI9UOrbGFIj%2FcKCc8svFbnG5L2ncv29UR3gJAnZ%2F4uI0yRNP4dI%2Bp8MVWsLA6J0WHdhXrA2boexAwUSYpxeG%2F0u8t7C3BnpxIXTIqtegUq5mj9COYtp%2Bdfzezvoj9Clhq2iMGNixvK4tLBl76q0O%2FxlOdeGfvwwydK0k8MMTouEgalY9wEe5AyljWa3VxgMI2138MGOqUBjWcqmsD9kELtc8y9tdiGFBsqmZvzGQjvHzZEKhbLaswF41%2F3AYZ5yodVgrWV4iXKW0I%2FYJzPGE9bAdChA3TT5JUy0hXSOYmpInCvyYk41HDPPmEim0k5lA5UGuXGAkReZAPjb0dZ90Wdo%2FEIA1Q5IQjuWmr71DDkHTeKo%2BrIPgFVSaPxg4aIT0C7oUtg3xes3YRvEdSQMNbx8EUVN9WGaA5B0D1w&X-Amz-Signature=4b6ecfe7c6c1ded52c459505536de079ba71b4345338a1f3131ede9ca80e54e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
