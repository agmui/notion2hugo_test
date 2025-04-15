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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFWXM24%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECu34nIxyh3Q1Qs%2BkbRe3JDiRRN%2BXB8m96zY9BQ4smaAiALRvhTWy%2FaR4xfvz6hw2ToWgu2MrHoPYshIAn6iCqqRyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMZTfxtg%2BEK1u%2BjuIPKtwDPvAy6JJzpISBBUHKr%2BHKwSdIPM%2FkziDz1NciEFCS8z0%2BaBHh5Hx8CgYZNprYugYHmqWIJ3bZesBwkMXZSgdBVlnXb48fkdcuYHF96tZKaG%2F4lVCvt9xU76EMDDKsjTDzpa2rpKFgYeJohNEALq%2Fdyj%2FfaYSx8bpfSPF4rdK7o2wXwx0QCEJjVFZ5s49O1QvKUJfuyD3cjJvxuTO3B1UcopCSbX%2BtveofnAKpzCLhqN12bz%2BHcrbz5qM7wHPBw5EUrR8JNOqbq2ythqVsJRw2ff3pB2YbhjSjgwXPIfLSf7VfUmy0%2Be63ZmSCh96T36YPhxbe5pFcYPaPcbYSWoVxi4Lur1JqjdWEAQmInTwpKSEfXvk%2BlD6JOA7o1igajCmt6Gt0tazMCb%2BmtC8er7qA%2F39ew0wV1ryKsbRjWlQvvxyPAhjC0tqR%2FwapLIUOq%2BCbzqqJ%2B1msm6Bk0xaily2Gfkutk9AKHhaQC2jm2cPIChBEs%2Ftmi7mXYszeC3fQkcC5V0BiFsOoKJvF8Rv7OnLXaF6U89fa6rbuw3GQigUQArYy40vwM0QITqRWvhN68L%2BBf%2FhSff4I6jhGXXFT8Z9RbadxMQ2JhAgpXeB3in7GwK87oE%2FmDGU9mLhbl1Uwhtb6vwY6pgEPv3CwIRbPnELBiv49t46uh4cuKYzC%2FvP7z0FkK%2B3PQxEr4lcneGlqNsp8%2B1RUE2998hwy82PtAP0SgJJ9%2F4ErZQSlTt9B4stNYiGdeFxphidPIg4PtK9Gfs16XUM6dYPzJx49AsCy5dwI%2FeFfrpcG2jTmWuN%2BvtC0sCgibnMafE%2BlH0vPtBOnDE1yv9HEU57DbOiZtobTHbO13G%2BRFwLfaRx1a1l3&X-Amz-Signature=ccd1099f778360d361d575c6b2e7d652600e78ff9cd35ee4fa5c4df431d58c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
