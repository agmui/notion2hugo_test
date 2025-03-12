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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLO2EMN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Ft3P%2B3nVPqAyyDRfVYmE4twInFcoEs7zy4wPVnIV9DAIhANg9KBTkeIDEMra6E5xTwdkB9q6KKM2CwOy2WTf9dThpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3BHT8U%2BqY4wbpxMsq3AMZ0%2BF1B0KLrHFDE2Bg5LZ69x7cBiOiqvqI2iTQkeY24D1n5aSr7nEfSmuoiN9My9Q%2FLg1QHGHFtB8CiPjBcVneyfDkfDasiIzRg8X%2BcJKv6JVrDm1JLG45k66%2FwEIcWcCJ68wXY2wMli0bkhyykQrMZd9huhgCc7dfmrO%2Biqo3oM%2BE7BlwRaJ6fWxNEL%2B84LyuyPkE9QyxTG2bsRT%2F%2B850p6SDFOw37soadStVinps4v3%2FCpfrdN1yOHj9pl1Sa5YSsqYLI3CM85W1QBTPKlPZjX3UsaKjDvBFhUGLCfDLSqTaBJnj%2F2txq5TktjDrKLMdBfsBEDwIHhjqDCjVuOV7GLjpVf3cUK2L7XcJ8FVUs1OOmQLj7Mma4RNrfteNaQp2%2Bx%2FT0Ch4aNe0C4DDKBnKeaa7bXvCgbl9UexDkcaa3gsLkNmaRE%2BNSKTOF%2FbvrOcQeHsdZjpqyAQXK%2B79qDPqokRjP5KrsrATuE2nSMaFAuRr3rnMYVvFGKqvkAARLEZuDhu8kgdZosh98zB%2FMbbcgStrucCupvlzvoHE%2B4x51wEWToIO%2FrPqJkBYAE7PepN27lEJ5JTftCpU1L0dihEFRCmOSFElpJ3jXu1UQm0z2HOkBlS4%2FuYWKVRZTTDum8W%2BBjqkAeC6x%2BgyCP4q5aAqdZwzgzEN4ehoeq3nZIxEzttZoYgkfktjWATJE2ONTtM3cgSE63EjIlXQ6X5BSSqQF9HkkcmA7b%2B5QrZGpYYTmVs0FepH6WjTEc5mBxsqMJ5EWexOFmIFGHEzNdB8wK%2FwfdiAXnMKTuFKSELIX4AIauqYUTXSg%2BJoVR1SJbB%2BQUM%2FgrgpKRvHd6NHS0xMhV%2BUplBrWzNwGI2r&X-Amz-Signature=dc9f1337b255d0dc0bd32ea0b4e757218cb2229b4febab50aaedbcc113230447&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
