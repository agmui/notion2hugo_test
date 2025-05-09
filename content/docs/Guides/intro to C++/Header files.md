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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXC2YM3D%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtH0qMCki1DKQngHemCtMgYSYryjEM0fcPyILAGOeAXAiAPmYOBoAOR6YVw9JbA4MEvqv%2BdSYozwTfS0w%2B%2FfoPvWyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNbNb9M2UXWaU9KjpKtwDeT2VV%2BgSnB92yfEy5iohiHPVaJa2ytvWZZUQRkTYsn6meZSoOvwVTtY57YXAkLKnKsgc7%2BpXQJNnWz0gRBRs%2F%2F83u3xRxdOEVt38MHjCnVhfljPqXKVMyUEA0rVqIVCKBPisuAIe%2FQKL8lNqT%2BJvZRLJGwq1kprBjdu0yqk5o6Ix4M979XGQF4A5LqnqGXw62udrGcdRaFvkw%2BnIt0i9fBduvAFBaBbHpSop4Ht6fCUihOE3SpzeuFkRA9tOnNJSYkmRIQlFqyWIofjNKkERs1zbZW73R6A56753qbxOMrjQKuB1SahKfz8nM4dBMmuNaKstWLOAL7RE0g3zdzG7WBV0Cng2o9wYRsW7b3NxY%2BsC%2FQwgagnBNwNXA5P9aY3SIyYsgu8U9HdQw%2B0S5cQt3Wb%2BTchJWAZIZhgXtxEaI5J%2BZQcdE5fc6b8NZ3YS76b8%2FX5qg4rhEnq3lLWJE1b2LwSvxe9L9SMUaYl2owhaDjc9TZyUFvwNsDoGPU%2BzhrE%2FyaMej1s4NNJV2UsuvfVzP5tjplje7yfRk6Gx%2Fk7j9BpDpNJxlifZB56RApJMT7lZidbyl9tD1p6%2F47h7VsP1AuOrii%2B3lhTxgP7%2Bi3vlTMXsq2KWWjky8F2PKDww%2Btf4wAY6pgHMfpnhPf6W3jpDxMood9dXtaZFGGsVULcm9bnKS4t%2B20zawvBVU4HGJk8HEjX5mAQ7n5h9u9IpF8Fm0w6BPp%2FTyjMcKvcCyplcnQZwRyibnfuTMhTJRy8Wwk3f6DNBRrpIkAKqe%2FrYl%2BH%2BWpI8M8oKtsQIBIO1N2fRIOLLOUvmvhVF0uiN0z6CMJWKYsR0yA5Suq9kg1SRsvYKeeVtOtNPvL63dsCh&X-Amz-Signature=8512ad985df4ef0acef8529f968e023ae2f8ba8b3be5592b06abb137356e61b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
