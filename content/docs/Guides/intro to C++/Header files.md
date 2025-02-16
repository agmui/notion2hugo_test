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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EV7OYN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHFQmV5kc%2FXUS85HUOSSyHXXlXrT2ePiwi4IoJ%2F5i8MMAiEA5FllZqcKhTDUOfQ6JALNMmU5eJJNuvk813K2TOS2kwEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDigCMwqOx1ulISWHyrcA8Vj%2B6r3HN2LwcOh%2BNYzYPnsIkDIvWWKw6YNURV82bwzyrybkjEVJJALw3f3K93N%2FYjxrUESwJ%2F4bqzqglXoe1GDI8HxNOKuYxsd1RDB5IlRz0Mwu%2FMSOjQjHYV%2FOSvZqha5EqAwc1YcZY5yXRHQIhMGqvA4m7SVvvKUjRScARQJ3MY9EXDiP1pQrZED%2FtKvOqEV%2Fcei7%2FzbsEQKeB6dVHYpmLtF3rwTX1oIKP398nD6jySq7ggrKxykCxIA0aPggpiXTkN24nKKmD90Vx7UT84DUWvZKm2nHcuhGkvdkD%2B2tvkPZDSQ5mG2PI2zb4xk%2B4DeLY3v97zMKwDgLQSf3jlxSXjSimAiK9A3NNPfEMGWrQe7B5xYey%2FOIPHbLzgvjh2VNtYmpJsuB7a5GcabLNVMGJg3Be8wn6tlFd2N3m4aoHoaP7sgoqaDrp8JXaEGqwD6VcyJCwmi1SOSg4r1UKtTZrmjpA2ccARITKOuofxXj2T6yiWXUaZkW9dWPjrgDSlRCRFDCaHKSZRjGPOC3Mx6%2BvGuL3oiAPxfV7IAwhCPaMTVEZFWFaPPUm3D9u1oBCnAf0Cwk%2BxW%2Br0mAhNkKpm35vDisZ9kC%2FUO17ySMiAOFQFu%2F411uq291CheMOLDxb0GOqUBjo4tsF08GZig%2Fp6GCkqVdOQfYHmP7%2BjyXD1Yj49jd2N7jCoD1rt%2FI3wIS6LdVnxb8uejaJNjFxEdeBlCXqKsmPbPmBHXqrpWSZZ8YrJ8GnbC9GpJsT50MJI3uF4tjk6Z7zzV8QThZfY6tINg26byVJbU0dTiwHJLrBbTonnFDx%2B2NGUs%2Fi4HEjKDqjbQYdSEnNzYADtZuIITW3mgIyZ1lSgK2S%2Fr&X-Amz-Signature=4e453f1c09719c57c060fe1154245e3e5be049752935500258fd300a5e1d4794&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
