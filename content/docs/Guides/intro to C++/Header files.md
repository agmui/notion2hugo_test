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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24VZ2PE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw0DaipLbn1GilqNvVNUCrqeqwGfvzaDarKGlgrI4pBgIgDTT7vWvJDSiL%2BvDY5hi9okYPJjhuHwHQ3SPKT7%2FrGpsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPkHXgHAoFMbC5C%2BcCrcA638Q8JV7jEL1VNDtQNFBUw51eW2dWn06X1h2PeRDI8oYU2mBSOauX6qtjLtFUQWeNbyd9cxxStyOsiTmH%2FM8MHQYd4QN3w6Jcuv7Tgt0paFsbP38IS%2FTq%2FjkkJqjCCik9EYdpIzrpSP%2F9SYsuClsQVEvGodFYmSUEVXcsodTSnhNpdemvEs9DhTpL%2BF1uoLtzka98j8jsOAaToy7aMipkqCKvSXNzhbOJbXOn%2Bm%2FOqKl9xxtmSkkdVqSCYJ%2FvfL0f5FH5FUg0ZvO4g2cpLnZtt3DeHUos1wQTRpqfqLauGGyLfG6HP7oakjohad5n%2FUNOROx4kiDDR4GQg4aKQUUeJf%2B8VK%2BJOn0shOjNdwpBF%2FE1khgt1vgXlwplbkiYNjFuZFp%2BXajorVn7dsQOFebcoE0NHGG1wBSXRlXDeX5TUnySi8C3lynBXfjY0jgFzZ0KLE1CWnLZ5Y2qRXHXKd2Xz71UFXRjQlwDjG2XNsMfRju14aqb2bOEMyinPwy%2BwR4jYCmR9rA9kooxXjvK5Um7VnPZa4OviIQFKjnwf4gBc%2BVYMF8jH%2FF6XIVCC6C8a5i26HD5xdXfJ%2FwArBlYwjXEScLX5eAkmjHJafBpbnChfVBdepPsX%2F1e7joz3dMIeGpcEGOqUBoL8DgFXxuUChIm1XjBtGOQbtrj4Jq7gGJj9SAK5aReu3NaP5rKkKb5a07ZN3HxxpggOWr0WGVVb8kNjTtcOVgHvWdLhOZ9qUK4j445nXJNoTBrB3Ldo%2BZ6N7lOLSLIyteCNPGFy4ZfQgVqFKgbgXGYw%2F556zFGqVth6y6K1zNq9E3b0UX3PquKtBp044%2FbaEh6nug6YNcv3ssKSsSuwitEIn9vyw&X-Amz-Signature=1c4ddc5baf131289ef36ee1502e2c5c50dad77cbc7ae0a4c609a03d318c5d94c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
