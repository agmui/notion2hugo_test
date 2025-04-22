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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJY5WIEC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIERq5jHpOfoJG1M353Em%2FGcsl4XmEjaPoDPrvTZ9OUB8AiAoSFpJuzFbsfsNuRuWesUFcyTw9aUhs4rEaVEUbkUxFSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2BqRE3Q5FXkEIZD4KtwDaL73BiHGkwGlWKTc91rkp59QRXvdHSf7IzEZnMG0%2BkA4rhjjsJ6vWUDBFnEsi5lEsSOfhh0wVLqwE%2B3JXCwUrbO0ilYKAZxiTyHbw8yixXwNf0kZd6ljX1LTyvBdtHp7PfSWIcc%2BCwXK37k8CBMlWgD36LYqcBGfVm%2F%2BFmQDkr60BhFx%2FIaNYIMtZrwm%2F4%2BNPQBP%2BTAtl00HaU%2BSiM3nrcqSafXXs7oSBnuA7I0XQTYVpWjsCCsHBWV9ld%2Ba9KA8W7PhW5o06HssiFcQcMeaGM2FMltAS4peoLYulothFvE%2Bp%2F2hqBPnwSNlEq0I2MWmu4jzKqhfM0WD6tj8D7lYh873NQ4ogqlQfOjGC47rSiURQRNN1CY0vQmRpSGTbusavlrkAAOxeCCIjEqk%2B7ZjpJaY%2F2Q3FjojD7HdnkPuZ1vDLEnC1MPG5imir0yiqHTiJMYRhG4Zg%2BAjOyZ9eKOV%2Fy3nxlL4qo7kPzdhs%2Fxx9pvoZ8klX4BCwuWa1Z4BQyVJYZ1mCxiR3xwCFiUarqtcTMf7nJ8fv1IBLZ2y1%2FfyyOjiH6muwTVsEeYsDbploGKBkkcaOnP3hzi0upkwcNS6mvTt1q4hUFP0PZT%2FoIeoRM%2BRQdokl3f70vyvHAAwqe%2BfwAY6pgEvDkob6Vi8iP68NuflLKTlkz1cX6VnHdfXne5L0RBNvn805z8oQe%2FucMPRX%2BQHW4eOEyqdoeiO2nmN%2Fvm%2F4UDPx8HY6kaFrKgTu%2Fg05lHnzeO4En52hEjLF%2FB6sHJp%2FaH%2FWjK8qelYuv06m0MDc50aEq4hM9gWv9Xts2ptgxdIw9jxa7kdjeb95kkOHSHDZnpfWOMCKjyp1eifRPZHdWPt3VpUWOTd&X-Amz-Signature=549f3bd18fb15d5d4e5fe4e047aa9af3e78e631f3b44e68f34dbaa3d6dede971&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
