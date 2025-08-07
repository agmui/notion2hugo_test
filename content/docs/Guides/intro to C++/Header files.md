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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZFQPFC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDjD%2FuAe0qNGzvPNLT9Gv2fhkRnpEemrEMQsahqb3zclAIgL2G%2BbbWS2f9gdtPO3FjOK1jPdwllr0hAGxs7kvH3VCQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ47Isrj7rMg%2FAPP1SrcA7AMjN7XxASwdsSuxeuqIbIkXnkKCADg9WTYDs3kriZN9XfXja2w1zzmNCWS5zE72L5JgtQrUM3HrTVYQXlcc4YKMqBOQLHisZUlLkSrn3zM7IUXqGtHOmwkIZoo46tZ20%2FntOTSJw0tbXBIMdRKOBrz5Ghf6CIrjf6Dg3XadLYGcFnPqrMCguLoO9tg%2FtGoDtkzDhGq9isQyCCpiHhoCN6KS04Bo2aDCIAS4oTI5igI%2FWdEawavpExp2E4fIcWEoJIHtcJDUCcNqWP9aDR5FkgpmkbcLAxhzpNiwS%2BFev6p%2BOmdPv6eD0KuGYOFaEIrz%2FAPB4KYCWr4Bgokiq5GXVHgXNPq%2FP4%2Fl7LFWfGNrhN3kPUDbGErE6%2FX3VqHEJTROcoV9Bbuo0WScaMHETwNmVc7BGWKcbGR8TQfUmP3BBp5qJp04MkbC1kWbvGQLXh6fxMVQUWiRJ04AY9Z3iWc6%2BYF90caeeIg9SQcm4M2bLawC4cEl4bU3RWbCeYbHpnUw14AYfT3pRs2kPFlbVSiUZy%2BLwr4n5jrnliRqfhD4RaammSAyMrCZyMBzA9%2B7Q2TjxZz7RiM7lEjyOsksfoq6jWm5wWwKPOoRSi06DmeOUS9oNURSMv4XkqOl1nyMNOU1MQGOqUBLNHItRxv4O0JoMmd7bdLDRPCbdrQl93I0WKqGs2eOC%2BYqJuFzkDClOEOcubFx9gTA4WuasMKNfQhOnZlyRLjA0TSm9C0Aq5iT6%2Fz80ysMrh8lQ1Ex6C3ZBMEXl9VVD8UjzEhRiBytfQnUaXkkMZsM0oCilOxhbU3k98ZR53adme1aA%2BugCRUDDJgvde5iuTefB%2F9Sa4aFnaaEwbaSB7RnwegvvVE&X-Amz-Signature=f3593a19a79923c8ee1b738f98cd744b487975a25d59a9c7476bd9f6c1123bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
