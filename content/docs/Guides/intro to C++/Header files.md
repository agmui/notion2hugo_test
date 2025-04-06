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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZL3XRH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDha80DfB1Bzai2n5QG8kR%2BAWK50LdzZMr01gzgof9EnwIhAJR%2B%2Be%2F8u7G9aIevYcowLWWP6fbDcyrSw209ZaMTRoW%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igx9BnA8ARbdpdwjce0q3APoEWmtNnGM%2BVlkmoDPGVBPjXNgwHfiICbGA0ux1scyBW6HUZ%2FNeopeCnVhY3x1VO2uwsEgianpGW3Q8Kdhf3ArpRqeyEMfbqki5h5FL7fwKIdgrv9kU8jrsXZMTkfROFRN3TsKxglGeKM8%2Bnp4wZV%2FQxJDxrFdgDdWS%2BW4MCyZeRQM4FAxyPHwia0nPiAf17sFWTk0k2yNTisCnIvCAn%2BgEbJJc58F30oy8izIyhGTygS5%2BKxm9kpR3Bjii%2FzNxl98%2BvB3p7B6T%2F0jiYWTrY1hujI1hnjjtuXcp5kS9Yp4K%2Fgk2k%2FOtdFOkmyFGgcHDJG78iVHCNZjBYsNNgQMQPQWHlYcIni3JrXPkX3a5FphXknPHgnhG3uyb8qG58U%2BYuKPJLhULPg%2BAbAuGqkbj9zD2PUKV%2BfzZRfBe8y9N4UGqSUyiHP1nFKDgnoEF6AurBVmaub2CWEHt8YQ1Q%2FZsqZKL70CSmO6Ij3BeXyFoU5CrOZ86SlhcPSoKXVk4qm4ODUbKiynJ%2BdlNDw0%2FOBjJuPslJxgoVeFk1y%2Bx8d95kFzHOYDUidv%2BHnm6drg4VgUgTRaFDb4SGDbKXHBGhZcNW8HZeB8jP9%2BuCRQRDhhJsYNjANtbnPDJhMXb5EDgzCr%2Fsi%2FBjqkAWUa1j6%2B4SwudDG2v%2FujIkXiJrpCzV4gEalL0%2B7j6dY1hMUMgYg0kqGZ9lzHz8N2qr6UEvourmN8klS6%2FA9cBMs3ur%2Bl6Wq%2B7AivRU4FUfttiltKCiYzy77tAkxWVpzJAdXrSwSoWR2X%2B41JhThxXgS0Isws1TfV042OIkorF60cORYdF%2FQtLp3y%2B7K%2FMdskF7LqM3DPNfFBk0JYfMeuyeTuMc%2Fg&X-Amz-Signature=1e603eb20d879da440efb96efbf093a25991c0b0462b2ee9d06e8d5c69b07c20&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
