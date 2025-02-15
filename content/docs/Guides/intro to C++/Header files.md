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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3DPEKPM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDxriZHOmPuHH0HqNweKAtf%2BP3tzmRy%2F16tDRKE%2BllKZAiEA3dGE9p9%2BLTPRJry%2BEgBTSLhmDtzA0%2Ba8l%2Futq0bVTCEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBVFeAn7QPNINgz4%2BSrcA1xduxnAWeEjVFfy8iEf8qlVDMUToEtm7AhBIULHDyxYYJWyQY%2B6tvEGbcPDT6Z7HEoMwr2Ewh%2BzbUfHA4Z3mjLWaKVdlTWnmxv0tU0y5nKbDhdRJAXTiuj1ip5rDvLtuLJbyvktlfvRqh6PjTFODmRHVYp%2F8VQ7qZ6n0ug4x31YqGVF8DFYZMBZoz4KArNuS%2FMv%2BKo7RXRA5xBfE4LfAB9vKu2W9jPQuJZUAu5RrnlvK5XjbTABrXtxKexF2j4n8Y6hBzbNlGh46zVU5O%2BNMcZ04KOrrJ0ZfgWH%2BEFkiVR9jck%2BJkV5cyzBbXU%2BxY%2BqLQablSTtsuhs77wGxM%2BpDEvCHQDR7nZ%2BbNmA0CI8zrHYjZm5kxzu42E4ElFhpp%2BbcqJ3BvyZtwr2Ma5Rayd4Sj9SoSB6TzY9t%2F77zvlxN1JRsIOS8Z8ePfie3ysknxpTCKa4VPqVRW%2BPt3IXOyhvjvQVaOwrmypV%2Bi9113MfjYo%2BI%2B7iAVqz%2FFBL55JUCXvpCEX7MaLKw5PJZ8exersZYwoLtb7qcrIYe0Y9U8d2Ih0G0tccuzrWVBckHsydhjBg%2Foz2UfwH6hLcnMQgRl5O5jqKcIqcFqqfDFJpTn72CXr0%2F5Uqw0uidiakCLjqMJu0v70GOqUBNQmIiC85LNDIusqxK%2FlmsMTrWUW1Jg2Pooi2P5BNB2hARm6yNTCZs3lZPZAGodH%2FlXGAUM%2FyvpDAg26zKy%2BZIpl7oq00HxxczVp0hRxlyRVtwopDvmtjYHHF4zdxni%2BzXDyB96bkxJDhnhDQpTREpmCPqxV5CHAKIxshTFEE0UEDEzKQ0Wgp%2BVmeeb6vboY9SXINDWSRwSNYp7tx56FYIip8g67Z&X-Amz-Signature=5a2c66fd236089c91832b0bad5ea1e2f64e9e075e44cc451b02bfe460a64f3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
