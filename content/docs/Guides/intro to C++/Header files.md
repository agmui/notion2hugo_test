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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMRTDIRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICn1j6K5Ro7ohg9lwPfczpvzV9%2FEDkv6QR%2BaEgJgw9brAiAi1lIce55uwRYN63oiKUzpaqaJj6V7oEMjOLo8pdmuuSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQbi59sLENaT0jEoIKtwDW9pRDF2eHJDYG7XiaE3%2BDChEUfJs0bGdOZt6sQPagGHM2b%2BjDkS2JHhrrYlz1%2FVs1saAd55etkPjfqW1jurIWPN0GReKLFt2rsdiK1TywEJ1SiS7hMozsFwXft0q1QIVXu93yLIVg7tt4%2Fh8XFKnMTDEjLZVzm7Lt1FeqMQeCuBRJSAhFUr4eS89UACKayK%2Brl2NxNv6gfNDBefU%2F9ZP9K0TnKoAQxOIwbIGdu6hsOqD3Vw2%2BKctiXoas4vylG%2FqMpSOgN%2BGNEKYJha1FAsLI70oBzmGQ5oFocPtAsK4rnWU9lsKANDBX3mqt4rYUJDzWqbiDNXnCZD4oB%2BOLIJh0SdCHwE%2BznA0%2Bca6Aio0Pq7NfcbUtTWFCoUueVqocKmNTX2LFhr4si6m47Je6amFtPySO0Qw7xncqamJ5vGOuYrOKmemLk5YOJCIKL49HtfLXkXgvx3MvMMDlQfqWI8EEnkSzRCaYbWx0XzzE1%2Fz1b%2BlxWgNiD4MVJwt6OfAOVCIAUkarqBmpiwWGfR%2FpTfosXHWjpqxzLWC4mRBSRG8dzxIQB1UJP4xC8U3TqEnwU5kslnosRJL44Zf5BI4Kv9FU7aIMxrSIGypFngYKVZeGA%2B8TNVeE7h%2FqAEJNp0whZaEwQY6pgF0IBOaAFQRrd%2Ba1eftKJV3ux8ifUAuJ%2BfjCe5KaxcKjfgLWX3aHqsKuoZCep82VJTdGuZuoCsuJsLK%2BUjY1GiktYI%2FNvDC58B%2BQ%2FQsXkkGP8QNNhzU2dwYAxdKBnoRMnyUqIT%2B8u1Au1YrQqNHOSOvryB4leNKF4xEBJ8Hg8Q6%2Bsfa03OEwFYIJ2tQoWGeLT4hzKO8Cil61nWeFHeVCDbh1xT4SrDG&X-Amz-Signature=bfef45af453c23c6847d6c6313be06bee9351643c819f5a9062957a6f786bea3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
