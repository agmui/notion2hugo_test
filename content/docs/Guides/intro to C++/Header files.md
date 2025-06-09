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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU6OV5Y5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3683SQx5pAIbyA7AH3F%2BtOqEYEi2EAs4Vwl6zBReGpQIhAJNleo2oBabxOagn2%2FVeg8pb15RKoERomfbp1GP0cgJ0KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOv5fVB65a0wkYK3kq3AO24PA3%2FxWaIuTqWD8PIy2AcCjfa52IfVB7DV48W%2B8mc2QpmNP5ocNihmVUKmOLSsGo9cWkd0F5Hp8Z%2BQRhQqDl3N6R%2FqP0XDZTCBgt1Tko6zU%2F3M5VuVtIZMbzT0AJG7rs7YkZVoW3hC0T%2BsjYzhhtnO7wycSIX7Cma2%2FN3Tg43aRgHhcTaehe%2B3aSLe30MgK1%2FdKMQhQWpHgh3YXngOExYiQDs6iqjrsikpty%2BrnQvDn5Sej1N1l1v1tDR2D71ucxDSBZCu2HFRRRXXmCBCMSe3p%2FMb8Dm7Lz88FEZSVCO%2Bwd71mjbm%2BlS%2BKZTDpxW37gAgKx6Toeu495yCT2Uh2yFXs8Bwn8nm2B5AUgqHjne3oY7EYjhwBGGKBnZ7Hd4151i5nt4tHpmayzDI9j9RHKg7HNUuXgEPC73wouN%2BMDJKyL390A8LrsUf6FCmGp9C2ClYETGwsWvE%2FLL1zUTRia9tMngJenHZ2brFEeQtZMLBJ69nJlCHSvaFUySJNxh1PrfqXg6qdYAk7B6tUd4n7vBDdee32%2B%2BVgCKfLYeAgeiruVZh%2BfLnmjj0O0TRPJsASwRiAILsgXS4xvcHL8uaqXfY7NOaUDODxhS%2B745HeLJgElflNxrJt6%2FHtbYDDinZvCBjqkARk86cZn1feo88lQQ3B4OZHrbnCoOfGkvEDkiyW6x3pDBG4TKnHEqEp%2FxIkyCEwM5myxlvnWFuVvCjgtMfrrR9y9I%2Fjzg2NfXJv4DkgMluzNwKYmEcfwYiOtIzE%2FN5dl00JSiWhShdgrh3msX2avxHisjBKeXyDGU%2FTCUXp4DMgSyCegL3dfNyhCo7xkkEPP1jgAYgkoPbVfaTDs%2F%2BC%2BFONi6asJ&X-Amz-Signature=01374ae3fa7562b7510e5aa18de4288b1fe825a38bf30649818598e03fcf0052&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
