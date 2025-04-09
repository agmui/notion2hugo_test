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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWARI4E%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCIHDbZVgNNm%2BXTecTqAOLCTArUE90sdZ8w9p1UB%2FU5bgIhAO2cszEEsYDSTJc9Izn0WhnSX22e3e8vLtXak81GOZrVKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIBxURVmqLw6zYdOoq3AMHiqA%2Bv7Rdk5Gw6mX4S0ca60pWEHM0PSnAgZQiEM11AdXKqIC8hTGYpjm9VWUL1ELV%2FiWD0iCz%2B20vCwErBLtuEy%2FjnYpPp9FtxyZB4IbvGo%2Ftj%2Bd9dw8GKdBm42DbBeEKK1LUs4TcBs%2BYPm4d0WxKO9%2F0MOetupdpyCgpouqGWeCqh7h%2Beg4FupyYOx4Lh9w022rip%2B2VSPzYpAHxQjTvbNSv7iQYDsHZuP%2FqHfNfBX548QhFlZC9eM6bcoI2VxwmYzAmbPL5uEWimO%2FbBsEQ9zYOzXoK0rdgRtFsTaY646j8Xc6%2FsVY%2FBSQJ50%2BhP1ByV3HblXKC2%2BVZGnFuyDizZRW0ql%2FF7KmMM6Cq7DXGVKn3qgQAilPLYIl5Ai1PcjOn89FQS5%2BuyDhE1xWEwQOyB9ImcZYVfnbuEH4N1JAvZPPqgAjzLQw97GOn2%2FNQpfheS2Nf%2FLhVikzBMVC1Y7Jm54kIvrBjNeq7eqJ32ILA95vJApJAn%2BcXl29VtaTafAhC3YYyB1Zol277lr3A60011Qhqj502soX2J3jFW%2BOoMU4QRvbCmYIIm%2Fcxa8RBlXfE99YD4XkkC6TYkC6%2FPdbpg6IEoLqQgaN8SJdTCpv1D8zZn9lRA3IjXfVM6DD0v9e%2FBjqkAcNJzNcb8cYKTZRlEvY7jzt2J%2Bi7ZMTw9Lclk43SwuacqzEALfeAGAC%2BOijIs7%2FVbwz0sDej2iEyailDT4BEmb19okoQ192NjBIPIhLKZ%2BFYu%2FZtPT0wK8dux915RuFXrJ7brQqfQwThWNDEzC6oEPKSoRw3p3qSXoilKbE%2Bcys3GJUXaKJBfnlGbpsBfiUGSvPE9BO5siGz45Zf3q3C8UUJVciZ&X-Amz-Signature=c66392fefce3b135ff0044c0103398c1acd31ba3d5cc54f560f2dd423c1b0bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
