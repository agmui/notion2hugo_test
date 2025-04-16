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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APQMD4K%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZjOsxIDrW5OWtBjotLF%2FUDPE%2FVZPAibR%2BtY4TaTE%2FVAiAu%2B8FqIKe6H%2BJzv5LjRtBe%2BU6VO26ecPbgdzmGa4OrPir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMD4ukY6%2F9lC89k4H2KtwDnodNNexFCHfxd78ZGNa0qqJSCU3NZzEpZvPcdldgWl%2F4fpdmRsXt0ikr%2FpkAxajSDaO%2F9o%2Fgbva6zTaWebyzGth64mcSZNJmCcWfSiY3vgaNsvrQ5VTkCAhn%2FHVbSgLq1nyDl6ZBFhTbId%2F8SsBaYqqxKYGsGMH1vEnJfuDJh50DEP%2FSDlSs7ABP37MPWe59SMmMELj6JEqzGHQuvWsQrlg9RGVCAvhzdkWblPIx8VQRMQnL5bBJL4%2BKo8iriVNJAay2qPSUDpjU7nn2mkCmXrjOLWoksZGphnkQ1zRTo5W7KwjcqDs0GMDpBGUyvlA%2FDXlUlYaFZrA1%2BuOT9gA1rUV79oR9KcUXFrIwDbJzHuHXmfsph%2Flm865eUc32c6epJkCeuvFMVqCCK19Vdb68IQ3fpMcIgzYvffLgm7Jig8yieLoQ2bQhOn4LaOOqQwuzp3BGBxRRyv1uKkuHq9Ba4nDM0UM9TWUtD3IgTid8ZdecSsCVOycOyYOzQK4OOf35zryD5pwQ4Zi3Af4sJ%2Ba1WQKjMPYE0Ur0QyJsuhTRFN3wWLm5DqvjNp8AflyBwjvNcbWJFvmyygZpeVKGXBZLYZchMSBIFzoOCxoObHQkbN22oIKtTIPuqPexRkQwv6P9vwY6pgGM%2BYUyyPaDmIBIv7aiPpN63qCjsZcyyj0AoeYk2Nx4hyJkOEt2imM52UAe9aTGOyLRqtnco3YKCDJZ2rUqc%2Fuyds5p5pG3JFd8T2IsIKlemXXoy7eh0%2B9WrZZVwMVOlblMr%2FWMHJvsXc5yZc%2FY9%2B5zrI25f6y0PQaFPERfwHQeOOegihia65e62NT%2FgUP%2BNRBCOgc8eBDDuZTPIOFLcF9mFV4zkM%2Bi&X-Amz-Signature=dffcd0229538de71a8d7c93186f761f2cfd774070a3d0123a014b52d3d3911bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
