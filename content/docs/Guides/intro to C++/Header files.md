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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGILUOP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBv7OPkypl4rH695LmfcriN%2Bs8vipdvTgMoLBjpCbMlwAiEA5Zquj18YqKswLcXvKcC0adEySP88PrDh8GF9THKeMT0qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFqkvizvzpGU5RBRCrcA4eR5D5QTZTtv0%2B7igI0V%2F8jNsmkQsYFhrf5p8ARBayR48yGx4DOzW8W0faWF4DZTpP9WeKPzPj%2FrFVlKO%2FurF6a0KFcx7OxQhWpE9%2BUftOGOliQ7QFFVc%2BpzRD4bvOiFJWTEwzACQWY8aH9qItgcr6tlH0jIXHC7FcgW8WNCtnowL2rQH5dBzLSRBXVh4NsNou5ih2U9VM%2BPcHopzhL335qLuZ3Mn1%2BwNY5zrTusfoFAPtH6yMyVbs7re3Ij%2FkQtpduqmSyWzQocKWmP%2F5y1kccqFt0E2hEvHTBYVAVahuh6xZXANQa35SouWe4WzVBFk6hkDtMi6ANh0c7EmI0xWiStkJwda2yAHuFlQx%2BuIk%2F5PiVuKwTm0gg4932TSxJB82BkVvrIaBKxQIXxJ4yKszDB46movNKDGNJPNQjCwDdNaYD6yStFRa8OjmQ1RSTsZr4BhrMjXxnbjo5OPe%2BrnEf2rs%2BqM81pcDntF9ebMrADqUFfNn4XC7vpYY7JpjqJSXJmStxkSwd3DeTDIFZcTWZqZzDev7zoEL02npd3CTFygiEBf4uW8fgEQIz8dfQ4LeSIsNK7H8Dyka11dmtyTE%2BrC1KaGrlbVHqX3pPMpn%2FsdVmmPfs3xR8ff6wMKfaksMGOqUBx4o6SDm1FRJm958V5NzvsErOZ1qiv%2Bt8JxEZwMWwQbIdxfgqTA1s5sK%2BLNGp3YrH6IkHOo6WHZJ0B5BYrxbDds8kt1uckKqI1jXp8gcg1%2Ft%2FBstubFH2ddp%2F%2FtIU07j7cDLVTDVxMVjX55uv%2BqtLG7d1MI%2FkwI8HUz04mZDmAgEfLimry1vlW5ZZk2kgRjKYEmHGrIfPk8r7fjeZ7%2FkwnkLeZBlY&X-Amz-Signature=1eff08aea374a421b8650fbddf25c928d3ea566a4520438aba018e7103b9ab73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
