---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHRFYXRY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHRalJ005EAfOsLznHaegFsDakl%2B4%2B%2FEo1T3LbC%2B5uFaAiARV6V4LruZ%2Bv%2FLvEVHw76UMpLFqzDh00CK3VJv0q2xEyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMoW7E6Mlu0SlI752eKtwDO%2FSdbkQkjihq7VDjWJ7zrY0YVihUzHcDInDpcJLXvx3aD0G6zmQpcQKxXLwE%2FR9BjtrPHfkF6bltLJid5AyTKuXeZcQbH0m7Vp%2BTuVFRhmkWuVsmpn1aqwL38dWEb9GRLk8n34lCTh1X4G%2FPX2sLzCe68IEST76mqS0fENp9ZjPDPyWGhNFBnu6eBLFinHXWXO2yPiT5wTT%2BJlrQfSV3JWIfqGViToScVepTum4NQob%2FiExpm0xBjY5zYswEx79bhMpMiEP4%2Fxpyo%2FlDM%2BSRl4%2Bpw2fTWRGPF6XwIbfhzJ18iqUB%2F0SLoO6VaRdxgBj5PvlZJeS0cHm5epUyJMKHx2kuljaqDleEwC3EHYRb3sr3vMtBBW2Ns3gaJKhhI3izI3SPhsyGGxz418gCrYzW2vy%2Fn5271h3S1Bit12%2FkO3I0CT4vRz3jojL2xDS%2BOAe5h5P5vS%2Fl8ZN6kI8WQ98dGT82u1RLYUm8SH4oM%2F4c%2FK5NYPTM7IUR95Np50%2FUEITChP9JkCCsNzy4%2BdYkFiab7P4LiQlfkipZuBRuonKpJ%2By882lTX5gCHUMNtX4MjdSTErqAXsb2btCbXfKGLu6EVWxY0sxAGYg%2BmOicqDWXaPMZUrdmxKkGE6b8xG4w5s%2BKvQY6pgHWdd4R3yAfIR3pe8sLmBhkk%2F855rg6F1q5beATFyptEEVvzpqgEPJ%2FWnV9J5T27fLxvklWhijG32TFX8Gtn55CYNSWw5UJOy%2FEKFF29CobdvkucnBG3zS8W1fRwMWgT35z97vhHH8Zq1vtoXW8qGRLbWMjGr44TNA66BAd8nCVUcjRrZwe5yStLNbiLkP8iRVV0nXzrZkRFVDl14%2B18bMhgrN6Mbsg&X-Amz-Signature=cf470a80e12e95f290d8d8b1d26f5d67ad17be85984ad0f4a18d3e35c46d0f52&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
