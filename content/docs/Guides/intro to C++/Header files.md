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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWAMSGD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZyDLw81J5BgdnztpigAM8wAZ%2B1EuCZ69KZOiQ6ru3LAiAjsYVr7MriAe7I%2Bg%2F4d97vP5MdEyHo4IEO%2BCGVpqeOQyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMLcBgXLjVj6rRMEMqKtwDQQq%2BubKg4EMbjP4CAkiOy6yiEZEKvlTiCgxBvExOhra%2Bo%2BQ2fRXXFB02x6WzOzmnpJ6UOIiP071fSAVhkUePTJtWGBHE7lQrz%2BW8vl6eBszSOcjIiostQrI8d%2BYkfGSLh1AaDWnROubfQWXqwkoin2GwAzDcDibqBe2StqM7u69rwfq1KfH30nkKRUf8viipUyOulx%2B1%2F04Xnc19qNDBTHXMTk0NnRuQKVftbU32CM63YXlPozjN%2B9B53olPgBzm7Y91%2B2RLNLI%2BEYke2sDMdVs6kmgqZoEIT%2FU5iCYicFDB%2F4O6mf82YgFFjlOOdJVNeNnz4iVbt4Gg0EYm%2Fsv6a6os5t%2Fd1dAN35JTJ8LfwQ%2BKd6kcUUs1xlN2mg7glRjG5KcHDVTZvCyVfjvEk6OQv1UxEVe9sndZ5NWAyqHBKs5azJGTnW7HjvoxhDPnxe97yZRyEuU%2FxQbo2WzABEitia2wNSVKwiPPZg21XJDd3xduI3cj4qT5wFgEydEo1c08cHus94xtHDuD4CmBq%2FzdbFNefhqehEhTs1KIOzfRmTdfMSmfNUboH0oihyVNZSsKOleTaq5IWo97aFnCm3z3VJQadUSLnEWBmqhoqw8nF0ODU6Yfk0eC6nYIS0UwuLyhwQY6pgH%2Fm2BiKCBCiW2199AIjEJ2XeHEVY7o3ti3ZjZs1yDONFUleboZ4%2Bd3R2gDEOFAHudiya%2F5rVYSOjKXi%2BVLtHsWElO0CZ6af7VEuenEvWN97sNaujGXrT%2Fd5kmG84lKIpbCItYfcqS12DgEtvfChOtwkgM3BySuNAFN5JOR3GPclvbV2%2BTNxZcMe7Gel2p257z0yK2XsvTxhMM0jZ%2BxtAFO4B7A0f4M&X-Amz-Signature=443023df3f4c235203ed51bfc07d98c6046d086bc6caa97c3dc3b0beed80358a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
