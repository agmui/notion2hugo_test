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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6RNCS7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1pQcsiWthcBbe3ewos897xWktcofUIAPaXTT0bBEWFAiEAxm2UjrXwPx%2Bn%2F0x%2FZyLUkjAa6zsYnMtIbVTgsQ%2BV5ScqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQItzbT9bb6%2B3j%2FmSrcA%2BSH2129zTT0jgv9rcXBPGAM0tLWYBmJj%2F1QtfEJyPz3NdV9jCWvtCusPFZ8GGk%2Foo2sPjHMy3TPumvHphQKnmfbTkiJtEciZQPmyCmJczks8sqCWdpILdqpmSH0UKJ48gLUHkUn10A6UZn26J8Gt26qtGGm%2FNNkBzkwGtvenjQRAoMB1qOmP210Okv9u4Gd0xrBMqeGOpo%2BT1XM4f32Xrnk0W2BCMpMb6sfyke18qLzqq%2FH1sbDUOiJH8dCPxWANWS1Uaqm1lTw95SMlfXBX%2BSzK9OUIeZdv8KiG3oghjvcTGeAHEEVNRzkzwZOc2kD0bSqPsk1%2Ftv80WQs0zQe8tXlGGQMsltveZUMBxNpEBZ3a1nCFV%2F8kSYLNs%2FaZIpoYRZYz4aE1WGUQCCpUv4PNARX2kNjeGMqXINu5QhND%2F%2BvDk0CAxJijL9emSgDdYzxDW9pqDOSJHqE%2B3moJPsBFlqwFv5InK4mEKo9jcI1v7z0N%2BbptroaoiVbBWLJzkhsVfKh27ntFmln7iV%2FsxvR1W%2BZquSk%2B7bDIOxqxt9lRyx69krC2me44H2LqPTDMCswbvXvhvYM5qFfYyeYyLtlwGNcgrGgZbzH3ykuG83QQ%2BzWLxww%2FMw%2FwGnjrv8HMNCcmsIGOqUB0dpoIWEdoY5p1l%2BVnpDqYHK6%2Bga%2FhOKJ5gbbKLsH8FQK%2Bz3TOLp%2FjSuoKQaAKBhq4O09EfsIoOuKZYeuBKYVpLy0xZkkmzJe7y9vjoxAQz7kPbbX%2Buy7KjLKOtHjLQx4lLJspAJuYVEdojjAtl%2BQ1WWyn4dWUoWKTUFZUDH9ydeb4ra7W6me81%2BAe%2BuFqQI4m0APd9invpAVX2GWMMJ08KhNrAyj&X-Amz-Signature=f30ca98f0106c03bb32f596c4a76c8d3c61b4f0151b6af19a951d463f882184a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
