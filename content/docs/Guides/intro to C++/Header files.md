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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRR2VEM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRVYHtAv5fIMfBYAJR2WzgkPN54EOxT1zsCLKANzS7hwIgMwwkt4LvXqdS7UoypjG367uTgU6PaGMCKIsPWB%2BbSjEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFc0Ua1MfuhLKWCUPyrcA7F43jGqlsqPn7nNjw6vIx6D8OInG1j6eR%2FDfFs%2B%2Fh2ALwBoxZmrJZscgnBFMvGfQR9JQKjkKyQ87wdFgsD6rzMvGlDum%2BMVocyJeOY18BP5%2Fp3xBrxy1PuZYmm7nIyUqX6LHnBEmi9igqdcQ6iVE%2F4duYRlTvoDFt8aH%2FN2POl8GQKP%2FdY2c9V%2BqyPfgr%2B7hTpiNAIFlJRou8Gh5J1xOI9%2BH5pBBvYubXb%2BCdju2j5qFVKmJEwGwTaVyBZ7pR1L8JxujQno0j%2FQYbwHYwJKD40%2BBsyzkxf5PhV%2Bm5PTCPqzKYS83cqVUjdiB2Tj3RkXKayvezc9oS6T2%2BRz7xw6yFKnfaTu2pBVA2%2B1hZrALnGP42HiVr%2BAsLqZ%2BxckL%2Fs%2F3vBdLBDn4hyYxQma5CpqB4TK8J6dBTC%2FJTQ4AnbtIk%2Bl54Lj6F2pmlNQHCrHK14u0eW8yp810tpAMNPNug7x9VL8b0HRAIeM9yN4pQzSflUOJSrvPukBkqWUuHESC5vmnlTppI8m0RCvJY7UKeVtA1mxX0gBUXnwUU1CBF9d0kUIP3Ya1oTN1lcWD7CTOdnxlD1D9PuJZIFdF6iUj80Pc9ukfiehrRCIDQRmzHBeuJJbaaDe%2Fw5Zy81fV5mGMM6Tq70GOqUBX7P%2BOs5vOEawkYkPRrVok7RC70ViZycQi%2FEVjBXPucZQDd8KvqjfDU7jr%2BmnWyZiN5jsMoUmP5euUHnYpyIL3KPhqZ4UHSwsH9P47Qfvj65P%2FAE%2F%2Fr52emkufUXexlr6vaGvW7oNBiiA%2FNjAhH%2FXDHIHi8GjcBCKORo0JvRj4jFBf546xlA5ix26enBHfSxUr89wKerA%2BjME4Id2Jnh3F3cvpI2%2B&X-Amz-Signature=a54e0f31d82109843a30e1ac23fc7e3792d3d346705455f81dd95e085193df94&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
