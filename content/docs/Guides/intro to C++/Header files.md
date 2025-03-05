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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBSX2BR4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDgBjVaZn6FNFjaOkoy%2FrZl%2B4DgcKQmWDOSfsgegihPAiBNJJlfv0p79r1n5KTY6x3Tr3Cuv4MIy%2Bd0MiMlJS65ICqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxxzakRV9%2BMqkX3OiKtwDgVcdea3Mn5%2FaIMKElD37dW1Z57xXq96cAx%2B0I3csARd20h8ThkXbNQsLyLIU0BqxJrboMG6KIZ56V9%2F%2B8d0L7qp01Z31%2F3rXbRe4AuVD1c4HlQkWd8ofIN7BNniR5Kmt8p8l%2FZZ5%2FzVqn8a2H8P%2FouoyVom6kTT2Vp3XuqOAo9V%2BiD6kfGjigtOe3vVYJkOfzC0zW%2B9ucg8eokG%2FCkwD7gbcGygRRdCgLe2U2kd%2B3c0tque0cc2yXPO9eoGERc5KAOdxiS7iWZ8X8UoLk%2BMHCsF48L6gsgDcquAKxWvfFhJiyhuOUX96AUAz8lgIO6jBYs%2FWC9BS2saEq%2BqBmlMJ926xO0GvsN86ANk3YDPHZfIN9OP69Ev1wA0gNYFS8uFLAelTZ6FJoiYWsEfKi4FxpatNGa47IGhU%2BpOMPpjOowJfIOQbRonzl0gqv8OmMdhj%2FwT652axuFH%2Fws4Bsgowwerqfw8tHe405iAgxG4S1LmDd%2F8q%2B5P4zgolqdeyQFcmuaQdZfDi3SJ4xaKFc8Z%2Fps47UT6QGkypoNby2fH8Iy%2FSYh8yDFoQRonfb3Ls8XM8sh%2BrEj93c7uJbWFxiiR0R7tEZPXZRGnclY%2F4HdXI1ighHibooCNVEQqQ0BcwsYmfvgY6pgH6o95Dai7Nr13QYuZcjEZnP5CPLES6hn5rL8wqf9TpljKk2IiaC%2BLqLE9scJKHzSyOC2gRNRZTb1D0rQFQuU5msCYcrcc69p2PrJemRfAypn%2BvO2kgaV57fQnl40R%2BpwcovX33mN4rG2B5T9Pm%2BFkleG3NlvK%2F2bolLzJMOrUifXS0%2B8um7eKV45Q6Qj%2B4J%2BdGy4miIOE3zJHHdVZixzTqiBO4O8sO&X-Amz-Signature=50d057cc00745dbf42f2ecc817c423277ee6b43023c69a14d788af4f19359b23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
