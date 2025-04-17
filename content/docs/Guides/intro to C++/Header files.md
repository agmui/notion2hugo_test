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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WILUCM4V%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3EM%2BGaz09IJpEDETlDN%2F6jVtoGQzwBYP%2FUQgD5yVXbQIgfawzutPDDnTTH3iY3tye9E0IaaPYsuQxQdOG%2FY49Vdsq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEu5FTg7JWz75y5IxCrcA13gynaAdpPNvOPpAe5cSnkGcdFXrhF%2BVskvz6rf00JxOKCtxVPHPrBjM78%2Fc9P%2FNoA2aNiNl6KvBBqmR5aFAAsnTlSdnmm3tMnk1jWG9%2BNaBLUF6RMfY8TVYiXm0e5GUTgUrLbJ8NOdNKhOdqrvxGJeD6hlZAdSwwL7T8p9B7iOVEUcIF0vwHErO%2BsmFLUlZAVpBjijNWUf6iPzpujkx6xjq%2FOpO7OBNtDkhlcR6L2%2BTLL9jclNoWIEC%2B8TZIKqd3J6BUOulc9cNsRHKZmrXcO7AeM2NfNz8D4Lc1RhzkXVBgMq%2FmAwChR4WnX%2F1xjWaqvHquHpr3KBYeY1jvSUqgyukb%2FrCIEnsBZ1XnBxVSPWaB8nWaZEbkieaItOjM0abVi%2F3wfN4hw14IGfq6%2FS3a8c6T8aTIIelnQTqq5wFG8Ox9fxrmJO%2Be8XZc5vBC3ARfnqfHuMaldQzdj9EfC7RNoj2yU8j%2BA38oBvi2sNErgwg45I00fvCRVBLmBW9cd5cIwVzcYleamB%2FV5q7Mr2%2BR1%2FlpWzaEuAolsNw7dPJG7YBcCDKzuY5iUq1is7AH0YwBCV2GlU1kqxRsG75gZNGWyQNKPCh65QiHo89D8%2FMFX5ggGksAGbu62ezxHHMK%2BchcAGOqUBiEv3khVfEXJRIYgk%2FkHrkK5Av0cWhl5jMBy7XohIvzdZT1NpF6AyI8Dgn1ZqsUw%2FHhgwFSiHg0QAqz8avpWUKUHeh%2BWBrYciDjNXMrbWagE8hCpIw19SYKhmtdDbuVIkmxkPyVlArPqvIzC2ZMpYlwiI8YRxAsPK%2Fm7dpvp7yNT%2B7MwZtx1%2F1dpj0hD5PxJvgKoSLGFAAl8pwpUZ9m3d5sf3A3Uu&X-Amz-Signature=be0df20727cea3b3ca221b8a85e70489f6e39bae6b7280d16f1a33203b7b0eba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
