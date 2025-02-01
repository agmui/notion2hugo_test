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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPBOIP7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyaZiqNQST0xmYUr%2FgVjZjgQAw8lgGNsOidWygjm02eAiEA1MqiHf6o9IYmHyYzK1BwgDsHl%2BpvRgyRRI5FQfDFrOkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaj8qoqh%2Bs4khMioSrcA4xWGkqNYrMXtmM%2BD6vLuI799%2FzQAFrSL48ZfdJ6wvPg%2FLkRGvltZWYBP1RiOciO7FUf8RxGQWCV%2Fm2r%2Fd6KavfsPl5Tr7vpHSUSOnN8HgGO4lUYUwSGQyuRiE2fb69EpAJ3t2Sgf7mDAE3y8N6GKeiHj9uPPH7mfZNoDAEgO%2B9v3DiZpAswTuw0ptML9V%2FWdlJdUYGrQh9tVqOEn%2FrJqcbTIuuhWgY1XiRQ%2BA4PJs38YmUwueZ0F6MNxOdTG2hkN4cdNjgm6u6bmcaYN51dVF%2BRVd%2FZSWwVXaBJTj4S6K5nYl%2Fj2GFoUmyLpj0rmpVxH3132gKmOmPyzAXw0Qr3xVG7p3tQO5fvjVD4gGGaMCB36%2BI6L2EL535MXIruEwN5IT7mnC992hPJa2oMapielB4RQQr%2BXWkd8G7H8INrU2cljTkM%2BEIJG%2F%2FhZpJ0p2t00QJ0J1MDCsGTs%2FiQbAM3lkxMBaRXFgtiHkZel89T3zeYdbUUWp08NNFaskyHR94qwU2XU9NStUFNdge3gJwMwHpwrozZWZakYxVVVB5BTunFevc9ALDMgiH1nfKUkjg6PVRFcE%2BWFqstPg5BcP3HBu3sT7YHLjm%2BUH8N1AZPMcTvcLOA7bbzn0Pm%2FbHAMK7u9bwGOqUBgi1LzLRbJQS4SCLOSFVZuJbakG0YCf%2FfnA29xnKFyWg5W9BkSO10eOIAG%2FtYpDcBM59BlG8jOfblIeAhM%2BJC3TeWBXqTUuLPnTgb%2Bzc%2BVzkswe4ptXAHQ4m2yjzuN4ZHR6mR3CTNEBr41MDlZ1YV3wcTh0eUPuthxdASE%2BEVaqXOjHlLp3xbcTVTp%2BngmDi4oZKZuw5R6YS9IxOs6EcFBRwjx%2BDr&X-Amz-Signature=87b6e5d96a2ea1698e2dbf2e2a664762b8e3118e7021810218b8fc705a5c0c46&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
