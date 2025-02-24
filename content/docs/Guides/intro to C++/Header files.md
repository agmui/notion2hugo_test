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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPPQUU3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAKqkRerSIYfiAkisbqNKaoVdYANRNaYGJ6T%2F8NekJKAiEAslQQ7jvwmVF2aKGnSNkk6z32bR8vyNh1iETT8xAY9iAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNXrcv9zOTsBegShLCrcA5gX8p5oTuG%2F4qkmgwj9oRsQScSRem8fSQsH2BX6QDnXAc4BL53VYgP6QPrkG6o%2B3QwOF3Efb44%2FMWaeqxGBYodIcWEaG1ZT7GaLFGMoKSW%2BcuE9SNIHqB2b6XwiLzkASoAkdNmquS5xtopUiJXnI3Fm%2BsNaoakySj05Vl1QX%2FgGmSP2%2BKDYDIE7PBG4EPco6BM6Ub69GLpIpWxNrQJl7eRoD059pCfgZCFxjrTVv6pba4PYPNBclWB%2FE9%2FYlKNa1MXIZNf34Hgq4I4W8cE7dH8c8Z2%2Fw4%2BdpETe1ggV8Kc%2FS3uashGKKMLvKuwbnSavfFCxbgZzVLpLUzlcCtdLEnUlyjqzlvFGMPjd1hVFb1m5UH2ZqVxlzatG%2FewtWkfpI%2BPhiXFPsWpfmuUjrylTFA41CZcJMoHR1QFGArFZ3JK95L5yUSImu28yr8WBB3hx717iS7g9x%2B7r%2ByqLxj7MPpa8ZPoPYeZxRK3c7%2FaZOFjP9sOOHjwtbHQK7zmgQhW7qu6RAsUwcnPYlpN9ePxgOWByqM0qPVK6MH9z%2FxikO2W%2BYvu8mF07c%2B5gqK5B3so7LNJOmE3lT7N%2FbwPTQW5T2D8nkzK%2F9lsLxONftX0PO9qPi3fuF6OKSyJpt7bZML248b0GOqUB9wiQwlZa63DsaSfLI85IZCFTTdWClU5nkhIE5wE18aXPZ8IWo0NZTPoPdGnBYUBzB1b8VzggJqfQaK8m6tmboXOyKLZw2vBDQJXF6cvjp9Dk5WaBU5ZFIrNPXVP1N%2FqNphBQHlaxctD%2BxVEoJCaKCybRQno6cBkng3zcpn0TUUWFjcdCH2ScUy65f7%2BhKN2YUQ4pZkOFo55zQe4b6bfo2UMldgCx&X-Amz-Signature=75eb24366750a93eeba3ed1ef0df4bdcf4156f88d7994e2bb9fd818e9cbee45d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
