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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677NFOLMZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBZjFHTbABkP8604cGpBmyD1Ng8ySbmjGJJg%2BhLNvOxDAiEA%2Bke6d9WuRI89cZLWGZ1Ty8q%2BXRyYTghy8gE0zhKNJlsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECek%2FtUjfCRsJOyYyrcA7SI73Fuw9H2zpa2stH%2B1Knz2pWpOhOg05dRMxxtuDGgJxZEe7EQsoK4Lz9W74dtxIXfOjDQS6SDPn9HwLJbqm4h7g0siw8KNooTkfAl5gJukDv3APNOWuWOueCnnJH1SD56LAYDCN1BblV77sifvn3XV6F8Yg7mXkfgtHpPZjDThiDJFYgV%2FLQPjTPLUCwlc1QD5HsGTxQvp3XPI09FBsMGZS8OExp%2F7t%2Fvg9Y%2Bpx3zAIAO%2BncTaDv9mGcoRp8CEtYZ%2FA3WgSj%2FpkuKRMUMdoosHM7dhKAJGWlNtJkvMLTj96V58XOERFSPovwMZLe%2BjPcV7ELjuCkEZr3NM2lVLgREXm192W9AzkebJcGGKyFMTgxwuMsa0h%2BYmakrmquWDvUTAxB1oyMUoSnbjkw1tLR%2FPjyPtbbe7m4dNxH605JPpUBiMLouhJ%2F5TEWIZMNF2oyPRWezjQJhYsNeL%2BBAYmAqv1uIBcI5NEMi0jVrx%2BgXQtnwwECVJPI4Q%2Bcbv%2FFc%2FmyAW1ZOwrfBKJA%2B4JT16VKD%2BIhiJh2%2B3hrDJ%2F30dDCSeM%2B1764ZlFujzs9MGYduQ9uhVflHNjyT3WmvjjrfJcEjMmbwvdmy6y3usklMpZ30TR8oqVVLhZvpx23GMNKx0r0GOqUBoHb7%2FnljPxhj0M6v17j5aGi983zh9ePTkPUNtWTymnUUb7okERgR7bkM80z1EMqOtw9%2FMsTGX3ve7P4B1EdQJXwtIoHloCBcaz3gdMJk7VIqs%2F0u5dATfzxP65ewNfeS%2BnEEiVEpO%2F5rGJmYaj8%2BP1fCyfIRTpPqA%2FnG3XtxmuRHCXykZC2i1cvC6vPTz8%2BYFQio9PS584J%2BzWPBNWv83yrCT23o&X-Amz-Signature=2ace0d18e69be52a5453549da68cf5fece6fcd2347a4b4bbded6bd3377b15035&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
