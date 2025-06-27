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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIUBFWX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjAF57W8Mmkq%2FkLOJoL5tgeOruEqWinusvHPhhhP4wPAiAcfBu05bD9Vp%2F13aTrISFqzhmx7Cc3zgm9LGIRAp9dtCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMcT27NDUbwz7OpCGkKtwDH2h3FBun3aGErtbKGWYl%2F%2FjHqgtLWqJveZ%2Bf0u6fwW3RHDphn7YH9LKhuQ6XOqLznWC6%2BCkSRbTBkN0LAdGGfHau0tppk6qlPVAffgjtIRO0TWRst91moC4ShiKm8fSFJVnN8wyvTVI0D%2Bn0bo%2F%2FQLHtrx3dSFL%2BNiWG8jr0BbC3Rg3448PiO5y1BFmJPziKsd2b8OdRxdjJ5xseizNwJtTiHuxupdAt7x%2FjNerTFpdQZd4W7mDdsFxCkw610C2gQU%2B0Bfh1k5xKmhinLTBOlOSDqcuXZTL4AisnaaJa%2Bd5qYHDUm2lGkIfeRMExshhIdtPpOmjKiDkJvWuFXKVUFSW2i2xKTKBsQ8cDUG1OnYz6uKor0DwWOiyloP%2FZcMbaCqen2U7LvleRHvhau%2BOkCCx6ae9OJplkbWEWYHzoT5onB5rCeT1oevwim0XUKNj6qReceDKV59xsiOcZb3%2FM137QBP7FWUlaaRvCJJ3q8jNNvCx51lC5kKEcuK1P3j%2FU64BxAC8sDzlB9SGFcondI9BT9DmbQCGtAL2%2Fx5rdRBbpODTrs%2FOBV1aX5U2VExXgg%2FnUQdKum04Bdqps3R2RoyJSzxy55LtaROz25MHc0G94Zo4Kw5S9MYg80Wcw3cr7wgY6pgHe1ePgpcvCFWddcQUNRYh13hr6lCtWAvjKC9YhxMP7HTIR3jPxgjTSOjfdQgijtJi5ckLBDUY08a01qAgtg4HzTNI2qPRWtY4l%2FiKGPrC8k6Nk7DpUnjWzkPHMF8IlZqDnsnafYAZnlNUonKXws1iTcRoDVmNuHdnYpCSJwpA0Kn8s4jVp5R5hieSHpQnoUYEgZxrkd2Krc%2BvHEHnokcq%2F86MMcJus&X-Amz-Signature=1714611b87eed58b9fa51215720f35644e208d81f829292094a311ff64437625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
