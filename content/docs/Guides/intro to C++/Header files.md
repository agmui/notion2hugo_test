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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZN7EZD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBr1pec%2B57qaAFJXLy%2BFiYR6IRmIU800FmidLsRmk6%2FAAiEA11GhpN3RRxK5pMs6x26mbS1vnYpvqVvhr%2F0rUN1%2BrZ0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1lhd3anKQdSN5nQircAzkGA%2FlSNb3PCZKexKDOoodOlGhvrvQFSQosFWHpWzvzSNvNldlJVsF5qvl9rUeKaKy4a%2Ft3g2sHwRF95es1eDdY5imMgihN2ZlgpbJvaHZwxvcY2S4S%2FEMJhhBQj%2Fe84in%2FSYuSKXtVumB%2BP0JuT5ox6xU%2FUClNjEcOCX6%2F9CeGB6fg2srV%2FAGKYeqsxxSt1a9YmcW%2Buc5V30e0PNChTwXqVFKfaqlPdHgwu%2BXBXLC6G84B5XkY%2FXS%2Ft3JiYBQsvDempjaXlEZ4zpRGqdFdfQDKCnvSQgPFn53i8GYodmk1OForHxtRXZ7dFtDuiDuDvTCeXPQywFzX8F3neyNDfJoMRf1a%2BYYViVldnnOAAuQYl9zzf6N7Ef77lfMO8uqwVF2edezSA4taddy0fkgIah2P%2BmOdZk%2BR3S1F%2FaRPaJYfLU0lOXteTbopFfXFHLXGHR6YHbINZycMbM7elgtQiiW5U4vd5qHBdltcZaLkvKZfjI%2BsQzeAATE3WC6qgPySf3TVqGblSJWbaLp8yqeYatW4QtSxLmTTHGeEo7UZuQX0XfR20uzO3T4VL9XyZFK0YJbxIDdfCHk0Y%2FbkSujbMIKUx%2FwF%2BxCEr96dyJhTovb37eVxKRUU5UoYDdmMMOje4L0GOqUBcqIh1g8jn%2FCV66SVdXMySfBgenWDX0Dt0Acrp30x62cwp1BDuC9IOG2tt%2FoHnU%2BzBAeH9bMKDGkROcWQt4YStEb1jVEfeyL4WsYIoEhj8fcXGDFyThg%2FuTwLALLtP8h4xPSYlKUO%2F1eGPcvCwJcK7jIR1JnFgrmhntRidnILlZnBhEYRF3%2F9P95powenVm98OK9fioqxkw275WmJ4mfiUdaMxXN1&X-Amz-Signature=089a5b4fc430b18caca55a03e6aed0fb3ec027722d5a0eddd90c3c0d9d59c917&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
