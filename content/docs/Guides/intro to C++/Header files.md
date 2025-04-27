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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XIOAIFQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGZsipeAN%2Bm3m0ASCi0FxJzjctwQbTvuqxvzILvMOfSAiEAlgr6jPJhMTagI3S9J1IkLwiWH1l4HKU0efH9pCoFzdwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJaT5EONgLLw4Cv6wircA573suTymxLUVkLxvJRN3qS6s3Y4MSNhtLMtiWmvwU0%2B87m6EVCa8Ttlc22QuVwuqdyeCI2ykHcZM%2BcLERlsSZ9NR3E4jGhCIKcGXqCTlxBbrGD6BnXDWFv8mwpDt7DEtk7QNVFS6j4et8vqW8DEO6nU5sfKeWITs5OIZCs53d5TIYpKFXXYO%2FtMv8lQ%2BWV58h2jQG3nWB3At9WHminaQLpiFDFqUD2RSUB5I2WJrFYb1Ph5d3XnvxbuSUHlDXbeYmgO4ZAqz5EJRnQRVDSXHt7gKYXXZtbO56SBFW9afW3mv4VCPCgEfkAdWammk4Dq%2FlQUcnhwd3eRTXOY5BFpp7PPTrkifWL5Ttq%2Ftfe6y%2B%2FpAlhEXeNe9ANgiB8ZwbIZW1uEiDcmwmIaRCJEmgRdVbe9y3u%2BrMU152hgAeKxP1W41URCJGDj%2FuV2VP%2FMyXbUcmNjUic0qtd%2By6YsvYAfhsLKswMvRg%2FrrSydfu5l1K7gnQlQWj%2Fypyu%2FYa%2Frhldj1noXfpLaumzr7K4%2B9u4gGEM8sfJ8Q7ZBoC6cKxIfLUqIbqF70ktg53E0SAh6D1izr3MRr7amq8lylh03ctuiJ9%2BKRbkJmRpXyxxrvuDMJGW54lWCadbeG1FzmyWXMO%2BKusAGOqUBoqJhsrbj4f5y6QyhWLDBv%2BS5ejbnhASp6Nu0DGy9iVZ9O79j4gs%2BkzW4I3khfMEBXImm93QhQpys9ygU9Gb9fYDrKrMWK3%2FGU1XUVw8FVEnLR8N7QKzQFHPlkP3Ws4HxCenKEyggFnNDB6cQYodMSzNsXyXPR8IBX0uFwB%2Fm2mC9zqISYMWs%2BpOiU5dyz85LaUDEBqFvLUFuD4f9k6QHmyik1cDW&X-Amz-Signature=494c5ae49ac72df8780da32bc006e40b2105f7dd6d76c01916651c0dea93b0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
