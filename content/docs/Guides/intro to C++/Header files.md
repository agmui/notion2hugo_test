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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUTVC34%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcwzzZNUZXwG%2BTC6X3slSY2aee1gRI2QcalloFdaQeZQIhAK1nKV4ZaajWFwbxHZ2ELeC171cvQ2EFMG60MDGlSMQCKv8DCFYQABoMNjM3NDIzMTgzODA1IgzHuSsEyGMc6erQEe0q3APREaa%2ByNfd7rJcPzxqX%2BDBxuinU%2FMCy7zUprMz%2F08NYQcnhFHVXgEEYvuU8VD82ltGQ3W8GRDA7hBVtly8U4RbVY43pWbV8N5c5czHopN4xdPCnZAS%2BKZFjkT6w14yrDc9kx2JpGwit9cyuQe4%2BaOsEAhExkcsY%2FNvDh3%2FJfPfLv1cAxoMDaZYnGG3RvVsjTZZn%2FH7QPw5xT2SF5mv2ZchmMEyIDN2JdJkSZu93l4U7fV5dTfNT0XGnAHKyMVKK65V6kOn34XdL3Mi8I5GEitK5wzOqHlzJEqKP5U1tV8ytM%2F4qiA1kHk0W4O%2Fmv3XSz2bybIr98VyzHsitS7dXXrJoBMkYkhhecapB2qDUHVBI%2F2T2Rfd5C0bhdHeR8l9b8cbpn1iOpHp9ODCoB9KS7WUxHi%2BZHTWNg2G8C83TSpHk0O8jt4fK1A06oJ4EuE9rE1r%2BF8AsDF2N00XWhTdxU%2Be02t0wHvJwyCgFlPESfdIVPhHibNGF18nr3h%2BSJ9ZoVRzZFKcWaA6%2BjtDONYzUJ1KRx%2FCpZ730uQFCUnPVP%2Fi1TLovHFQ%2FxsOrUyQhqfF%2Fp7rKy62A9Z3hzN0wQ7AZUc5bVBACMcPIviqXE1gHdIYuG5Xp2mDpQuDg1R6zDCckNXBBjqkAc23kU61uM1tUv%2BgTBxqe%2B5VyshEFiV5T9Yr%2FktHqt%2BvDHqk2DnI%2B7cvoD0XeJa4IBLy%2BvKJMhe98WanKYMyHNsTdlYwhlFjaA6xUIfu9ChVm4OX%2BFlP%2B5Q3oNIR3xBi4DQyGwmdRQiaY%2BnzZTdG5Sm1eVVztxj%2BNVvycGrGz8sTqb%2BgJjNheQtjP5Th7O0IHsVV4Uv93TebSd7fKrpAb%2FeoaM2p&X-Amz-Signature=226aa8a015628abec8cfd8c4b94291397e92a3f3e7cb310c2603ccf6fa7165b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
