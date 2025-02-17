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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4RNE44M%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEwvjCi1Gs2PrWry%2B7%2Fepf5FkPRpX9mmXtdTq%2FKVIxbJAiEAo2Hr0p4YVW8pqKnwxJCPfnJ%2BaIHgk9sIo8nn4%2Bd3TIEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BrTrD7jKsog6hdVSrcA2ZJV0GRT5AZNVMGrBjhrup41zYKKRx0OMR7f1pZu%2BuqD%2B9vqQVqBFFx%2FGB4LtAkJGox7a7cOGK5UxGMaY62BAfbS7A%2BlJtm%2Bm3hzmhZo3uiEPKpB%2BFMJM0byWaRfSAcM6yeuJAFaB1ayGJ%2FDw0TBvJJsUzvhuccjmvtp%2Fck%2BDnvg2GXQq%2B0WpcDlyR7J9Un%2FDhOZX%2BgaLektMmKy46uTfQsW5o96HJGV1tbGvury2Jnz2aFww3Dw1Uhf6USkxNw2bzs0GYJJnkrKHu9LqVy%2BsQnLLFZ6%2FprmBwZxDkU7%2FJH%2Bl0ARXP8hjl2KqmU6x1MM4K3OI9%2B6Ur4bO%2BTAa9pFMC3HygJ0st6rTNqln99mhluRYXKHe9nWnxLy9It9raj2YwiSMsqZ2GiSDAcBr%2Bqh2hALrxEqJKTrW5Vo%2FjA20AQSS6nNeaBvRJq%2FfhKOeezkWYW5M2%2FT3jibRE4QEoPJKR%2FjkaS94EVUyPv7Py8fWqj%2FnN2Hzg62IJw3QZOZzBiFalr5vy%2FSBCl%2BxmL7DtwobHMrIkSWSVH8wq1IevMPTu048Qt%2BkLUnmOFB4PSSjJyt01G8idYFr%2FGBW0VLe49lU0uDtM9N4qHCpDNkOfNAkR4uBZWQHqk%2BD8SuSiEMMTzzr0GOqUBXCQzoeTlxf90uBOx%2Fhx46kN%2F4plF9Dmry%2FTHtrbQIrIfgMpPOyc3qntC4TVuEMfk2FKpWcGPUvebo53hyiIC0LxcMqOPMuR9UM3oJ4hEzoUltGat7OdcBxG2o%2BC1YCej7EC3Oc6FTe9iHTCJrdzVvdV4Z5cBb8Gqnm8yrC1F8IY0tAxqEFTyQ5oDRjmKjBXx8ZV%2FvNOp1%2FEmMjeKNS9%2Fgs81t6bv&X-Amz-Signature=80bb6296200c5853f9b5f54389bebe024ed24bae3bad5f7fabe07755dd4a993c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
