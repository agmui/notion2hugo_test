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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAXYQJH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLuF3pSm6QwoiAEsUSJfmbnnpPaS9LuAnTGD6rT9HPUAiEAzSBv4zIg1B%2BL1GY2ryPpLYxik%2BhFbSi5vAKvZfvFu0sq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNbyaYD7c4emHeqFPCrcA7sYz6F6SipsHbmdk9Ergi0WtTgg%2BgXi8WXFmDPCcGQljk4SKRzFm%2B318Uhj0RuN4SN1OAMY67cGtlKveQrLu%2FpE8imLglQ1v4kXklGMV8VTOT3hp62udzdqmIIDwGLvHeSVWcazdBfn0XL%2BxDHweCxkad1V%2FVVTV3ISyAJJ7ym1NqL2iL4ij%2FT8%2Fv3q4IHXvKMMBNvau0tAYUR%2FYK31MUWjCxq00yr0xTJ2LBbE8j1j39X0xlJbxEYXNTuAENk68Pf7uNPTCF3qNEZRFO78DMxKZfUY45qOl%2BOVG7AIK9rkN7qq0ALclgVEOldVgjJajYNqHUFgUbk%2BzrdynkmGyGDFK13b9Ezszk6nMfyvBQgIva7p7VcxT%2Br65MU5hoNrN%2BICF0xu13RL4hecV6e1Y9FN31UsJ5QDA2vhG4Oq%2Bdkr427v3XbWeLDwZDu2wX%2FiepV6k6Dy%2BJFTbX0QEOnER%2FP%2Bp%2F%2F226ZN%2FMZAgjQIeUyrqgjHe5b%2BWGajfTWYJmt5t6%2B0N7VBcuRjXdZumMITvmTCCTIMHOLgzvTkjAHhnIpUdb44NIix3otNGoszpRFX52qDLDF1AEF%2BMtmBfp8dc3mVRD%2BNTJjJktjVmLRyemiQXrO0hdvrVbeR2%2BlIMMma7cAGOqUBfd4AP3Y5i%2B7vi%2BDKrDz3qlXg99rg3FQcpYuFsJEEoet59pbvTJPYnk97Ux1kH5JCw1XIOmy416IDgOiyve2pwUgEwhGGkN1imhathBir2nPMoGP0BrdIfDr60R1bVNql6VrrAt9BL17gc4156qjUbZOLOKpQZfiTbxbKiw0TRa%2BEFs2agOZeKd7RP3SpQrpvmlq99GHVWGuu6Uo0QEGUShb9NeYL&X-Amz-Signature=52c8b23c58cbf8567fa1b5d5dfd83af18d88b55993ca5d90e572dcaa94b657c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
