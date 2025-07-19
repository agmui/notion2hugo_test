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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETGFV3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyagiTINUr91i2GGqCjey7AuCo2lUAxtkR%2Fn%2FZxUTpdAiBl1AzOpNUJAfG4RDBfTXhAwhS4L3pI8gLfBkWE1BLo1yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRWQNX9Fjkd0evvdPKtwD3keVQwEPOU0G3Ggp9DGMuZ45zcltT31ZpvRHSV%2BNwhKcRWYM1v82bTjNge2hoadK7t4axPb22s%2BAA7oF5oPFPA9AWBHBPWipghX6zvavdXEpX2wZKln1pc6h5MZoswDt1Cp63mRtz5V2sBTcFb9nJ%2FviyqCqEtsfOXtrDo3CmoPJTngNblBETJl11Ez9IiAnycvNiuKJTcdqfYIZ%2Fmd9XaYWHV2Wus4qNCnSZqJyKeUbPIWkzNjULgnxsUhH17fbDaA6ClRoRnFK2k4bXuQimbIeW2lZxTU1JZh51KPVg%2FHyJUhR%2Fz5PEXrf%2FaW1VHeUTl0CAvPw%2BICynzFUit2fx4Je%2B00x6Xw9C3Cvqvj3VU0UybznDHpxMcs1E9bPnAk8yqYlo7NETHGQoXH%2FDCaRla92gPFjyFs%2BM2EOtNGBahz4sCl7xsqK3iKAl5XpgRxMJE5NxFmnMKHSQgg6SRnGU%2FI43l2meWwxbiSBWjuPAfTmH1IilREVxS8nbBW6WFuVGCxcZ2tqxN0IFNFjeFnZGWU2lgQlhChvqfqHFAc7gMcCK8J3maaC%2FyBUTqg%2BO%2BpVxTn4ViAZaygXsCwQeCcXWd2ZMUZ12y9UKjg9zMVsr1RHe2li3laZw7kABggwgMXswwY6pgF5SbXv%2F6LtfYqw8y%2FaCfzwNxI6CtbbvEL1sVimu9YB69cVsfmBrph%2B6RHa9mNtn%2FPNQ2RE2o%2FTggX1hNUJ9m5r51gbFudjXEwV4yIA3bbR2617u%2FmfEvYi8DpJTAjkBRX7ZlYw5S6%2FbPLDuT276yiLCoNN67FIAT24qlzItf8TBYKFXSAECeUeYPjcqhfHvj5aiIqn0nvNIjrMUSwTf0ix7okY3uIm&X-Amz-Signature=d2485dc900b62fae89fd811c8f60a0796c91dd59a2c8e0115e966268f423c9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
