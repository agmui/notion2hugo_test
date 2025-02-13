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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672OQKR5B%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUjzz8COqQ86gYQjQVZC6QHgu4Rnp4ZCtkJ1nLFB2xYQIgdV80Obk5SFQ%2FsHWEUl7wTeLNak%2F9haO5lLfUnYGJWqwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkhu18kxYhkjcB15yrcA5Iicnzpuqg2fr4Vy3BwplDI9Y5h4Pt4YLZxV%2BZwJgx%2BoZT%2F9k17hYDDnSmXqRv7RwUDYAtnic7VwtP%2FK1Cjo2QoQ5lud1QJ%2BL2kX3397tHmoIZycE3jClWY7KOqsGrAZAWaO%2FCfnL7WK5DXorXBEFA4XCPZ9YIJ4YM%2B9FwBkjJJS%2Fl02lyCjwnNECevkz965B8gqDl391GJ%2BKhbicGv1SWhfhhhfEmF0I7%2F2SP9nhQhkmQkmRaL4dw3UNM9P0xKuuWLZ2OqBGOR9I0serBYamAhWX%2Bq6kYGgnpa6SaLF6fmCy%2BugxNEJCIXzADShVKWltuMGqPysMHBQ0dKfFYhyD%2B8xHhhglB0eODISz2%2BYVhf40AxgxahzEbHHTwk0x2kDPdSlVm8%2FQGJ03vEcGE7%2BmlIyLpP0jhZgMMPhgwPA63PfHnU5DS41Q1Re4wfEu9xbkd5GxfG93X0NxSALzx%2F5IrVZpl4G68DmaXoq3xoKJmks7PcGs3SkQhEyWPXeK3aXv9cUnuEggkiU653sxHBXPjhKrsxMZtLjs7h1uW5U%2F%2Fa60Sl2Q90FoZVy7Y1ql%2FW3UnkMGkFYDXmmUenDPYYfAyLrB6bZ0sprnq0o9zmDXjWjZrOTlG%2FcREkjDPTMPWYtb0GOqUBaP%2B0M50ckvdhbZhEeNuBkX499Qs4FtznjElm6W5aNOxUrJ8EwVgSMem4AmSSGpYJsC0r8o8yS8IiaT3MkSXRSn%2FkVRdukypHlAqyf9A4bgPrxlvAPL3zNIhwj%2BBM%2BKLxA6zNJJpxQQtyRa3NeWbgRf4lHj2WSDvrCIkzSY291gAjcwOij2X7MxyD0an4MbkxEZS0Imq5I2jCXS11xUOH72V6X43%2B&X-Amz-Signature=b1f15be10ffad48348a403096e087fcc76f217c5a5eb7bf5ac985e802f48f28f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
