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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN57ZD2D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr49iSFQ2qIcGLdFcLGWKjk2j5%2FJ1Apets1Xw08sVHkAiEAhFk5MhND6CAQ1BkOogiMxXjJz4BK4%2B0eAsrBDK8jhr0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOth2B0LZ7%2FZdcRAICrcA7ADI88SZayPkO%2FjxXqIh%2BlF6BxV2cNCRHw1Td%2F1D%2B6ABwOhBHw%2BHT7zsen7VHmnjn3%2FIzblc3tMH4tVc8ZMeie%2F%2BRZDCvvWBYArbyG0TnYUKMQsmx7%2FtChOi03Y218a8K8Ejt18wTZHb9hcEug5bByOTEle2ogaCTQzeLsuu94J2wDdrnmk%2B9d7z0rSRKfyGZou6tQEJ%2BSPn0uurkRWV0OqdNP31mgt%2FCw8wvSxrC4XwvsfBc9ZX%2B0a7gx6mhKtSsJMdJunJJPhSIvDSQXkygcfAF4FnqVxXHFHHlDH7RqfMLhTFIQb%2BrzycKMsIJltV77l28MY1NUg0RJh1RdUgKOo9hxI993HJX6w2KgfpH%2Fqr3Mofapi1hv1ZZVwInRmLFUY%2BrPba7HN9%2BDMjR%2FLXQOZdH1Vo3PiI%2FRbBu0NNCTVN2XT%2BuzLpOJaGX2N%2BZS%2FXsEEZn0JBdj84VsTpv%2BnIXN68e1hkkB9LC4lx7QLWOlknopZuQEnl1loAjThUD0VVBCoHScENZCm1fl3UhsNjHFD9AgGhhpEsECsTvvL%2FqgTyaKoFLFOvoVg5qfgxH1qFMrnOqD9FHgXD3v254B8FMG7Z5Ocm5meZGpH8Ujdgnt8ghBLS98Fgl2%2BQZvwMKzFir8GOqUB9tvGRJbeYto1RXILnh%2FDfDmFLavoOloPER88qWMeylgcy6xzizkYNe%2BdQnl2bDto%2F3%2FQ%2BULUBGPJtiK8mxm0CCnBn5ejtUOqVN8K%2FT%2BUZppe%2BhnA8itqLLzaxPmFw3Di4p08G8yR3Il%2FdjflE54gK22TSLbcav2l00eqW59lQsfhQn5%2BlRPRZZ8QjyN3i3A7H3P7%2FghXLIsi170iQqD7jRX%2B9cFB&X-Amz-Signature=b6f8aac83c94be8d6fc7a09eef67dc9792731af787aa9d3b9a905fa0cdca71e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
