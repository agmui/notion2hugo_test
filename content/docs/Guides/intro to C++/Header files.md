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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPG654J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVMZsCvkZsZ06E3VMpry6HH3VyJbnifNfVDxnM0Z3TvQIhAITHHUy3Eb3gw0dbaAfKGFG0SAN7hb1pAQcmxCGaK96LKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziSVOYGKZXEzE3jrEq3AMVqAqyRDByxR2yzuCR6ehKuzcKrftvEqHLVHgAa4MGMiHeMdzl5BMccJrn4JGpyFCMoQyuGgfOvSYyDuN2B6DFgUL6j%2BRxxjXCjWqrc5Ijj6PU5dkrZ%2BX%2BJUhW3qKJZG%2FCYq4PhMfu844SQMPmCSOFgaB7trVwgTXbn2x0xyIrz98JDXF7ArltlKk6KBWSdcNB0mZaYbQX60ZLuUL8sM0lj8h%2FBWzsXOOJXOnWwl5%2BcGHa7imPdHHnhc5YieAKO1czFKyGAz9uONN2PYGd4vQJRIIYhvmpztfsiNMiTdA49UUHTTxsoosG3bYpZKIjB60rdSi%2Frm0%2BXxmfHHVF7ULMjujgXQ8bURKtN64%2BrcTCBQLeGb%2BRSZDRe8GowaptHZsSRvnv2HbnBjyN1rTCZKKr55lrdR7B8qbmsPVp%2Fdrdw6TLkIOnynXAwQ5%2Fx%2FwePpfKyhydUcr2ITKu0h1I0dISZTqz2n%2B4itm%2FAdcRdckckHhG%2BkvGkcDyJlUK%2FCq43Rg0tVKGHJOIJ%2Bd3PD1lH%2BZ5ulLRaf8gO8HRsosbstYUhi4DICkhv%2BjXFcUd41TdynN%2BwAipWXrLSaQb1SXenP4Qpdjr6DyDVry5jSL9H40tG6sHvuoC8ui%2BfuzfuDCx7rTEBjqkAcfMiGcK07LLjtEh%2FeCpaNRi3U7zbMCPQvLBkp13Vaw%2B%2FazRMc7nArzUldyz1kEjuDhZC6hdndRB08Y8CA2FGdutdMaf7myC13IZtvdojh0C3zg8nbUzvn9Unug4CNn6bxkjXB7HHf2OwWT20MfQJ3sJpcbNYCuTP3GDD8pNpLsoAHgkfQtuXlA4FpJCmaasV6HGdy5l%2BbAIE3QJoiHXXjpMK0OG&X-Amz-Signature=ce1c9be5d34043d7a3f9773b1b2069c14354c3022847d5df0c655d595ae22845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
