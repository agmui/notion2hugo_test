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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4M7IPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjj%2FnCOhQbP6N6DdPu2EV85ZuiuCU0j21qF0mb0TJ83gIgKu5z70NJXHTVfNC2k5YV9%2FNfdhcvWF5fYKNGCZw%2FKQAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaRyLvcqK3HdH2KEyrcA3gLnuINjXGb1Sn35ZUuxTnWOmr4GEuEzpS7gxndKfGUwv9cOg9Oy7XC4EgmJX%2BT4mZdXSKt%2BPncaY22b0vl%2BPI4HDlxrhl3kDXmBI5azGzYTY5PhvwolYhx7Vr6HBJ1eaNOXtLx14sERgWuvHeDid3MLq9%2ByMTEtDDYk6XfLA2A%2Bh0ghR6Z1F1bylTn%2B56nhJDI34nLD6zHhAFGif5KbKHr2p2Ok4XBpZ03MMgLR0%2F3R7pY9SKvNHUSjQAaJyKe1nvDBTD9n9AX7UDaGlN%2BOv3do7QDMBL7k2ZTVuJexsn4T%2BjiZ4TNwz7QdS9Qq7E74q3eoILGDHuSbE7Tb%2B6UjSaUrc7YwUQWqatYrRI%2FqW5VljC5MAGl6MvorG3cNWAa2BCvfYdgz%2FmQ3qzVcyygjMV6cTlFbhXRQ0d9ArwXgq7DHODGIjU%2Fm5TJPIt52Yhc7fia3vvGJXK5r0qeNVzsKsyObdZv7NpOVR23sg168W8dXL5oXEwCv0wD%2F0vCWOjUqPIms0P%2BKwm9oOFE9QDLGZ22cIZlYzSSnE41MXha3ulARqhoiM0yDiut6fsjYR8Twa6hMu6yeWATws5f7YsM7zOaXuPvuoohgOrosLMMGPT4ysAa92GSntiAdMRlMP24q78GOqUBA69jRB%2FXMdjqdvrD6EOqpJwz0ksSYlYaXWXV%2B%2FLW4R7YV9IvhlCm%2FMULsTiKzvvz35b6WU5%2BLqoXcYnzzxKRoUabPqQiYWQI61xZwmuvctKvMgLfo5zv52LpzKlkKXyKjzo16YImNtIpIQaC8M7ffBGvHS0VELwzL%2BvryV%2BJ%2B6uzAvkuAN5Qf5o%2B7mcS8PajE0BnsbWKDJblZ4sZZ6QgEiD2TgQU&X-Amz-Signature=d591980bb72c61bc1744287c953e02c1b4827b03cf557bac35ff7c41590f0061&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
