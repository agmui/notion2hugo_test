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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652T2RC4H%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk6KKteNwsnrGzDZmnLgUpAzGs%2F3iCznIi3UpMNRZ5sgIgWPM3PUqq8hBIlq088dloU3BVDa8WDwWiUraT%2B7swUGUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnfZrqV7%2B6KhnosCSrcAwm9ZC%2BHziDyI8TUBNMgvk1Ect1g3T1yqXt4Rnpp17solmq5O3nJL0VcHw4IUIOW5gL8iByZeDACZKpj0mTnd0QlnTpGQZTtc0hzA88W89HKqtr3U8mmQRGFQ%2F1Wj6iXZx1qimP1gOudLSkfYQhEnTcBRPmNEM%2BG2%2Fpkd5bZ8xjkauDLKL41X05qYV4CgL75aDQoC3lmp5wl0Z2AIyYrjyzBZesJ%2BioznU1MR3Upt94IESWK%2BzF%2FwtMwMwn1lr1DSqFhKnbCKH6pp4uqXpviHtbB2dAGNYOrRBPXFvk5z1GrOxt18HZRZkP1ZPPHcoA8AS1GqWf6kOWtMOwR0%2F13w9f0x0uWO%2BCXKB41%2BlFDYz4YOWSxNgNv5Zr5mVlHCGpLIaeN98Csug%2FM3obUbdq5E%2B4njXgqQ%2BRJBa%2FqQryPYt%2FiZBkV6ebjypZFj2f%2BuhnynMV8eVFFYvGhglvW24AY9PO4IGwQ8xbIB4TQY8JPdliXQYmOg8Ch1%2BgUPLyu0p9aRmmb3zwRIwAgs3RTzeRSYG8m0O%2FNPCo1lRN4WoQdPMR4JAfn8v%2BfSVGuGtJ2OqKQ1IRtKahnIB8eqL7kmJCVdTkX0L4rKlzs6yyU0O%2BupYyeh%2BNCIEGqvZb8FgXPMJ%2Four8GOqUBDFg0fwaNTs53iXiSQZt5pRkler4aYJKUdg98HiksAa1Uz5XumQjRJ4BSqndV2gAeRI2McqQA8y3KwQ2zmLn%2B1nl0Ikh3eqI374a82CVxXTitz8Nngffc8RcWk9N8xPi8oxX7TUjKHjW2DelNT2X7HVIV6FVAwN1elHoFv6RBWSV6MmmlShp4xBEoIYV03RlOU6hEZQ0If%2B9dt8mZN%2BK2Bf3%2BXR1S&X-Amz-Signature=33bb283135b56568bed11762f2f8d04b213c01ca81251b3a3c0cebb4feeb0c92&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
