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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3DHEAPV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDMQRx4Qmh0GU6ubEHPqwUNxhZHYfS0bgnggaTdj2oSQAIhAMiTQltJYrT2ptha52h2KB1zrbMsCG44xeCMKgV4PfYTKv8DCEwQABoMNjM3NDIzMTgzODA1IgxN5IsmJnPMVpMjJYoq3ANXVrKWEyMuzbWjSKUfqZQ5dS5wdPnLrXx5eqL6Mbu0G8z%2FpBQiu27ZZ%2Fti3zrQn99m0qurjvm1kVBj17o9Y13Tkg7wgG%2B7SAgToZ7KCrFYF2AoaE1nvmZx2t8s%2F8ecgkCbMNINDSGPHFkkbNtOW56YTM%2B7br7OSx739cCyb4hqt%2BU0jviG2A0eO6Zp29XRPOXsRK%2FiEf2wsnRJJSu3CsM%2BHG2D1kXhtnzBbW8%2FSWgTxQ1M1THE%2BeFuBOo5kOY0pMILVKMwxoKKhDVu%2FFkGzFC8tEeLCc%2FeaXGo5NeOcc8GNlbVEczjmAu19moKk8cq2ZUkx3N6QDMM4SJrcJ79cVQIw5KKYzrBzl3nfftPHGf5lYEwTnTrwHboUWp1wN49HozhL1otWTV4UBR775MlBnuYU7ZS8a3EY6Q1mYNql5F5Oeng54CXcx19xZ5V6lP%2FZF%2BHOiEFOR9nttzrTDSNFRhUiINL67T8ujFNYuKZGW%2Fo4zxBAQnOLeUcKpVRvLrT4Ovp6Br8kGGpLCfBr7J41PMIpVeXcebO4mhEBAwOtGepdP7F6gV7fWuumx46XgFjgj8VaWlWzQQUH3Q9Ajj4NKH2zot0f2aEq3EuIWDPfOtnqM%2BpvIiDQXLIvz4iLzDX4KXDBjqkAfYWQVxGt%2F%2B4sweO3VzYVht2bIZOgXgHrpuV8CzvEDnEqfrq%2FKxTA0Mq9zFSRvTTJU26yi9RuX%2BtEPn2kXPDYmI9EwXc33axMQ1IrCDGA39t8huZ9QPtyuwIu51CiJjDWlR2nWImDag6roXWHObtG59BuUSwRILuoSbJc5nQ83sMV0%2BsZQMnfeMJsQU0xlfd5BiOHP8uvIVNTFsvSVnnfrYvLY%2FY&X-Amz-Signature=a3a2fabea31cccf88a76b9ca88deccff9c2058d7023193f4cf68bc97010ec931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
