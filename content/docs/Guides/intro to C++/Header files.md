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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANVK3G4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCILZR9ibFp6OOhDI%2F0ES23J4YQRNGwuBHY9eAHFVXCSgIgSIIAVrkQTq4ppXqEt6GW6nTYv8o%2Fvt%2BTpY2KfLdPvf8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDL1IjTwq8kuqYP9oEircA5rDfGGxdAaRYfB8ag8zM9DZFOmaxhCj938pQRK1lBtXMbZxMnkUm6YQY1vTPFUpaVQEqgvISIvOAc1ywaHSWnCtweqPCpt4n%2FUHSVOps0%2F%2FP9DVCMJ7ZfO317e%2B2n4Dvi5CMhw61W7anoAPSwWhVaw%2F%2BGzKc0NIUwFml4PTLvvqn2hYoJhUVcateFnes1EegJtA3a7NRVd8Ozh0Y1avJAWVmv9pFOKqQOkyjyI6Csf7N1R1RszRpj3HMLgRo7jXnBxkb9Q3%2F%2F%2B2F%2FNCQihZ45Y4DYeM7V3GEnUU%2FknCIuC3i0Lb4Cf7XIXzQpgK9ZR%2BXnbFPfuErtu4J4Qdpks0ttfhr6k8a7d3JuiYo36doTjdqfoRsCcNhhAlhdJudL18lRNs%2Bb7HQul8dbBxaVaT1RvPr5voHmlBlZj2Mnwjrq%2FuFXN3Z1bgpB06h81dsxvuP2kWehDDp87IPcE%2FeNualVg0pfftZMfr2155OGjTw4dtcWLECSAOsvmytI%2Ba26F5AsoUvDTyPOIICsJpR6XyqqDQhMJCXGvP6n6Y2o%2FG3%2Fi%2BGQEaVK9kVF9Srp1L8cqj%2BpdjJ57gWRts%2FRo0BVHW0iZu0AAfkp%2FWJf38OMQVUKVZrbpxKEy%2F1ZSYOEZEMJ7i%2Br0GOqUBnU8el67yoc8ensoSQFAft3nG1XEAaYVh9slp1Wm7m0%2B%2FCt2sWePhxYWrGKr4Lo8vfZuih6Lxk4O6PoV85gEW2pWEnjoa%2Fw2TMgiI%2BQwOadgu2Q8CooU5jPGmdw25%2F0fch7t8lQNjFKA6rODsCnFTpUFmlVr4PVuTvqKDo%2FOoY7L%2B%2BK5AUBZzcITSnJQfVQ9lStUjxt2fsh2m7%2B9RObOQagSzBh4f&X-Amz-Signature=a4ca5577c519fe40deef7a29be28fa3fbb9f301e0d5d83e0cda17d9932a8e903&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
