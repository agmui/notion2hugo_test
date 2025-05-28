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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3OBKQK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH35zyukaKFPgjkNAbijQqrEoUHNqaSXRF4s0lxO2bd4AiEAnU0Lv4c%2F73oTQNUHA2q0VLwyLmyPbSxWPIKq0KO72gwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKYtoVg2bST11s9EpircA0gc2ssV7upAY5G62wDa4k1KWk2jX7fyNTH5D1PvYeE6AM7AYhQsbxkwiHVTJwHIL1IXzjmzWvYkw0Plq%2BG50bCiwKlK%2BZZBBk3H89rVFBkimUfcv4%2FLoajI3jenX4MPkB9vACjBET6fK0iNeHkS%2BaH0Y0fXAl6ihrya4SpE3spIrxnPF%2FxIMd0hTo8cjzseyssHZxSwyxovbn7wll1FD9zqxTRINtb%2Fz2NQHuUvJxJcupCYvNGYoJcAHJRX9iNF8v9TaOYX8%2FuGVVg9tJP6cPG4ISQ3131juKe5AiKo1iOlqmoOZ6qWVxSSRL8R3Za8fRLlWc%2FSJW8NJGEd8DuT8U%2BXHfjdrNRZDeqVkYAxufLdwiaff8yzyWCgaxagxPLu15M%2B%2FHp%2B2eEkE5mncNiJIF6l8MngC29ZAwwC4MAU4M3QBX6SShaOQHO6X4cwEc7SYRAWpqigAIniCRBsZzaN6XF2Tf5TK3%2FORMse6fOlgE4ilzTkLT8Bmz9bS%2BvA4Uw5qwr2jkV04w09X%2FHnfyti%2BKFhyFeiMBDtmmHblDY3iPH2SKA5iMWZrA5jTY8FNt6iR3g%2BHXszHNeEcJK0i7JuRjqqAlz9BKcw94q5zUR2pTy1LwYcyUdaDwzLMpItMJL43MEGOqUBJw7zlMISGxYYrWm%2F%2BUi2J8qzLFozudHhCRTXyumI9a8%2FgqTJ3NDO52LDtQSFlrGj6JvUfp1a%2FnitR2bf%2BG4D56INI6bmxRyl0E%2BjZ13M%2BcvCYI9aRRup9tznGEnyzABOpEQGt7MdsqUor6vQRlGHvHS67iDwjRKGPw7BMNVjLlOJup186QYSvqEzqNgSqIMA2Y8yMnYb9Uq7VRAkjl5gCrFquRBC&X-Amz-Signature=a89e60cf83a5d578fd305366d2ac51cd740d357efd5b40853a2e0ed1cce0b3a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
