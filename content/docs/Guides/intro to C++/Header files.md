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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OJSF4EV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuRQT20YEjTpDUCx4V%2Bx1RlSqgT12sYaT4fZjHE1QEOwIhANVqqX%2BeH3pgXinauGPCtaMYX6kYOr3G2pLHnV%2BPhHv0KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9gsd7PAUvGjcC%2FAq3AMtx29XuMkUSNg24tL8i7067l03%2BjGNOdkrOCYp8rbW3Ar%2FlLNV9d7P8VEMYDhx7YtCi5eWdQeMr%2FuCYhUPbiCX7f9wyMX76OR0RkIl6KIjxpp45G%2FAuW8IuujC6JiuoWKF1b2pveu0a%2FckueE1PkDuFbfK00EUkk63nceXmFsnycbQzY2ZHajuUZRAfyldEZGvjIwMwY7dDmpAqJ6XOJtD2TWk0cL1J%2FiWXiNJDeKVNz6EMNGGy%2BEJIG3gtnaSx9q56g2kZZhkJGPLehz6tEaaBp32RmHYB%2FCQHYaXLmOXB%2Bz0P4vwiPVocdfX4ebLIg%2BJj%2BXmvAcIIoc3qjBluuz3kb512I8mk1NuvjMJOe0hMP8jZJ1HdGHyBRlGVd0J9PSLa5DuMP6uD%2FXL7R45CaEiMll6pqPiYhAJPecK%2B1btKOoncFrBYwC22LpcpBvZEdIUALdkChO3YCtrFXueLD8ghXFgxVVE3BgziUPpmOPrrMwkpYYQZkUcCwaHcvTQAyDHk0r3wIqF4Aqa1ClGeYmr%2FcRtKXs%2FWFBZ1hmh9IYb0mesCi3SDts5nTY397IzihgSWA8QDTQ2HoV44mqWtAqM7fliQOJ4OxWD5vpEpT7d3cEhlSSi6i9L2o9nvjDjzdPCBjqkAdiaP9V7zDfMhPxP9%2FU8G3aeq6LslmuMNVzyqf%2BgmODfi29CGCEzjDlEEhS6G6TTN4V2xfD7bKJRoMNmtoFf%2FxSQpgJbYM8rlEHMZ9jXeyvDdTDBz3PdesffzYl1LSIBnLtG1JdM73OHoruEsGqnCqdod5%2FG5mAhbY%2FW5fFIVRazGUxD32qufLqi4eqzy7R%2F9OY%2F5P76s6IA7Fq72avk64rUHXgz&X-Amz-Signature=31996832f68bccb58c73e8066961a3278aeafdcf2ff511ca6456b34dbcbec02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
