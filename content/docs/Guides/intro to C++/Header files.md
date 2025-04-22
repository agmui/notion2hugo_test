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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5OGN3S%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDPEYdTMZoshSozop%2F8DaskUmKFu3O1%2FWdKGjM%2BRn33zQIhAIzaBdRFhEl1ScUf6ldIkRbdLykz2v%2FqZc8X%2FFul4cPMKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNVaVb%2Ftx%2F47IHEE4q3AMdVvAdV%2BBNRBASJEc%2F%2FZfG52Zo%2BElMK6C9hYDrMZ9kg3oY%2BnITnrem4jc%2FyHq0A0aeXL%2FKRfH4ZicXzdcg18FFotZi96gJ7YNNKEsOhcr3nVSN3VwwN582nxMR%2FllcQzjxKJ5t5w0OqvYxgTZ71VX3EdjBo5jdyKc1qTEKXpMUCR2uKGPwgM32%2BAC7AgwvzloZLJJazWSuC2zSVrXW318w%2FDSjWLWzytX2TIOXIBrBKLy1wVpF%2FvHjO1MN0upZkE9KX%2BZL3ltxoyMe%2FG2GshaQkYm71JWkYxzPsajWkrve1QwoZEDsZCRBXbJM2%2FNPfB4e3YZiZEu6qIG7fdQwT5MRCNV2fjt%2FCtPf8Eby%2BbPX1ww4fJXMkPbz%2BJ3U1ebirWPAdohK17DZk0oY49ftIMTtMWzdqGGvPzFqocbnjtsljbM1vw9tPsScxogURO8IM%2FzK%2B1cHO9yP53%2BG5SDjINjVqi8%2FMuabmFPL%2B3eUt99gHO3pgabqp%2BUDQZQ2QbOTpYIT2jfMXHakK%2FHsRUCTMuS%2FcZIQ2JI4VsDoFRx1JEUKVGAPIDnHW2x5T6G0cyhIrZB5SMCR7FuurEG9jISytDq9FGd3rF1N%2BbeA6CcqlQZsPcmMQnBVM8jUDFNyIzCSvqDABjqkAafr85rxupcy%2BSJbkzETEdKYB3FTa89098vvrxI0wtEYXiTnSoVwR86GXuDSMMOIM9L8QcPfX6efjNGISCduDfA5HaJBO9UW1cS95IveKk5dUAg%2BQVhDyqhx%2B4uU%2FHQjGfZP7Woc3JAqIFBt%2FpdkWt%2BA4%2FOIAVv%2BxHlHYkx7u9zsdXrZP3Ldld0F%2F%2BNZE6jSRU9rSjCE1NSE2o7vdfcKlYSPYTgh&X-Amz-Signature=bbf3345f5b58f22cf553341bf830ad8bfdc90a6e55863bc5c12b8dc8c5a1cf6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
