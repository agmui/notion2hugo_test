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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SE2HB2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgOn%2FxnGmx%2FuNcSSoOZBRs2MTT%2BrAxN52ZV%2Ff59V6IcAiEAhiP8PTJuSBdhE3SUv1v6jW578rcCkkPhhBN90%2Buz6E4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLD8QK2NkGhXxV%2BrSrcA8PQOiYqRmo8KN9idyiJCHPjzCbjVhagvOLC7chX6MjsgYLfXLuDKkOG39wcAU0YDS%2BcTz6871PED64yMtLgMEAvs0Cxbr6VBVAIow8heh9QspycNeKRCJmp9K6MvUe661OIatcLiH3y45dFxiYWkvJeHFrInNCXHu1enD6p0rgHd%2F3GNLGnvXuSTEK2P6a9L4%2BZ8UWR55J1cPPyYNHoO7qpo3kXWkGFBS1rz%2F0bRL4WBUTkrMawC%2F2GxwFoDlKp7XLq6Qsg2DpUS0sEzLB2MXN7GzDII2W8iV4VwNbHUetvI5pA7QKRZUZRMwnOcHK7JkpXmxgg1ALpk7GZaj6qNvCiKH1of9ZvDXSmA%2BPwPhaK%2FF15vmhFPFYKO2kYhuN71hbfcu3QZPT0YiGiuEJjMzw9sL9jFNPRSvhtU%2FST6RBsvDV13jztuapGVmh1Rf0Xl1JgDw8DEx9Md%2BR7XTh2GI8i1j2sjSj2B9C0gI5TI8vvyD29xvBFWWZQVORLjHLiGIHCIZDZ6GUG7xAzFvbbahELU6bkk10zeShITYPVf68Uu2TmOT8u1ZoYbAcx1GoRZFGg9LtZBpj07IOnfFv4MxHF2WOnoFqeYYGTFsTTXk5NLtz9%2FgG%2BLsiLfvKRMISKsb0GOqUBw17EgFZ1mQbdv7qlnETBhNMF5Hm%2FB419MWDQEdyNStmMZiYlYGCCVixcIzVCUXic%2FFWtgMkkObwx1gm%2FIwRZo2opFcmtvYTEa0n0%2BiLFq20C2sukEEKXDUbHbvMG4hP36%2Btvz2l%2B1R0J8ZUmkB0WKf0OoJW8YTEK9Yqzy6FP7r72%2BvLEcg29EhVGRCLRa9AMa0bsyAmrKt0KJgqERDKT60IzdNit&X-Amz-Signature=13f51a3adf75707b6530082837c7a71a449b0e4079fd0ffbbda8d1f064fb947d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
