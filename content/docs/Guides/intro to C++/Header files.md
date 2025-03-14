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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYFNXZU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3y7lgWTR%2FfbtNIL5%2FSDv%2FH%2Bfo6WcFhMw6eex6yCIyFAiAHhE7X1NfovV0ZvXvrWCLPXKQapVmcc1w%2BLPMTa0Ch3CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQNAmAJngFOe9xq7KtwD59Zsig3VfnNubO0Ajy6%2FNoe7NCC9bQRb4GxkCpAz4XNV1AwqbnRVH%2BGA6UB1rF6W9o%2FT5KlgM5W6kRGiYcwp%2BJK9J8d0QIL0dW5IWqZVCdB98g0VZZatIBnOmZDVx8CSuqWRmpJuSao3xvYtrVKulc%2BcU9L6PUB6zJLLJeBjuPE1w%2FdAPzghd%2BzcM4EEBGyVNTvFueqTXP8aOvDxHFeQfWhjU%2Bee86N0lxAtQkXNJ8OrWaiNFnh1zjQT5TzgA0MTWeVqCFmWrkt8s1w6NkgGD3%2B0iZPT46sNMTbuNvEgfH%2BTDvjr4cXSPpWaaYjqpbqkg05Wp6YwfywyhZrmmKLxrESc%2FTgrfml64QGYMVSMmUtWoE7mKoTMIPGjBTNBBuUS4WaPFxFv9VUuWH%2B1l46bSZeAjxIlKYPKM0WW0Eb8vktBmnK7I9%2BuCwD%2B6Vsapv4sZlmqIXIs06NPhfUjFFXZHOavmOUn9uQYeOEPbQPL%2BFo8JoVGA77uCdIEpWYHKS937AM45PDdXvz8k4BKRx%2BXI%2BFMR%2Fv1utGZR2fNuEGLVIlBdYn92PPlS67adOIFYAfzpkHEMnxBCG5WLKqPr0fVeaYI%2Fl0eDUZZML2wAxvW16XUFdW3y8E%2FvJXEmCww%2Ba7OvgY6pgEPK3JOU%2F1lpubUOR04KfpVE2DdloQ2nztvmBqA%2BsEJfO4GmKGvOhPHjohV7iYXdIAyqBfsOqq0Kn46vZZZ1MqARgS0X%2BbP1Oj1NS8wSQTYtT67wYR%2FQJQNk8A39POUidKN539dhn2Ecy%2F8pkzbVvrCQ409U%2FG%2FI7OT%2BH17ZYUyyiEGYzTK2802RR4ytdk%2F24e9zUa%2BR61sv1x3%2B5a3HcGUHc2u4aFB&X-Amz-Signature=a8b5e956a34562394063c147a1a9adbbfd12403e38bb709aed70db35ee163538&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
