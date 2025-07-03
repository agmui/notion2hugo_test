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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSS2JLGV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCfizknvr9uWcdUQtbTeNH3ByM%2BMPVae1YoZTVtbbpDIwIgR7v%2FFy%2B6EnN%2BlgSL5QsdP5KVSIKw6r3ljOTiZeXMGjcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFPe1ObXOExYWR4dpCrcA016XGQVwReNLq15CLMfX%2F5fkIcVN5tG2Anmbiq%2BZ6znQbxXTnwP7Gc40zg7pX%2F0oNKlkjmAe6wlUgUS6Rez%2BSzEel4r%2B2SdzxlS0SBPrwusR4DT1uBiPhJ2zHcenHoSW7Z4lSmSG7W1i7eiqFNVhjaq3WPLE8nbCvUgTf5fKQ%2BagNA%2FKAFqLUJZv4u2I9Lha1U%2BglZt1vQnNhjLFO7XNvSVyefmR9Gz2BlPNkgpw%2BQtqOJwUtTpLXnsfQOT28Lf1%2BmusrA7lMZKohgUYHQjd6LHplcxMtNQ5oZrjeT9XOUVzjs9F1KzfYHGQAptv61X4fbz3%2BsF00V58HcZSC7RHAZuIxlPViM8eiz0JLdEsinRV48pTfiHwme7%2FIU3m%2B5lycm5wl8CZKzcsMGWz2AlNrTWWEkwdcKmfA6NCAykdA0Th7oKo24CcYBPFp3HfY6L1qi05QTHTUYJMYdmNjwa8LEPiuFS5mMMDaCpRIZa6CaZYPrBek%2FON9veoc4UNVbhWkNYLr50ZCV3MTbOySuWzNUQd6fh2IInXnoGN4q4AZMzPSqGwSHiJ5RUTplipE1pJMMi3yynxDwLnNFw%2Bk5owPcsQNb%2BtPw6ZxNWb4IVGpgZFpU5%2FrQethegnMOlMMPlmsMGOqUB5khH0walAXX124Cc59c88NWdA%2FSISFNdXNGJ5aUU5%2Bao3wWjASLV94FuBivJ9%2FNXCJ3mHQSlg01h0XMwXT%2Fvw3lrdwwkMYuzeRl8KxwHPNF6Wa0%2FzIuXBHYhO0fmmDH3i0tNzfEu5Ix8lrEOeKiwv%2BvKJB56jN85HXS6XP3g8OmG%2BVwW9rSpOacRsvUDv3z1PmnUgvUbalZyKa9IJOHqHDdPwwgN&X-Amz-Signature=eba78de254fa335aa7fdecc47ae5ffdc015ac63a8ea2e53ef0dafd858f552468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
