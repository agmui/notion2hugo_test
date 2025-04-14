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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CP4MO7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyb870vsL1y4mcpMHa8AY9RHROikNpeUa0dmJTzObAdAiEAluR8CYLkncWJGFXEktQJl2SLSqpBySbfLgA4sB0qRe4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDOCDY49b2W6xYppToSrcA%2Fqr2fdenkUpWpWEN5PaQpyF4BJvfOkFyzy0X5X20%2BiiFPCZep5fCT%2B465hC9JzzUDegq3FZBkhdbq9jQ1b0M9BY6UdfS86GL6kqoPbiKiIMdlK41RDgY31fzsvQlxzRED8usokHFlB%2FfNR1tAZABymeFmrEvXFyIM9LdLor%2FsNeMyAPPs7lgGtm%2FjACaTjQcZ080%2Fogmmicej6zrv9zapGVE8hK1yaziYdXhUk%2FO7jQkbtZpGl0WFNckyF5l0moD1m%2FfMUwOc1%2BnxXXrEMQXsV8j96Qh%2F%2F0cgmKMhpymGvCfxlXZzadoNcjWt4OrkhYDqOVyjqVaTomHY9QENd%2F0H2mVlBLbHAlJ3ntye6%2BDBlOUg44O%2BhVAzkeTJdw9NqEzlXWYtAVb9E%2FqA0WHPFiyVa7%2F%2FPAPuwofJd5WiMbCwkvZ8nOP7%2Beaa2rLcSCG8rgf6JCgIDBy%2BL4sR%2FYw0vrfCz61S%2BDxTG2fp8NHBWoJMQXzE6iVHFtXdWyAT27PnIXM5rei5Mpcz376lx8bB9MhJENb1vY4CgdjYaRCi5sXhVoHK0m2jOhwhrmJlBW7uThkxyHL8hCLXdYRLfkdra4iGmymXBOMFHhkI1c95YHfLUYPH0t8a2fgP%2BNvpfUMMOp878GOqUB58a6wmAqMZJxVaCWkR25dluOp5RLLH1eGOC4S8jhyv0k0dCq2n9HuQwAh%2BLld8jG045w1UE65hdAo0qpq1d6noPyHv926SICBpRozWAXmFiZaTE7bJU5Kt2MEzunL15q2BRqQGBXRQsORXnMKhAsBCpNKig25eMKMBvuIy6k2ggeoc8vKe6xK6hsXrEOKDyOZXRYVZFWxx1UFTtFE%2F7pAvm3GKCk&X-Amz-Signature=bdf08628852de23bc2af74de8b7b4c7bcd860daf987aa1d4489ceb94277ad999&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
