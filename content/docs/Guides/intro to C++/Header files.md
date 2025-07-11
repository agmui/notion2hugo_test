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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXEBZRE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGIk%2FC8J3hHO64lQ%2B1FK4wVPjGXCx%2FjmfNHvrqGzVT1gIgHMOJvsoOl68nD5SPLPMY7erKlOINENH6mMLzvz8LruIqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH629qlWvcr4%2FvkCoCrcA%2B1CayK%2Ba5qJ59RbA78259Ijw9dgADzAseh3d8pv4ziq4UX0Qg8cUwo%2F8vw63pcd%2BjtCaF1Fm%2B1qbnEwG5%2BEtRF7dy1sOvo10QQe5ZvHXPsFpBhM%2FEZ3tlYsYo4BTNkkcY7AMO96NQHJ2DLMp0vCneLk%2Bza484vpvEK0Gyhn7nSsDfE68JmBBHryG%2B0fV7AJEWVnaIiiDDK7DeCw%2BtigMcNvGMJxLN7sbRNf0aceusQz95UzzHpFpuYV7xCQKomhhFFUsU4Cv5Iai63MXVoj%2FiXdz%2FuS%2BWV%2BF0SVimFjEXVF2PlvOpvpPbVauGzq6Ql3ZCGFoMmum7xn2AafZNTQ502%2FLLb2rtT7G5URrOUIe%2BjV6TqJUFMv3E1oq86D7qxzrwWSIFv8ETUbgypqJ0mOvWbRB7EPlocydQ3M8oTug9NMdSR3TuaImYOlPtm%2FJJOYrTsJougKB3n7AARLdTZsV9o1wegnOC38xu8ILWwAR7J6qDPrltjKu35vMca0sEmSxAmmP91d0iM3Ol1ND5h288DT%2BwtmETICEwkbT00tamA5YDPGEG0afoDOmqLcYzJ9pMqSd57umZI5Gv1ggovKKvc4A6738bMaYsf2UfrGhWfnS9yvzVByo13%2FhzXCMPeDxsMGOqUB0UAQnesaqrDm%2Byld%2Fhyktmcfj4qkto7PS6%2B8ZC1RdBSXZ43tXPR0nN84ANq%2FwwOnSLCnSynraG1VrSkxmFxy5Ssv9B6SSoKLeJkaf3p%2FSWMjFBK8yTbyd2ZcgxoGo2%2BkKfLoTifg7ttsLSYAIvey7p4u3pWtk1RoKKFUPynOYNbtJowK%2BlbAZYi4naOFC14lws5kkw2kPLhpMx0FCNLl72UPP7N%2F&X-Amz-Signature=c93464afce52372cbb67ac486bb40610153d6711326b5cc9f20c697e3e52e3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
