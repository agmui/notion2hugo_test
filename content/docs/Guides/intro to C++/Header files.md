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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63P3XME%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDck0akwPQlU2pReBxaQNX0im0F4e%2FcD%2BVmrNR8q%2BihaAiBJgZ%2BoXGUZw5Q4yWuMvwadDG%2FMhOLBSfIqEaCtX9irzir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMbWbT4idhQHgFwrkrKtwDDV4x%2BnAJDf6kDXLyHZJrIxC4TPX2DKH4SiGdvDQWXfycZQf2pQmSAMUuqzpgK4hPq%2FjbDYyTb6xvfur%2BGp3n3ktuS67QBn3hN3aYafwuRJiBKXPbivvyaizMRYEdxNv%2FqKB06yhCs6nRWIAgyJjNfCRJU8C%2BhW%2FeYO0xF2%2Bip%2BOUBu3RWIFDObj8kQT0lGHQ5XKnzGImfdgQif8zNh9aT0d5IdnZtDC434dkawJpN6CbVWXu9k6mbEgxQd%2FXGaYZTPuKgRh7nTrdwm%2BDyrvHxyEvSeC8HDzhcJYbBkvn5%2FI3Bj5Lw8wajX%2FDrrUvEX%2FIZeDwE3h22LW3JRP8458vWfYSeCxAB4f3GGi%2BWt0%2F0GHp9p2V%2BWUaxv4lPhJQ%2BprA6sSZEaBR1vTqXeRdUBKfN%2F%2BaF9DFTL8c91M0mG73fblTg%2Bpdt0dSHU%2BLJZ4FwVSHGtYE%2F0yG4%2FuTTWiQAh5gwJ4GENl8qcqHwi0zrEJIfmic0BxBHz%2Bjw%2FsVQfmhS8PikaUacOG1xkr6319hkWta9PbvvNEiJhlCi319JFr4yEyjyphIOPN%2B%2Fi%2FBc0yp%2BSS7yD%2F8J9qCt9irqddP1B6mxJE50mj2KtaMAqMeh5fbGsPhsMqEjUXRIiNCmg0woKi6vQY6pgFKSrqWaAHLY8moqBFLeAjI1I4yP2H5Cs3jizcFYLLA%2FC2BZ8nNrPjYfeliGejt9v%2FRiJKGQn5oqGT3Q5l6wdO4bZ%2BDKHhT4xCBnTBZjM7styGGothhZ6EtH9NYWlJZpowRlG3SAYQEZtxUCN3GGdo9KedjMUOlulN%2BdSrZ03FZ1RNFQj3WDFimPVU%2FnzLqaWT7%2FRXA3iDoiV3F%2Fbzwfmgd6eWLZJd0&X-Amz-Signature=e07eae7e8a198300095b4ef90e0b2e9a21dbe186d69544c9e98962451b6abf27&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
