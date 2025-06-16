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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNJ6MSOO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBBM1NgFvOZ6fXyVmFaWrSjGFXUBL3XgtywRgM0erL8dAiA1rCuvqyBR4St8%2BWThAgwqcYYdHC4anyOU9Yw8xj5XxSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMrguUmy%2BaP9Aof2GkKtwD91k5ku06gQ3vod2u1HsFgYQAPT7ayeg6xMqRuoL6vFp07Ozccz48StRUs7wf8Ih9h70%2BBrQ%2FdZDvuVmvkZOdJZE8U9w2gJcADIDdCpRfARnwNH9KflczjHHUJuZI7goBxKQeXx0exh%2FkNI1OdH%2BQeKR3zVOAmBGW5M2YezWMo6tIFBAvn0SKAngC9ui1FJoXN%2FfiywYa3pEL5fM5Awsy0VB8X9yjggDrDiS%2Fh3LcUaLxn9HIV3cL%2F77LtdrqHR1lx2CfKy%2FZO%2Br56ZOV5GtuB5IleIEzahetSaUxAs%2BmV6TmfMpVJhf1ndF8jyMdSs4J3XLi0bKBjDFNx6l3ZYcb4mcWKw9lPozw7W2KF2aArER48RS2Z5%2FOL0lDVr10PjdfTHvZHPqtRBFMU%2FPhV%2B6NtPb4eq1X3NX2Wc4Rl%2F4oGiEy0TnbLB%2Bj0F1FTrtJOxSI%2F0tueF2F0rSeunb46KwHw3RdRZZRkmUZz8rZvv%2BwoUJLlh2TLreLwQvBJRpnC9G1xYWps2nV7XSy56RaNFsQcf8RJNAtui6abzEoWPSwOG3ELmofhYBPSTULqV6jNnE9lFCAA5Se%2BJUT8RFXkMNRPKne591mEe6HvfW5cQjVmHb33n604ATDhOeIDW0wr6%2B9wgY6pgFkTy2gw2FJXg%2BW5Mlx19V%2FVOBxdWaACVA5bhyR2%2Bep4itnrdFwL9g06KEGYVWG2XohddVLkhKKeNG2ZOfNPyKvDWCbqqxX0w5tNBijN06XS1vwh9gCKlSqpL8YrxK9q%2FGGAj0sxwdsOOBU%2BPqFoKZ7l1%2FmwewEr3l%2FIsX%2BtShVeT1haoMZWSQi%2BD7D7ucl70GS3JKw%2BXNTaZZAAvVZGWgz%2Fw1DYwyg&X-Amz-Signature=516f26f954b3b5943c8694da7d66cdbe28f0a43272f3192070227d0ec5ac7641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
