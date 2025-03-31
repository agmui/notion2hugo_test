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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3DPHD4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDb%2FwtAO1tNvtOGeER5kNUeMGl0X32JAW1nepBJgDp3RAIgTiCdxe9IYu%2BSSjUKeKu98%2B9RdtV0EaL4w%2FX0nwGXWb8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcNzDeW3DmxnzySISrcA4tmFfkvzvrShMlD7GEjEcYW%2BONN2SV7i67kLx22I59S2qwQabEi8BZisnZWTqFK%2BChzAgmAV1TucRgCY2r3bczYMOnX5Ju%2Ff6FTzIl9dZG8Nn23%2BQs2pJIMW%2BrFw242U7KdUf5Hfg5xTLuGIB169iSGRxy8G5KXuhBfsIXUDBkgoO6iFEsOGA%2B0AJE65DS9ZY7J1y8amIoQnm0Bt1OjceU0MzVzI1Ne53OuMb%2BeHe3PIkjujuq5NV4kKWT1W%2BUFEEgf90NpUtd6Td9XvBxQIxW6gTTB1Z0UbEF5jkwGyN1JCeEJhCWLYRJbzoBLb2qUsCmIW5B4m3Ztpaae3KwQYNfjrkLwSRvPAYOVgSU8zt%2F1hhdjjyGqVJ%2BpR3lMO%2Fr3OOllFKu6f%2BT4QBHuFoarlnJf9RHOqSMeLLO95d1ODXR%2Fyva5AsR7Ju9Nz8LvvOLv7e6fftWM3Xo68HJs7azIWYV6%2FgcUMG%2BkLSRIgsPksab2BYviZahUebTZoGSvYWgbYx7D08ptHhJ6HsvMW2r2Pz4i5yQeK5R4GWlW2PmcvSsHZDNr1o%2BREsY1%2BchPokXHSNDI%2Fs9158kMe89eyqPKKNeZ9mUQLs9FUTYY1vfHhhUNN9z8KTRKvDpo2vtYMMW7p78GOqUB6k6i8Ut79PiXoNzPA5X2GPvviuCsQT%2BXeoUjiaRmYWlORAN0wJtMTk9g%2FBx3GTzqbbAsp6uV8v3otoP41zg5%2FhzBM%2FSRLExhpgQ7TuUB7pBLtD5KtkSH%2FQ1E2A%2B2cTK387czSoSjENv6EmPu9aPD8LW0fKPev9DX82grh3ZrvDTPtRtdpNRYArwCaa1m8794fnYL9o41iopTF6izSbaDTjef%2B0XP&X-Amz-Signature=2778c8ccfe769f0c0ecc93657f576a9684f122e074aeca12bba6fc44555f5b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
