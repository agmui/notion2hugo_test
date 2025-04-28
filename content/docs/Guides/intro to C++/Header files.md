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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKK7RD2B%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKbQd7WTlKmRAuPNRV6MLM0GeHJVr9dtY3DUyTGpqH5AiApM2sHGP3eYqtu85uPyoetRzlpzHN8EtXSeyuzlFj7sir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMSB95XHogQni8PEOxKtwDfpcfQ2MAtVmLxhtamPfXOp4LV2Zjdnvix4axY5azR9mF09b1xz6L4P874OWQh9cTsKo%2BexlQWyJVfDhLoaj9Kd6CJgvH%2BcZsw%2BEUOy5KiHDzP6vgMvexhgtDOnO7Vyiq8st0AX8%2FNmNkGU9n2pFKO8XWoFL9FjP5iQ4R0UIPHRqAurL3lbtK7EzaAQl6ad%2FyZ1Be4b8R8GFo04LYYvsyt66Wl8Yzk%2Fdo%2FNRSi6h5hPvPph%2FZRlnDnPiFDB9nepGMPxwnGzN6u89DMdWrxPTlIG5ev6Tt8FvJCYPmRsouO5iMc2yB0Qc0DodEgN5Ap0wq%2BYYEbP%2FTNC2L%2F3nEZ9aE2tkm%2FHgnIcxQEkssvt45M2HBXgzauPB8KsUz2fUbUS93JVamovnW%2ByEtE7pdHkDZIpC5BJwMfyakPA%2FqzZjuIVjPKh0QLCSosYywPNuUgMlwXbh3xa%2BLGWUGUfUpKQuOTv46mvL0UH6m9SMt20MLrdnt46W%2FUIhR%2B%2BmS6roBES3qPkYGfPI0FqTTQOof0AWeRpaA9v4xasCJ8%2Bf7TnJg%2BgtUGAcFDH4zQpJqgHdnUHh%2F4JjzJu1LsuJrEjufPAQFuSMVcT4%2BdFQtSikc%2BsVl%2FZvgQb6eRs%2B6wa5asyQw6Mi9wAY6pgHlVffDWFvcgYHsdq%2FCut9Rd7I1BbCyL%2F0mFSnov7s7yD2bjrmXM1av36nC3Yz8D%2FXRj19EQ%2Bh%2FLov7kgLm698z1mJY00vvx9gYJMBd2IFw1vb990ckWVrhq38TBDaA1WIfQgOTl7XDN7TD8VQlZlNkUp2Wj0qNmQ%2BvhqwsW8Ao32XgJD%2FC6RwZiL2q4gfI6ZMdHF5zmb01wT4p%2FaBloZEiGXSz6ayT&X-Amz-Signature=29d833738f22bafa438258de44582c64205554ca520c0fece829b24e4c9e2ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
