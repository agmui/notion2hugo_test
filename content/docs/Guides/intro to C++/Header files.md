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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BHTJCHT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHaNDfx%2BoK5forsUHfuYJqzJqwg71FTuiv%2FQiTIL5CXXAiAfQvteuLALHXDdhV6b14sjmyn2CIRMbvkUnVY18Xjc0yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMSmO2dOmEIYUFgRBDKtwDup6%2FITbU3Jd06vmCP1VqJxY7vOc0oU7bgbARIQzIF9D3YG5c0qKhEEJmu7YtbPRzTOM7mEI24Ria%2BnC%2Bj3nIRK2HnQlBWR%2BGB1HC4DC%2BuCd%2FX1EowdaUohQX%2BGJh9EtyROV03yOrXjbbAfijB4T5lS9Xnihy00161cZrmQakGK43W1gEHol7em2OVL%2FtsryTdeALeD6tB8SjTEa2EaN4eRg%2F18o7FTK0LVQP62JqY%2BLRlLJDZtfvcRbqYLumPtCUTuC4eBTuFs9E7tvK7OBLd%2B3YKlgy5IiYluspHG1PmNbJ3xGkBRQtY0RNnBayi17lD%2BPMmfx14ABM7A2lEgq9bceCoyrJrg2b26QHeBz9pTWlfrJ1kpaf6VgtXscgbKJCDU7%2B8SjohrPhP9%2BHPEkb8vCJggL4HWW0QiI0L1i8dn6%2B%2BeFBgOxISOoa%2FrHPfrKkvjLHs%2BIvlcvupcxBN1Mc1QkVhP8ACFjRrOnBzSfe09gBK2bxVXc8JSmN5e%2FBzwAYh6TopinxRDwf4y%2BWz6pZtQsfRz6bvJCZ%2FMxAi%2FZAxWzf1EVjPTGqiRqusOWRjZeQV0l9VdXlFhN45L3hsiW%2BVkVRXCkNAtotM0hIz1CYLGHWIDf31a79I%2BN9v%2F8wzN%2FFwQY6pgEnqM%2F86QHcG7CjiUipTY3GkAVEjrMxYlZejGnkZk86clEldSaK%2BOmjsnnImXsdGXKma3koyTkJAjfaT%2BnPPvGP2lMkPXomDsXb7mB4hxXI%2BsCoMVfMbrOAYlL9F2obHFtM1oA6lUxiZqGjNa0XrvpLJJQIeRIeYrcB%2BsZysiCETGXQK%2F9oiouMv2JCQvD%2BU8ALbSCcuYyYbnQcF9k7vT%2FbktnwStZa&X-Amz-Signature=72cb05da4a21bff638dec0b89f4e717c2bd4d179f140094704d8e8a903b27b76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
