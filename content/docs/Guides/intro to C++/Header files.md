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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHYI256%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD4ovb2qSVE6YHMYngGmnUhQYO8kdgrb4XotCyoyn8IyAIgeGYDAYPwkajNKPtC%2F5gn7262EEGuVlYMGcHNeoQWeDsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHBzegp%2F2gzuutnCMCrcA3Nfvyf8uYJaLo%2FmxaYFNKes1rqE%2BMzepyOOtQcPwrccjNdMNaMrrJdWta2v%2BcX%2BY2LGv%2FyXtw7KEdfYIX4RDCr43IjhRGrd0PULNkcOfo1F7tPDclJoY%2BbjcqnW%2Fbe8s1%2BI%2BEOZTi%2FykZZKL21RsVBDeVjxNZP0kY7rsS9vKfCtbUXUqbnK3HtgySPHAbsB7th9yRcqAm8gsCtenCG6867XLCQOWsKg3Fug%2FgYx5uTWJ9nRgLsaGx9lVNPyp2ACUlyRJ%2FIcs%2FiBE61%2Fr%2FvEjwi09jM%2FPxpTmZDsxQ%2F%2FA0bWy24TxtekSIDBarUBl7aGS0IaewXxYHXCAW0ir8SAPbNOeZj0PUqmyVhybmw2ODL%2FaUb86CepGyCg1dk8Gsa7mLF1YGkiUCRYQEjLyme3Nwr9%2BOtYFORMDmiGegJF0IAIncxSCo4MNV4x%2B4urPgA4hNL4hGRDDTDXGIjhQ2pxLyePZ8KjoPD6uUX%2F9xcAMptf%2Foc8uIdFbMMJPFk2Vu5xmbB0steJ3%2Bawk41pybAB7y0xRealEA%2FY%2F8xYdnOTvwjMQvSAJu40jLJwVLEwhNpWVOTMedZmJX7sznGeRS1GQ7tRYOYc09KtO1EjX54OzTS1jyGqKl8qN2HsZN81MJOFosMGOqUBhnEwxfeU7dmYpn%2BH8TL%2FNz8NrZeU8jQ8UsemTqLbVjTAgWvLnNduojB6Y5QQA1a45%2Fld0n%2BWXmTxh4fqcgtAEESrMQYqwHB9XRibxvpzA9LR2KJ80K%2FiaJawGyn6rQco%2F%2BFcm7bO7D6SUXBmsOTPehhp8NWKgdnNmStt73YTyin4aoYH9MBeK7%2B8wQGt1o2ITu02OXAfE50sNKe2Ao1mtGJmc9bV&X-Amz-Signature=c4d0f9a9473bc4bc981928ce700e5014f7767bddb7fff6e500c640b5c7207aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
