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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666775ZDLY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQO1mZGhnh%2FZGVKrXAbQDxZjbM3i5pQZvCuYyG7EmoPwIhALV%2BV12OnlRX4TbSbSwP0%2Fp9d8sDPvuHTLbtuaSPsamGKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlXnwMUzCo8SB6a9Uq3AOB%2BkORzSaIOQ%2Bwk6DHpaPaM8FncGH6mqcu%2BMRDb2WDST%2FrT2cSARtm8EmKDSQNk6M0WH9Ura1dcl46mk8kgVRjfKWA2AX%2BfK2daq46BYS9CJ%2BBG8xDoGPexxzMHb%2Bcfg51H%2BADCNjgGiLMCjucuC7h32ZNAj7DMHpmJ0SoNwshQDT3%2BeH1DAQ%2Ftx4N1QWhHWDk2wIkktiu2dxHI8DIKbJQCZgXEPKGiWtJaXwi5LS7CBsO%2FgbZZ2f5IVFLFJZOp5ddS5o6bdEj9IpUyG4ow3z2ACZKzuicarqFEj4n0s16%2BLnplicj5yaR764vGW2bLTtDbDa47Kf2A2zerBf5qOX0I7Pynzjf4vJgfedt0xcl86JcpZknGSuFZdR0gl57OhGnuL5tx%2B5HR6yxBekkwx0LGIIFYyIIfESEKqu3qPM0kJuLsmV1%2B%2FyhBxoJHDX6rVx60lUZoKoMX6krvG3pv8XhBMQp3NhbFG32j0MBYr0uA8DTcfg8kSu6Qj05Xss8vzQYDalq0ChJJFJRglJI%2FyUnmX%2ByzMM3p7h4SrqCS9wvUIUX%2B3LkHsN%2B26hjRrWC351rO7edq5KiuNEFVjDug%2F6568Ap6jVv8nRN8O7zyahPvfo8hIP84uGo4g6EVzCw6NzEBjqkAaXP%2BOIE2TKuJDdnG1IjiFOQqwiysLaknTVP5LV0m9x77ofzqeUkhGFulnqceP5Di1C9HbzWBtBEQ4FrXZnRIk63fu8Gf96pNPU82vIPakn2va3WBCUEk1kZreBlYAdk3hnWRybKdxx1rdsseoUmN1MaatvR%2BGskRzPmiO9A8RKUdOb0KwBz39xwqPqJEK2%2Fv8FBjMqg%2BEMHo6uvkzJJuvCroxZw&X-Amz-Signature=00c5278bfc7af2acf3b7dc132f102e5498caaa0e66c09baa6cff37ae35085140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
