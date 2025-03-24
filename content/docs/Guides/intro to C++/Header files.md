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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKIJZVEC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5%2FR6V60STJxfNzHMbqUmGDQf4D9RrUmio7nbkwdlcwAiBiuR%2FSiUQzCoS649npa4Ufhs2YuOi2Cr8vcSd21fucryqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMP9t%2B5iNxcajaPXzKtwD0zCxPOhp4eICJrnXDCPJV0BvJOJk4OSsOtwBkLlXBkZ8eQdJneL4B5BHdAe4j5uSsw8wB3DLvVLhjQlN3Fzgr5ATjyMY3dU0d3q8yzs6vIycVL79pmu7TD%2BwftFnoj0B7%2Fl23K1iqWxDE9tkTagej9baUDywE%2FeeZazLhdHZrndbVEov8Y8FC9CCeq%2BmaqWT1nz7w0iaYuU%2B46b%2B1uv5fuxESG5iU9H0nF5E%2FOMcDT89kCORU9gr9clqLXrj7Mp12jOdii%2BRpEs7e5TapAwF0kNEzMY1jAoF88rrBFw4pqCsPJiCZEUSmZARrWBg2JzsuJQ10vwSSrmr%2FxNL0M9%2FoOwS7VLeuGXMJfAo2i39WXiQw8wYyV6VM3wgZTonpHvmwzU0CiQ4e%2BfVXinz4waTr8m08Q07N4RxBo%2FeJ0tXqvUR0XqM%2BQ3WA%2Bko2a7nNw3Bx7kymxq6IW%2FYwUCePAN2T6sfkyHcgj4e04wbpRSP%2FJK%2FPUd9UsOUwogXdR%2F2jGwP0NCOS%2B7AbgBRJQXOuFqg7e6LHm7L4Dorq6CHalHGFugFI0gPGtomA6QMpogpoAu04gElpUMoPZKFPxO9Nk5vyw7bH%2BYUv5d5LIVjYw86zqfv7ewFmM5PzwBSa5swoLCCvwY6pgEohLOwr5yHZV4MEpx1lmIBDxuH5fz%2FEZWVd24xFEsLEo2yy4K3dZaJL1Iu23gBFh5YpqL9qB6lPgiNQBJi%2B1CwzJ4YBrjlF4ToVPTK%2FPszyibIKF2ZmZ9atapAgUSDZaaWuvhASQEicvwKnY5b3ZxsruUDbqoUmyJI9WejUrRPr4ehBuiPc1ogxaVZAW33R2EYhM8JnP1JWx8bUhKeUAM58%2FGMflsQ&X-Amz-Signature=4434915cfb630541d51d1d76ec09dfd40e8fba1325195e1173d1c5a4fcf51941&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
