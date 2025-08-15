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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJWYF2L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIB9deE53P61REoiliBttybjFe%2BOgFGyyFAT3uyRsQeQHAiEAvJF%2FBoZaICuaidE%2FOaawWeUKneTuKR3AdC4kalj8%2B%2Fwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCGuVn%2FLIWTuPxzSdSrcA7Qbxsg74AfQ3JGeW6%2BOY0njHrIwmln68K%2BnrhP4oA7wpUNhueN1JEpLL68Sy3HVAoM0MjU2HPYaCgwcZmf4QeL8HIuOq6XOBaqZVCfRik5rIsCM5z6uqXTirZi%2BtDL4FCrxWS%2BkGmxe6Deb2Ji728TSG1fNUmFvNVeEtVvpGTPgeGNgPGECg%2BpwbLYO6P0lcLJlWMlEwyO3tMwG3MlsJPXmOZFm6cCRz2p4TaMG0SRUyTikmmEhS6L0q8JkmKnusYfhrZ9tys%2B%2FQ4Vur%2FV9TjIHddov69fWGAlLtEp9TicEvLbYhXoyIrjxz%2BdQWdFq7OPsmmEkjggo3iBTa88FKOe9HrR44HH0%2Ft6FJxn%2FJaY7TTCxuG7ufzkFkGEohwQtOrlyYRQ27d8mmQNRWaAhKudjEqUKsL3y7MZOcZcfQzxUKzAihg0ZiBgi%2FRCqKxhJww9HabSat1nb%2FRHfcbU0Kum91ZJEu57FLA2JerF1bTjLNpJTcN5f0oFpb1P9DdNYuDX%2BGj1R7Dg%2FcZwVQhrkEB8a7h%2B49mBbb7uAT6Ks6YeqbOxDSwPjFzF6QT50KnvUgyE1Vtg9wd6ONZKs3PAJsc5NPM07gPlE5gXvWHI%2B8%2BxKAbk2PBfEQs7T%2B9axMKDv%2B8QGOqUBVAXOwoLBo1v6z6cXUM2ZVKPKq6WYOPnKiAPyXfdvebJi6eXH0aq1G%2BcXV7IGCtezhDWzdFWdFh2fz4nY4EgzBYSEDfLL4Y8kBC9V%2BPPMVXpSr3qpHPDFjR2X58LfWr2WPZhplOWm8Vvv%2B4aSXVGTr09scW3zdCbJD9TMQtVpgDx6LBXzBbxqrviN%2Fleqkl0EBAKepwFsnqRHZdQ5HJs0yTiDJzZI&X-Amz-Signature=ddb34f68b33ead8630fe69887b7a1ce06f99f27635714ceda0e9ab07d6c93cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
