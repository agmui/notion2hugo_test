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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMPN3M64%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCyLX2Heo%2F62Wwgu5BAe6fbyJQOsHPYthZA6oz%2Fq%2FT8zAIgY2%2FRGlw%2F6BkuJnlsmvG9lsic0tslHo74uqtrZpcHGD8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqlRxTYWNH%2FiHIfICrcA8PIivs6LVAxHlUPKSZ4yo6MUUGWTaRCX2Df1h8rFiEifCNFdDVwiv%2B6RHrMaR8tOlCI0N%2BN53g78wHVouMaN1BkIOLLkeoNnpBlXauFgVNV19qylGVwKktiW6xzkKnin4tdoS2Lb0DvsV8tMg6fbWQTgEWLA4q69UG8swioZgbME2T00hcLp%2BOsFKVZGK%2FIHU2PHXGSMmH2trow66jQgkyzsw%2F8nN8A1Fvi%2BlE%2FidZoOEzps5G95dJ2osIhep%2FFy4CUjRZwoNdOAyXiNUvC0C1Tofv6PONQJCNhoGHCTyYMxtHSwm9oRInVGTk1zyYOTi95Q2ta0UpWR%2BvJsVTtbzpVBr%2F2k0PJmpJlXEVKcAihJ6o2PTWDo0LK%2Bz5%2Bjh4OpIA1tqMA1bNV%2FXseML7RR%2FIK6oHdLxVs27C2ccbGktJ8u%2B7l5BBvkaN2BlVbt5LRZ5jp9rEY3VPa9qKjcrzkJDr4pSnDxcXuHtEbqFdqoN97T%2FSKUJKorPTk99rZMLDElmNo70dIxohGd7VQMdJUrQvvNNNVUzbxLtg7GQqpADp6gqwj8UYrnffcZA1aMKBYE8mLdvOzvNUqElvS9HPAPIQ1loM5Osvd%2FOW0clnfXWvTwXIBcRPImOClQ4rTMOrJvsEGOqUBfQWUZp8eoWhGuuGmtCBNnNmal5iiRKx%2FCun3rSwDs8glzFVo10Y5lzvQ5RTPmIHTGTjJOjgHYDQZjnkQjWVez5Nwo%2BqY4na7FPb4fw3sPJNfaEMqRvRN9hn3DEmjz5sRBj07auarRpmLYxxljNyVUoS5GrWcjybWiEr2htNvRp4IE7Jykhj2PJhNN2UcjboQoUNcF%2FENoN72ngoF4A55x5pwqpnd&X-Amz-Signature=bad8e2cf6610439d1c2e59f01dfc4abdcd818802b6f1658941835dbffff40928&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
