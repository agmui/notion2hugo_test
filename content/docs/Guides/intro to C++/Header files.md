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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZES6DV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHl94LJTRRlsweS1TXy6%2BYo3TMU2gu5dWNey1qOtYByfAiAZSuIRTlWnJ2etZ6V85Xz1hcINkexyDj5Bro1gSLo0oir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMNos9oqezUeRSKqv7KtwDAi6SJo3krdT1qjN4T%2B%2F9nw%2Bq%2FoQts0DRyldmLVOYWU1xmQL%2Bo5KLhMquYTwQhQ1DkwoGWSjCSvK0G0MG2Q9XsZIhgU242K2M6kbT889X2F7KKUL%2FKYqwWM5PVOqbBDvfohrkLm9u4RlmX8F5blXMjWsywXQFFDLkmaO4YTCDWr%2FFcJf%2Bn6910B9qwAAFx8n3gbo9hF3DjDPHJTXhhAAiIrXfRYQPSZLJH13tgrc7QV%2BIEYiRr%2FuQSFmdTTRAZ%2BayB2swNMlCjzQUGVTiOm0aO5MA5j%2F7IYKJW6e3hmBdrkkuEEY6qvJFAEh%2FjrsqGfKqnmP41arLPtmiIG6FWaVQCdiDEeVCLYdjK2UK%2BAIJgFG4x6TV%2B63sa5ybcqEOJmOr6VDB4MgSQYNO9St45oMRX6I8JYc8mmAqVTBPKV5jVdBEsCzm74086ZoiKq6io4HiHFGDkOO4jkBUn1418aWKFb6zpXWf80ojK84Drlb8Pw4tZWWlYcrMvWpRcme3MXVNv6d33NlmleNo9wVMEWsSU6nsQZh7Fm6g8cXcl6Z%2FJW%2FEetEfhpH6giP9ZDSsPMv29JHP%2BgaKm9k6Nh1CgX%2ByGlGWyAxEPSM0hFCIjVAUKIqNFche2G3QkN5mlB4w6euWwQY6pgHUACim2TXN4trs7yFEgTjnpt8Rh%2Fit4yY01vGzJp5L5n6WwjbDBPLvhnbrNWMeRP4YiVuk3I%2FO1X8jTMzF0bKPZtt12InsHE7R2F5bzufJW6rPNrb2XqMaPYgTyl20Qi69t%2FmzfMbrn4MtOCviVuUXIy%2BpzDEvzKrPBykn9ixOf9tyRPtU%2B%2BxX6iVkNci9PTYEcI8Nz%2BSUwYxNmBpObDVoIhnvUJJi&X-Amz-Signature=c7fabd87ea631a284d3dacaeae57161f3b61b078de13e9bdd08866779ad47eee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
