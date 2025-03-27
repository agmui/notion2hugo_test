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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBVDAZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2BNPigBmDWhMc0ZL0CG4%2BKsA179aZNSIGP%2FkyW%2FpJjAiEAhsS0oEm89RtclAsN8HlXBF62aGEACMDP3%2BVk5XI2fSUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFCrlzfOFvuwQFyp2yrcA3vKIBuwKwMr9mg0VuqZ7sqBCAHUMxFutITL8tiuwOk3NGtbmkyndwjepkZ2gNTZmwUpOMccNqiLeFXhXJMEYdI7kUgSYPRbXJp5uA2Kyegpx8X%2BxVnBCllYc5paa6N2dxrN9Uw8HLl%2FH9ti%2F%2BqfKBO542DgnoriTMiHvg51ZPttZtx1STu8PRDEdEoJE4lNkw9NnFgxQRBhQpBSC%2B381qiiW3IW0EJ5Pv2Ftt0tGRh5WPScT%2BjOd2WZE9Ie1WvA%2BP8oysGyHaCbiRWBABaWovaS3IRE2AHaRvOkhfpVKAf%2B8nl3WzznKkU9RCjjRNMdDXkNhcVKHHkt1LvSg7TAJVLqocZfEoeeqbQXEXgPFJaFheXGGCD7buD9gZRAYxVm9tinMlRjgDrw0gOm1IXUvWaYf4Mtbj2Xi7YTMVqpb9B7nUAO6HEcrc7pG0m8tYV0GrjG%2BUooy7NZHaJe8meQY3f0TvTrlnpRoCt8Po198t47r2ypOuFznzhvM9LQJrdW9sOU3icmF75HQj8OFcJTskCuIWcrVzjl7Np8epH2Nm3NqtYA18Z6L4u6XOtJe7gX704yIk4ormQmz%2BLuW2pfWddRt9YhETBIDD2fVfzSFZY4vtgISbGcAaOMcO3YMMTdlr8GOqUBYES62EK%2FOwuJ1P0fDZ3CTwzZUvbA8dPnLpf4AnpfUaypBkUD82YffoCXNxmOBMvzINl1ZKJ1MQ6XsarIGvr17XTYbSgQMa7wZdYSLuOoAYQPU7N0zXc7QoSwybNGON9j1vUxKFJ3VZsukea71ulYmiVCvyyA0xmEM3zIh1%2Fs8ln7pTkl3JXol0u9Av34WtRhfqZmIZHsDRiHVUb5GFvB7F%2FrV07D&X-Amz-Signature=5abba07daaceee164e0ec6b455873b2079af2ea9d821e064e45a8f7808e69a33&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
