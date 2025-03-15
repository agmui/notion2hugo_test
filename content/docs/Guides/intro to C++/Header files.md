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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HM5FRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEHH8JZOJkv415gNS%2FAhdxiludtFVv04sxRIne0IfBZAiEA%2FkLn28d%2B3kgM8Pve86kNenp3uD0LQ2sngjYNuNaehIoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI7oO1IWMcYK6r20WSrcA0RVFzVpYRtat1UB2%2BkK%2BYSTA1S1wDwHLfhpdsVzk2tjkoZZth5d38zK%2FQPk82VjaC3a9n4Zdc1ngxL33D0PoPdMsDyVVvNNBPipgJO3RHhF5nIs6zbWUcuduI7Ca6fUtMzZqZwJDEbDp4As5hGS8z5o8hlWkwilHFIPC8gvmriqA2LVSm3G4tteOi8oXbOtiMBJTn41%2FylqpqQdpWB33UVSI3Sy5RTnZNnIVXoPrUwm7FxtJUy902YE9u8m7W6i61xPKq9ZvmNiD9hlnxQzfblVb%2BxsrbYFK0T6ZXHzs%2BJlnUE21YRjs7cRibFl%2BKNbNHZwXr1pezVDbQoRyuieIW48cWWp5k%2F5zG7CVKBfnfDA1hHMRfFQF0OnOjrAvABikIWEOWQMOLmL54eDO6QXHF%2B6X9wzXExSLui82RSY1xU0P1NaCcfy5L6iCUUTYywrOQGYgl5MHS%2Bnb5kbBx9ECONu9vbtZ%2FYKa8jvdWmIJbTkZu3ED2MGbB2sSJOEwi3WLKvSg2hWhha7SR7pvLF4lVeoX5KOxG67Cv07CC3SDDTd9E4mkim8Axmf9u48hsf8ZmawahgTPt2vkEBiv7K5AiF%2FYdBxA4OLuX5qm%2FdQ94BoHcfx9hV9gR2eGZ6%2BMPvu1b4GOqUB6jIEAlDKHCSdKCJvNeMpM83ojYjOjB5xmmWskeQKxZE9663cc2Kb52lKEWI7nOjmBAfNmmlnOFSI9%2BFd8oOGWBPeH64Hpkbu1Yv68naTa9o%2BpGcvm%2Fi2hCuFkJL2jWxwsIJ%2F6F9pGVikFsT6XXXee6%2Fs5Y36Bx6%2Bp5bVJB8cFjnx%2BST8GBe%2FlDYuub22%2BqO3tri%2Fvk8TrlA%2BhpTPCnlhcDhtnQt7&X-Amz-Signature=d36a0adb72da90da6f64aa4af8d77fec13f515c80862a627d5d6a08119bca0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
