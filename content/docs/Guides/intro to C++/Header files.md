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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZ6TIJO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpzKPcaNQuoTj3ywvmEynP7bII2eMqux0PhdwdpeJSlAiAh5kGkjTqkQ9gq%2FYN1crcv1%2BvJn99DhwX9SrW6An4MvSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMts6oLpLNSTVvsvSSKtwDCRl0PYcsuSfYC67No%2FMbntb51nPNRZZSjYd5N2OvxXb8C1fyRNuf%2BighjkvXgcbvHucv4Jz7KEf%2FgE3AttWI5t8DB95bxLPG8lD%2B6ykJeEsYw4nDgyCy%2Bt3NbODnIQDWKcBQOIacTYl7DtltWAwMlGRbZW4sAeROwAj3B254u7VfHlQyWf%2BPxGtS1aBkXJjIDZjtxyjs4oGZu0SqCt3zf%2FPa1W2akYaxa6X%2FqAvL1KdzHT3gi57glYZVEYQxpbtWpL0C5PlEKfm3AxQrrEXzzORKS9HVDoA6ptVRTrnPAQ7QL0fN02w%2FmGdy4rL4vcYox9hV6LmDx2mzhIa5U3p3E2T34%2BmcnjY9Oi9oODzBMifXgPmdw%2FSS%2FWZ9Gxk6hJwX7vNUaFbUgSv3EDrn9%2FZ00RGcQeOjXUE9E5iQnJC6gjNYM4oPlbi6Z6AXW8Y%2B%2Fk7G0ER3ZEcavRGXt%2BxeY4K%2FfztOHTgYLLsO2FEBlp9qby7JUvGLTgDuQzNLqYbIrDhXkJpLORkSLlbPaUIQbY6N%2FXkqaisXDJeeKaGnEcddDJOJKEpSy8xhgd5a1OZvGoPi8H9r57C8ldbHshWywVztu3WuGLSvkdNO19wPGGgCSX2HUWKAVzRH%2FfuUZAMwxPLmwQY6pgEvqCgVjHUs4fZUacCxIvo9OsmeTRysB0p8cBgFE4oWG%2FEJmAwImJI%2FgM48aSsoeNOhwcfa2M6mCv%2FbbW24rfx6um2CUFgjUFg7L4u78Rzt9g%2BBxpBe1Unb3GoY7z8d3WcyXMS23Tmpm5%2BLKLmkNUFJqTdjYDxUaIcb14r6oxwvX6UF4wcuXRKj1gSAnnBgrZkXM5FICB6VmI1%2F9aDchb%2FA4Hw1c8jb&X-Amz-Signature=1819c4d38f82e0418480ba898b524ca9ff421bc3cd27e57684f9e42b7f1eac2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
