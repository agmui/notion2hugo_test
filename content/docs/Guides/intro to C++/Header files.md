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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVHSJJT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEtkHw9ai%2FDG9kpSkwxf4y90Jm27B5zS0rgNdRW5gPFSAiEA4ZJfCuiZXl%2BpRTTun0%2BI2LDO7egpb86XZD%2BWCupQDcwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJ09QRnDu1pi3zjwircA86xd946xBkh95Fkty0Hj7Wlf0tQeEMAjgCbN80OHPEshVR3quenuM7KMlcJiQASE%2FvEv%2B2319uzMPLRM%2BvpW14OBz6tVF9beqMjohbiUiezuQn6OGbMHUgovUSyCUINAQL4s2LL4Q0PZTSpnaIebC1us5WH7812YI%2B5AQU3ftgHFiYPqamIXWSGbsM4JPcwvQYITANuKup7kVWeof%2BLbZwMWK2hFYdJMXPPMTeFlP8VUv4%2Fu8beBggf131MZoY9hsQNSYI1GGlFZemlD9NoxLJ9yEw77pk1b%2F4xwLxxM4mOk%2FhSU8ZWINhECDvR32O8s99vQ3W37bjj7L9AIoJ8sOJfbToNMs6kH8HeHuFvFbddSoiCpzVla52o7PRG0P8hB83Zy3mtaypx5d5prJwhEZbWM%2BlJE%2FXI192aqa%2FbzYrd%2FjcAh%2BPSzCyDWY4ljdydEFSZjSqY9oMv2%2BBZ8rlhAzD7Ib%2BH9apoM%2BlGNBEkM9MhGlJcnL%2BE4qMP5O7kG4KHGq3J%2BSofg8AHGUI40Pyz7ERCQe2mUatM0gj%2B6%2BnC%2FDjbQ5MS4kEIHzdYXKgx1pCMsU7H%2BcjfCdUoy6S6ihZwgQQrXu6VWFANlOtU151pt0TTKLZGTTjwD0SwJPaJMJX7uL4GOqUBrS996nWElfLvejaxnONb8CDATgnUoxiPJGBo4YUwloAtjI9Rk5Eu0%2FTT6IX0OMVdJI1UdKcmK1QZemt9cdLjgwA8JKJjoV1sN%2FrIqGnfAqXQ1hrs%2B9ue%2FcahWw0df%2Bf8WFWwu6xCy%2BSXn2KdY%2FGfZa6I09m5JysGNVBbFkS1MbR0sjQ0hqs8n8z%2FRa2OuecqIcV%2FeHuJoPFvm%2BiUYG%2FVCBKvXIwa&X-Amz-Signature=4a2380a00a3dc6233e2684a29df54139a0c13629b8760cf0c123457619200882&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
