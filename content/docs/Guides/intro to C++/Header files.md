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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APZDXSL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCFU4i14uZ4paEqX%2BMU3Cjl%2FVLWdFGKtlYnp5wzsav26AIgOemPjYvtGIWXWGzUvjViK%2Bxz99NftpH6jgKkT3qnG5sqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk7idnseAdVXP8KayrcA1cIBAQJwsdmuSk%2BAFNx%2BV9%2FH7q1BQ5UOqqdbeNjDqCwEV9t020145jpb2JivBsHf1tJa4zRtxdQWYf7ROUq02877ptbz1a92awVi8uLh7s1BeNPQvBFiHv8BQtbQ6By%2FrYxTtsjOKzFZJu0PLkuPNapugxlN1q%2Fk8NS3OvDPQHSUg7hINKyseuG%2Fl0JAduCCefT1GSdfBBOqiaYFuIU18rsLSTCc1P4SUWFWkoHzrMpAT%2FQ8N8yTVEcJisUnO73sAB32Ril59bY%2FvM9JQ%2BH%2FF31m%2Bs0sNnM1m%2BMVVS%2FUB2F4NQbUXQPp915REmv0XCs%2BylSKWwwj6bbZ181%2FHKpwlIRkLz9%2B9u7G8zIFed966kq2g64hzxD7rp4N0zTpZyRmavLMQAfwieT1cPYyywB9yls5l66IF8URTWMUoz%2B3jySJFWMwNfMORCFx9UuAszHWSeoUQk7fRTnqO4pbRFMl9Lvdm3a8DVnATbHQUfxFhewiY%2BYxHR%2Bp4xMeMRbNBJrrLBrVwDzJLQ%2BZhjgdgCSumNiOtaEl7TwXEXwIx0l%2B97DO47rhznqcTOIAFhZ6pGoB%2BMSmNilrY9ntS5%2By9%2FwXTkCaP6%2Ftti94VIkSGyuH%2FwbtgClBqPL106GDmtlML%2Fs%2FsAGOqUBdQ8paluTCvasuvCe9Bdb5zSicm1QsNnIzTdWM3tn4Dq5bunFVvYiA6SlRFJEi4%2BkzEViN0Ggcy6Setx0ZdhMIGmXqoiNho2Uhda4ioDq0AKcQ%2F1BLjfxIFmJVAve2ZzFRSw%2FQ8VnAnQT1wwsHPcgesarqxqX0V2Sc3QGvNaNs7IvYvX136QxoOB7%2FT%2BMIKeKNZCweKQFAg328xfjcGWQQTG7jOxA&X-Amz-Signature=e9e861aaccb36cd37f2067094220858ff9a003c49330561703ae2ddb94a1ac29&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
