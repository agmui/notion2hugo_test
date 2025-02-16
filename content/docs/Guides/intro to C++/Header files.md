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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUN662QG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCxD2Jriz4OwZeNMaxxBQvWzEFrnvuv5Gv6YFSDkJVM6QIgS%2Bl7MpQLgG2PG%2Bjd9yDKnj0ilAoDuObrnnAh0xDj3jsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNf%2Bptfo%2FarCmUjhFCrcA1yyP5k22mxNWaT4VH4adZbnSu2w09g%2FAzvNXV9C47HwOhLOnrvxFTQZhV1sF5SHfO9I7d9dDzrHa1fPaO8OH%2FvIweTZh95ditcrx%2BlWmX4PwLBwVTS5j8UNixn0lv83On3iiXOJebEmAu%2FcYI5VZkkUAR4bgtogYxCKIIeyX8Aq3Q%2FQDQ3FPdjB%2BGs%2Brwe2wm5TOYvcL6k9mnyHLjkmTEwIHGd%2BvrtrEkdd2bzd223lLb5DrycpNgrikZD2UE23951pJhQMT8PsMeSDbjh3T1U7YBlyaHiHRsOmR%2BQBsr7XJ5m0QBLHWzQ6tbErpJu2KfVzO28FmniyyClYyo6L8HKxM%2BgHf9xRSHJ6zopOSSqiscgr6p99eDoCTaqDsP7rVTWUkHneeTKcD5JmIS3VMzwnxTOAAYjzSuiOszj24Z7JKR7dDJ4bDptdSeTg1qcmnE22HvNWF6ni2gb05cybnHIAx7%2F52TJNEp5vcbDT6Kxkj28NhtcaGTSmU0B5KjglRAYQzBetxCQQzH4ov%2ByKTLqPieuSrrAAZTRkbIWEY8kXDKpPEkRh2XKjpPo%2Bsqe96iyZsfxhQsgE5Iu5v2hDkDDEIVwS8DtGMTiEubnzN%2BcHbUc8UPgb0%2FiNQ7ASMKz%2Bxb0GOqUBV9poUn1EbLpcOwUSnQc%2BY5fQf%2FzrDGsnykY10RNxgZ561b55%2FR1WTNwHp7UDabwft9yHj9iYEoSR%2FDA9TpEEiE17zO0J9C6idhGR9cp714j0LPb0gjDePfutuwOb7sYYmRsF1%2FGCXth6EVyJgcnOr%2B0JsXJlbDIEnVhceG%2FZ5O%2FhSYphVhzSjdaYZUa562JoOViXdTuuMt4bmPcqgCK%2FH3LUEmsW&X-Amz-Signature=6f16bcb59f049f4996c590b9aa230ff0636772d7947dc168b2910a8525b9080c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
