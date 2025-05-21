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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQC5JGYX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvkcGl4h7YNIAr3i9rfC9pEFQEXUKIRyAONtS6RuDvLAiEA3YR5n9Rqppz2N6uCjcs%2BOvnmmfDd8zXqKwTVNN9erY8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsZUB%2BDv23HXfq9GyrcA2H3bCP0EOVJpTy8SnLMAmbkVLU3Hfr8axnYixyXqVVYKFxu46LvBqWSrmQgB3FZ94KAP7ru91KubD2PLq4mKrcTkiwTn0MBS44a4rSYXvW7In3ylpfBPFLU0hGzcIR9zMSdds4gxrmOWincWdKgTFCSLBdMxZ6rudq%2BbwHVnIo0BbFWQzFV4qrrJpM2DBgTF44M%2FjU%2FsPfBLoFeRuXnUw1sEVf0GrEAEsLmv%2BkJ1kSEvinAcCNllwEzjVAus7i%2FiMhShIbEqKdqSWJVmQ%2BB3JBwOuZRJ9qn4pmemD3w%2BcyRDNZ9rOXDv87%2BYBF0Zbg%2FarKyHWlRa8rChpGQNte%2BCHPRpShaQ0CYEgPGB2njRHs0zK9qMFHaHKyGr0sc1k2E%2FlrzX8bBgSk2QJe1LAhDoK8cR1Uc99OB6ZfEFU8g3tUmVlTY%2BJxhIbmNA%2FUsHk%2FoKzXbSvi50fah8YA7I%2FBlI%2FgyZkykODl0qDTWp2sXAWn4k0%2FliRKWmvlMHrDY%2Bz8o75auRYgOOw6HktevWRqQtaH6QaA0xCO8LD7yOUNu81GL2UrRkZxzTq9yquGUxjpcI4%2FWvq700bx%2B2Gt5Kc6kNk1US%2BxsZC7WFwKdjV6NvKjJNUTN25bKx%2Bwx8YNzMKSjtMEGOqUBhJ1MaTeUGDSF1DAIO4W2gB8ZTmUmFJGbJPHB9xOKKXyGWwpuwp3wSjlddJhDlwerY465XyQfxnJgKwMN9RDU%2BRCqGxI6%2FyWEHYU9mXHR%2Ftzw80tO3hdCmIMb%2FSBTLbRWDyqNco6ApXfaJ8heK3hWy1ZrUmMlNTPZpzdaggS5%2FsgC6G94wlOgwR%2F5uin77KefLMKuKMQrVyib6vqG0jonx2nHSXbs&X-Amz-Signature=3123bdb94c5cd6e2f2f6313942aa7d49386a30987a3dd456a0c0fa164c417a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
