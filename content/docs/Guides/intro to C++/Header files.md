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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBT3RNC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDsOrnRIASNPKDKtWEKvgGTJC%2F%2FcxN3aI3X6L1LUFzawwIhAJKljUzy69%2Fac%2BFxjJxXP2Crj9uPlMiL0MTvZVyzfmSlKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmrfMRQbh6P0D3Gb4q3APaSf85Ak0VGU51XS1%2BO8%2FF0ehoP2IKU%2BACw7E5EiDRe5Cwstc78W5lgZL%2BZJRxdf8F7K4JpC%2B54nZyBGu1bZtf0mlZBhrVg82TvhppTPoZDIH9YlqH36%2FY%2BI5BcmCsBHjzXUvTVBnYNmh5kwRWlJTUlhvpPHp8dtPkM5%2Bw4npZ%2Fd3Qe4sJJtza%2B3iibqGuzx0yqvPXvIpNaABgEtfUU0pCLWuc%2FdZFQ6qNMPpAkQ155O2KnkQfut4q0V5ISJxRJ%2F%2Fe8%2F48uRGHwQNn3MERzlTHeRwpELL%2ButFKCdDSAEZDwaEHxXdPaKUU6tLdo8UQWJBRP0SUwhxLhHzvElFzHQnvdoB6xW4lz2LMT2eY8UG5KfKO42%2FyZmpMgcZdNHQlhLcactVpdKDC4WWKCkIzLbD2fj7DQKtH68xhz%2FtJHUS3iHGhuDjVvWRun6TGL9xlBddWmXphvHf5Iin8Owv1wjD%2FkgvIHyJ9YjC6f8nnOIVEEHXaziJonbuJX7o%2BABxKai%2F3Ikx67mU%2FNM5tMeYq9yeTNn3%2FONOBAV071vppBLerERRgnXX3Ea3SXRXcrjvLHLJP4xqzStbFT%2BOsYMn%2BfLs3WH9vCkMwWVtdetM4eiZxxx%2FAa3T0rbplHgTD4zCGuOe%2FBjqkARMsGWtXnL6LhvT5tI8xXi9KPvypHRU6Mrp3ZgFe5VKdNBVI9BdLAv7%2F0sVMdnjO9Rl9pgfArM6ScErImAiRFkE4yC0nceRMPSy4T5Cu9gTEOPor9%2B0oHPLd%2FR0rNxXXYplt2vzuTRpEwdwVQJjIQvT%2FpE8LO%2Fg6INWodDzmAMgpjwMjvM3A0sfn10QglX8JHXsSHBWuLlclbaCQGlSABeKMOfAF&X-Amz-Signature=330b1a4f9715f8bc62764289bbb2e3764b1a2fd3717189cd10162f3e2466b893&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
