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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXRLY3H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID41ZRBtI1G%2B9na%2B5ZaWusC5yHptr7I%2FGlnG%2BE%2FWcOZWAiEAnIwt%2BvS08rY7SuSRMNOPVF4otblesCPsMQcscwyg15EqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTHu2j8WqFn91AseCrcA3MFyA1uWo1NVQfsuQDWKcwzLHpLZ7MzKFEhKX4pqhRcjg4Inv3vTZYUOIm4ArOLNg5R7bkXPeC72x8APspgjAR4bTw2WjfoyUctaYZA49IwhpDnpXJW1haAsMZb5F9lJuCImzmUAr2qE74g6%2BQfZaG8ubJzyxOmha6yN8PvBjrzVCx5y5Z1rCgtX0PyAFpj3FznawUTV8BiyMaVebOfGMO4SbKtUF2jsHo9oxA4KOKdRyM89twNiF8K2EhCDoSVTMgFOpsOkaiqPaeGwRdpNRFcWrSJk7XKTteKJ0b%2BzH0RHylm0qZjSyeQL0RnXay%2BKSfmjsjhgt9DFEzQJ12J93nLigOSH%2B0dmwE1vmu3SXQfhGk7qj1cPVbgPSpzAATNaCMzRhyU8ZqamhDCDMm%2FtbATZ9acutRs%2Bg%2BG0eo1034vv9oAlURjaVUQco%2FhVo7MPnt6O4Om9XMx3%2BAlAT5lDpAukG9EKE%2Bk%2F3tIsRZB4tpUU1lOZsUYgfziiLEip5vepULwPpdbV8WVDOsvWUL04zNYdbrcbgQ1NLna8zTqFnHMOb%2BACMZerPqgj8nx9A1tfEctr2hSlZoW8lUDsc0MyvQoi5%2FqcyWs9ms2veBB9qxGRzybfkjPPG4rJ6C3MMy7hMEGOqUBhl0F4oLP0GECwSQ8e2EXFMu8R%2FVPmdzxXCLcmZlkvhM7ujjYfL6KDQ86H26a09CWyQ6HgKmaZjPMyrp51vaQDrGJNks7bBR0Ljv3FwowdQHBAfjj4PiHoGgs2z5FidtDcrOBM4YZzsoic3s8Duit%2BQuQkdRPfvhKKjGZvEcFAz9TfoEje5BTywQAEUtt38815a8N5vMhkQ%2BgdxL%2FkiReFUjw9iZb&X-Amz-Signature=8c217843d48da10ae709ef69d4ab49393ca220a05e23ea0a8ada42894f4ce776&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
