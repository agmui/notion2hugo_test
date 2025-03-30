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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCOW5GJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCExocDIeprRPpa%2Bysjhgr4%2BreFo279kq7KjJ%2Fbi6FaCQIgPJOyi%2Bt7YdYoT7Y2%2F5mHLgF9KOcNDdF%2FZeApZRxwF%2F0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdTvRuJbRK%2F4exihCrcA1ZERODixBpsXEBMVMmkVjDKcRwrkWKT77AnoM%2FD%2F25dIjWogY3Cewcqwer%2F2gnpEuUcMekw%2Ff%2BZclzPqLesfq2YSUVYVjl98w9CXyaS8%2BDMstmlrXQdqDoiebLMyeMPROr7nP9mf9RQoTgRn6COuJ6Mkdv2SKaBLM16g5JtNQQYWVxtgCXl2SsoLGdRVDIRUEKv5BUjly%2BC5fH31xMXxzzZ9M17aQAk4d1dKhks01k4qFu5DS8Tv77UlVm0K5bKHeuKyIaTe%2BSCEpvottu7dSIGnU0KKgVoMYoYW6s%2BST5B%2FUJy73O4i%2Fe4tp9uE%2F%2BN%2FJ5AUFdUbNXbnaCq1btI1KCIaXhX1gJxSqvie0dKmFlvPRGVP4E3jVPwIUc%2BDD4s%2Bbgvlbptw7%2FNfu%2B0Y4AERsI8Sfp4zdRXe7E%2Bo%2F7W2GlEDiY8%2FcvGHs18gnD4nqiJrrBBMza9i73MTw%2B2oacCBZEXPjH0pTT6Amf7dWy4l5MSsil%2Fyl9UYEnZOOiGhVfEcYq7VnmXXN0waynQ%2FxdDcCNNsBOm1a7dQqtdguvGHdPnlXH5h%2BvK7wEXJnOk%2BZkGn44EbIMvsZgfs%2BJ7mdgiOpI1W1rtT14e3znYGKTNpK1wq6251pTRdNx4XTaVMPjpor8GOqUBPWylFQ2rQBXmgB4qYzsdHjEMx6XesOmPrvr8%2F22kAaw1ROvX2Zsb0bkOBANLOAFt930l8LyQl3eqsv2xrihEAFiXtI648kk0cAM%2By6mDYfIN2HN2HXbqwhBC%2Fngl1xREELtZKJuIzGebANfHvzs1sSMWCZSOlnKA9v6g%2B8ESZ2q8LJmDcIGCyn0lnZqZkqflni1f0IXvXLhOU3l9IV%2BrgMjzVPYN&X-Amz-Signature=9f189f87a20bdb28df05aee1987ead4ba0f493a2e6afec0a73689ec60e82ecd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
