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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45FSQRE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEDbPjEkhimdFaCnF5j2qnNYMWgbZ34SBcF0lT%2F%2FbZwIhAOf73NlHTT6CbtShPNbOPZ66X6ay%2FjRMJmznioE%2F2eLIKv8DCHkQABoMNjM3NDIzMTgzODA1IgwRCYJaIp5zUtw22RMq3APZy3NhOS54jy11kSpS4KcTchbOdj5drbjUb%2BFVivUZrIU%2FGNZ7dqVbkB38Grx%2BXv9r%2Fi2egngLYbMoeLW2VKcBMqBi5eGxIAT4C%2BpHGyAtLhDtepHrL8Re%2B97V9IbZJj3x92iV9Ktq7haz2vTeQUnPkrcIKLnbMYgLa1fHpg8iaKSnpHMZeUKLsz1rrKiyClxoJryPck01JEg5PVBLNXo%2FNxNSIP1VjiZstrenfl5Xsc6OSTtmQEC1lw6jhat3fiXpN6CO2dGcUaGXNkEQPvP351hpMkr9wurKEUyn2e23VWrS2UsEt2KK0oWn542054xsAN14qXvef3WwOUyJTQkaXdA0CLPDxWeEjtJB8ifKbywCaAygbD4ng%2F4wYDqK%2BwiU1P1DXbzwzvzY0fzInpvB2phQAojorWxSCxU%2FVBFeO7yPlyEHDGECg0uzxKzgWMInAg%2BoIYufWzfFDWMzF5NClV3GNFUjweVpTePBOhdE7Lr1TKRgCLXPoITT7QuueV4nQPX%2BL%2Fa4lqOw1WguJ%2BksEqzhnYAaI2vn5cz2LETY%2FMoIQIQrX%2Fkx9sXZFFTamGl0LMCHRyRBmlQukHU1t8YNxobb1MRDJq%2BEjcU6xXkiueSpam0TSTZogJaPmDDYmfPABjqkAQBnJJ7rfNABdR7Xq5n1RSdGoHWNGtkU%2Fj0hAgsmujI6kPqiEuB8rjCH4bz4xgdjdOQNTmDTenZxf1pCz2biVVtpV2TACHSa1CL8RmuZ9NlxJlpTBZq8HjGNd4Ya%2BDBGY7yrNF70ySxTlPuOB8ETXrPdTUThR0QVWWMyp%2BK9cvspJyV0%2BfYczh7tU2pCDxlufPHD8hnVYsFq4inz4SJkFj4Xa5u%2B&X-Amz-Signature=9ce4d676f9fc34290a3d5ad0d1f0a031704b7ca1c6d33d5bae627fbf4dfc8a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
