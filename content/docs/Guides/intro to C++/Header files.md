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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJOCDAJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDt3eZ4ZlecPH7RjilIPRGf%2F0BOIJxhz730jDlZd468AiBdoIeNAkBiIGkhIT9n604cfLRpB4YFK8hWqP%2FVeAGHkiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLv7jOCvD%2Bjj8KxDKtwDxv4SJRzmvsPvDhSThmK0XP7EjUZfNShAkxBJB3r0gJackaD%2Br1JjcTAoitOXTvLW5AWhmkiY%2FJsPIGBQ3YI46etiulwTtEVaeFK5PWWRGZ3ON1SfzdMTrfNB6AxCDbR4EE0dN5m8FMGFHeKh7odib6G3V9vPxpvXTOBPNeFOOfgWcVU4OicfMQ%2BPTs1g2OnwNElzcSj6zo%2FbChVTBk%2BQtc1rOWTjMtfbzCw2wmDTqpDHMdbvyRq%2Bp6J0YiM7bQxWu1oJPaa1KT25%2F9Eywwao0wS0zuNHwEvIK9MCrKlOd2hiDJ6V%2BUYv50PKhLQ7wxdkqKNaxzVBlJee%2Bh1IwuCOvvBT2ZYnPGjJlCwFAUfIfuQBrJRRaU26Sc60QWv0NJtgCOmW%2Fc0h%2BjWet4FBx9MF2y6hqGiscN%2BJMB%2FKfHC8x3wxyy3Rtqd44yGxWqc2hVJf6po%2FlW%2BubHsxBPEjAaPhHbyE4YbWnb6Vd0lt4U5Ci6Z4biFWXholrVG8xda0rbRlhnxOaeTI7oAOOjxJzbMVNl0i51aARrobo2rPpy%2FjXKv%2BTPWTfDtU7URTZZhlHZhWbRt1jDdZzFPCI8bjrOJ7nFIXqkP3D8nNt6o339QwVT9MwO%2BoEmD8ASUI64QwkI3TvgY6pgEeoPuNqoWFiB43TpLij%2FbGqs%2Bcrash38%2Bx8EPGSEDBI08xha8szsD%2BPc0zSjMlrjxjCe2dECwrxT%2FnIHxJc1U3HgiccPzovOWMdUUbCF0DtB7brF6LE0%2FySeWj3X15K4lk5axJAwiBYehn2n1MLjtD0pIks2YiTDxAvDCaxx0YZ4w%2B72D%2FKtmncVBtlafD3n8TG6dUDKkSL1HVZwI2wBmEf8tSupo9&X-Amz-Signature=31e86afa0d27f4dae199c9cea5a004afdb390f05841a3e56e9addaf8315b2242&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
