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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EALCBXS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIG6D6rhQuCZif5pIu%2BErOUV7EW7GNdypoRozbd9KRxElAiAl740so55k3y%2FzjjTb5RM%2FCPLiFd16Ds%2FAw%2FURibem9iqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeOamjdveXsyKKmPAKtwDfoEnRVYmI3P0eMEEOeV1BAFnQ46PeK5zeKLn8tGgJwgEu9uJhtUqFOD%2FbSBvoR9h5eZjnYs2me31vZN044MyJfDJxD48dW%2FJORuA%2FU2fXyeuFyQ3WyLZ0E3S9Hbwh4V8CaDIWKTtTuMnRcnCJd3l7dS3gI9wwQSxVaQXMJpk0Ai%2BmiMx5nxTTLBODfMAJpSPBq1ypQx37Z0tfrHQ9cqhynDMQEl0qyqUsyERfdLqujQHD%2FMF0gKvjV0l5CQaZQrSDr4dcLJ%2F0ac303faSpZtvmay2MF09wKI0K4Xhqn2Gy%2FBppH8YhKfYl8ZxBakM4vBgV%2FwmvkUquNG9viuMt3gmxdIYkJ6Qq441NzArCpzKUTH%2ByIHMF1ObSy4a1D4PneAJhcw8NbTorU0f9R0BxX3G1pAZweGe0Oh2shgU4WG1%2F6IGslUPIJynF3ryx4aEX97zLX8PnXGUEIXb2JyQVBbr%2BtVvzG0JuTAgyWDF8yj7zHXzil0q%2By7nzMEBxjJhBVMXzTRv5EmV%2FkWuVAXCo8XIiqaHZmMjffTrxF9eEB15CXGrrBJefco9aVDgbXTUlMfv6dbSp%2F09gjMusEEyWaL3OxnrF3RmZvDHZDkLL8Z4g0vQej0VDGV003UdvcwndCivwY6pgF%2BDtuof2jFVjD1qKJhs0r94tXFEnDPkXtR43nT5ZS2%2Fz2ALq0wQ3mGyGNX7MCCxUCUiWN3lAwgup%2B0hVusjfJow%2BXBYGowwWWd7mTerIWZd9h%2F9wQe0GhSw22PdYFxOFE6JuxsTSosww5ALBpWoEE00Mf854qVQbpOg2IwX9J0BwXsUf%2FKxz4wQrp8T%2BRTrKeCzGK6cp%2FqLokUU%2BfYAGmNnrXOln5e&X-Amz-Signature=dd3e0b331ee191af2a64bb2ab25f5bf451e9cec41019e0b40760513c494f2419&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
