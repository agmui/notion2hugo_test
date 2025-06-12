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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDC4CK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDRB7aZoSjEFZXjxkaKmOKqhAISZ4AZtLdBM04rEg1uhAIgHGDoFiXRuaI2xKtogxobT%2FX6%2FKMo5MMXd8kqJ68CcgQqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqHbtq%2BPPhvoGm0fCrcAzaIDfl5Vk5cHe06ePgmDw0xkLeoZaCCewVrk7FjE06aPGDMrgwgEm5h8h%2FRDy%2BcPnKBxI4DdMPLgagHqpkBESYrSevYcznyi4bf9F1edI9rXoWEK9UlGagOQ0W%2Fa5vIepfxQILbvKMJ7%2B9CEfcp9tvtPuS9CywPO%2FMPBd9b%2F%2FZQGrueu68%2BGGEkZTozKekY6H%2FvHrIXGDhB4Jet6jhozB0DizMo4JDg4ECTmxt78r0x1X3RfNmnld8DljEc5GziZbaq0w6s5IIMAu1oJhv2ysxRYQQ2cZC24KyqlvkIsH3%2FTmeG1saZqQ4gpV25DCEH2t0l7mqeSfLb49ELs9kCPr4sc7Il24WP4eAUE9up3jPQn7FpeC78T9clx6LYHEwKb5IvWDhY0CEnzi4e6vGPlS0uceR9%2FV%2FGDpCwDWzUP32aofGWzuFQajL2j0xdeh9LxF%2FLxfHeh4NZiMvuLLW4IdBef2034dFap%2B01dOZo1tH77V3ZuM1NIGf8fxClgh2%2FPItfiB3TynvKJbBxsKdG7PSgjVOq%2BBiAsE%2FWp4kdo%2FwCSB%2Fh8Jat7EM00q7ghYbfbG1VMvACxFJa5EALLpQDDbH5NLYjORjdnudAQgaHNDaIG8soVwSfYYMshzc8MLe4rcIGOqUBZbs91FWnqi15yQ0nUiilO7O7yzumZZJzBzxiskz7Cbojm3gyP0HaIyOIwR0RRBCLdbN9mRX3D3ngU9VKnz0KMkoZP3zz1yjYgQwGsbXY8AqxREtNspY%2FFpp0WiZ92ZX8rZAoosKaMN5Rn75nAb6Ok7PLdSsMnIUQPqKz%2F%2FH8UeVE15ikZ1i4z6OshA81DqPFty9jMq3i8TA60ydJAVje2S0IftgA&X-Amz-Signature=03653fbd09ab4010c44d3afb2b73fed9ad6456ebbbdef3e961e3ed1c56c0dd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
