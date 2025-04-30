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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7C2Z3Q%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCnLx07u%2FNqnJlCQl6Nk1Sz%2FsqfXbUT%2B4eRSTEgWoWeYAIgfNmWZCCZnBkS6iIRAYTzAA0q60PcKOhFYyugOrmkUQAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPffwp09SsAKMTNmircA2d2EdzJ%2F7YTzY9pm9zyu1zgOOtHpvSSxpxvz87qZf1ttCFR%2Bged5muxsImJj1TmGM7TxPMc4kzAZfNy4qO06lEZkhbeaesQv31VlOjQBeRQICUg7THfdV8tT9APgq27j9n3xEYQH57ZG%2BySrNrhqS5NJbPHTlke%2FFWhEmVLmn9lRS5sX77zqHBf3Z6wnnhgQ64Ladb%2FU9Jd5PRBS13pbuz3wG548BUG4e8pIHJzl6QGEw8AqOButRGtdqi0FvRY2vAbfh3cKCzFKRNnoMdMa7re0ZuG6rP%2B4c9G27R%2BTLX2CIxaU6cnveYjV1dWbDAsm0oA2wnyuM50f7vKNlsMaKTDd4QvP7xDMZTvsW3oHKcTGMASfO0gzRxPYC%2BnWg1WYtD1tDD333J%2Fjw1%2Bl6Yh5DncH07QSQ0lzY3jdeCUcGyIMvZmOZ0khV18IZi5lOshjo8XMkqr%2Be7rtrNlmeUZaG18GdmJnCCenm2cEOQx3pdUu0CW9qd1X0lhsLflKG0fGeFOgdiREZQHvn9cxNlDcw5RuxDetzRbzHat4pW1noz42MUYUJcg2%2F3hdwrolpr8r2oHbhft8pw8Yco%2FrQhiD%2BHng6pHpStJlWgjFtOQeNL2nwvte3%2BcdEicFUQnMOHEyMAGOqUBlCi06lHPsRcuFyCUBoolU6T0OHyIFzmJ%2B9tFS6qkLRdzNcmhYO942qWLaxgu%2BNOVm7TM%2FVGjMR1hQfskAUPLAHCiU9RDMr08OP24BscyI7pMll3Xanv9Ms733%2Fb3FLvov9eGDRFRg7z2zwO4m%2FllkTI4blQupa7V1%2FHLhPavhPESmG%2BDmnavlnDpvTVeq39WZOLl0addJgN2JzDswmFaWPLkHCTC&X-Amz-Signature=0fcabbf0222e5739b19928be630ed8c458786f02664eeda0f4ac854b38fc481a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
