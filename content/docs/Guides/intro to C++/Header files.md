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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB4ONEF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCLQx52WX%2FbF659GFdSs9lpxroEq0UL8%2BjuzXLSR0GlYwIhAJMBPJ9kc3zlQEw7XZP2ukL6VZ3jEM7299WxWnS9QEc3KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJx3Oi31efcChKRswq3AMTH8O4nNQ2Zg2Hirf9YnMomFWcblcN8cwNk6%2B1IdHetmBkEfdX99rWYA7ssRJq1pboCceVYBWvMO5dbyYwCdTBEnC4CJyBLiFODWP%2Bfo5fuXXmaFn%2FCBqstZn81bG31WY1huGFPLPXZLQ5x9xk8viii4W5Tz7KquJaDAUOAghNyM7xBwROKcXBXOB0Mb7Aa35dcpGc5hNgqKPBGWOq1yuzDV4Hu7g87aI%2F6li6Xoa%2BdOOhXtWvqOacfuU5zaVTPjr3HRw6riOqdJNuA8mzhajVXI%2BcvF0dWUpn0Q1kQMWeTf1aXnv%2FFhH892gG4URThCgWyN9JV%2BfMPf7p%2B3ttOm9h8rYTZToBoK3JLb55F8Wmo6dwUfzfdmdqFVLMGHE0KzGVMHANvKZFyO88LVyOhc5Wq3n6WPinlNGT5ws55Uo7j%2BqnZ%2BwKnyekeMrzU9GVqtgxuxeKx64YZDs%2BLvO%2Blmm6Dq3V3%2B69vmUbyyntTZHGHwMOu0mpw0w5CHThjhbfl0edH6hK7ROC5UzBfECoXHD0W6ouFEGYLD1TOo5pL9uFWfB9XJmDeDjCKnLYIBZA4oncpZTUjRPnCy9IufK7YJzxRlYUd470dun8miCX5VoL0iFG1FqFJGZ6H5qGBjCz9cnABjqkAZDIdviIC3EPap1PJS3u%2FuvQnzaIwjFqMau5udZ%2FQX4SvNDF%2FwTgBKRJSi2J4IQLTYw7cA3a9BicjeL7c4IFuEBjnJnfDDaP7il8jc%2BDgBOeAlewq6r8%2BJgTUibygII9E3hdzPWfCFSwAFmNiE9o%2F9Pes5vqg9T9iPH8BIL1nmTaSsHhUQ1j%2FE9e2A53DLqUFW86z6NDf6tBIhHabqzvb4OypOZl&X-Amz-Signature=be1571ac18505b06ef34b68d4754471767f2c14548551d96be312ba696be6d90&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
