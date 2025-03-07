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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYAQF3S%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FCLlz8unse0EKVuPq2yMd8nW%2FnQE1qIlIh4dtsAFPcAIgMOqdQ4oIbFF2vjogqRSeWAG8fM4Jz2GscffCyKyRd%2BAq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDO9rWHbKjAOEw1uOsircA84%2FtB9nMFQpN9anDVfQSEhNTc%2BgATVmtaCe20c%2F9yGXsN8%2BtGz4Hrut7Dg3hbQl02b1cNFrBSeCTRSHFagjvjSX%2FW%2BoK3zWhMRxWoKDVdSIPk0K9cVG4uWQqsgMzR8tQpVtZRnJOEIazMuR3813RSzLoSjByFwOSG2Te5PlBboDDGq6rHvUmh1TuhpDdg%2F7ip%2Bp1VTmnUGgIiAr%2BmZxUQap%2BiHNIN99IWn7wjzeHxRRrSSifWwWqRiNt0yLfICU13qEkkQ0R4lF73Qye0F2frKB63sbAr2p85S0Gql5AS8bTrsY3Hscmug%2BolwN1Nq5LCMXgkIvb5BvY0p2LavFuMDl4s7Of91nw7rPBHU0fwO8F6xbXom7Zmyl3uKmfgBUG%2Bzo656giLgUJTjYz5b%2ByHmyiI5q0%2FIDJgl8yWpzWg74vgTIoiZ%2FHZa9hS5yzKLKGoqGwJY3%2FUr7RD8PRfxGAc%2B2gEFbL9Nxv8knKy5qmqQdwccdhBBs%2FFPmLTTC19tg4gSKPExCkxwdcFyshUL3ddQUioZUpeG0XG1jxlt2jEbUST44Pq4UWYkxSCG%2FxmIk4QAyzh91EhOVOy2R3q%2BsUi1%2FG9hDKTXXc46JfEI78%2By%2BwIp0ZvG2w41U3mGwMPeIq74GOqUBUWMhfH%2FRKrXPe2U5NUmgynRfaYMUPR%2FLBby49MSjBMGa3msAF2Bu0kz8Xk4EOKR0mXSim4JAGqPqE6jU9I8OUzef1GMNdntEBmpFGO%2F9lD%2FGoSlJ1NPxj0sH205XRIppGf5YPL6nbpNxtVttd9FoXD8%2F9V%2FMeIUsgquJBjlgLmL66VPbgc0wASpkBSbL8IetHzH7p2gaG%2BpveSADfjVhzOBabPcb&X-Amz-Signature=0b26f25336191779235ff9bfb98985d47e169718c2bba44f117a03ab50e23498&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
