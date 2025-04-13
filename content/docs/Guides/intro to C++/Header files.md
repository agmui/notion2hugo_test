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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARCZESO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFcUbIqcJ5fVsq5ev5X52jipa%2FdA6TKZ9jCIov13DRObAiBR7voWZxK%2B1kJQMtKDOycNjEv74SkAxfNS%2FUlX%2B4UGPSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiWILTyGGhwff5En%2FKtwD9BDHw19XK6DNM6oxBWZ631%2FxtcM%2F6PObaS1xTDucv3GqpeFycL2oyZOzTQVPtzBLO%2Faehnu31aw1Wk2vj0KFr7r0AVV8O0YZuYKZfVC9aJr%2Bmyn68E2glxgz%2FoGE34oVJVbURppyJu2TuUEdUYCVh3xQ2PX%2Ffh4wRJi46hCNryC4wxU8lMWA8LMIflX4lcQyHXW543fRhrqb7fPv01HAPuNHaQeVGcFy6yiXGNcP1iyn9iqcu9Nmo6k%2BPwVLT5xgx7C3O5A%2FIQe5IW3nhM%2BEumYRaqxwzoEplvlEHHABwBHq%2FrkktJ2KcMmFlP%2BDXvoSfkTo8fjXyMLa83kN%2B%2Fc5tx%2Fr7zPwN2eXo4IgJs%2F46Mf2Rb4%2FgSpcinMwo6kZuTAN3t5lc4PafiDFM%2BlEkQdrh34%2FcG%2F95AG6wZUvdbWFLTFTTMsSM3bD6g3gNF98z3VgLea%2BEoygA1AEYwWyZoJAUZ6xYCXG2pZB%2FjeNDmKuxwsMP%2BcVm2CtSyqYJgcoIiWyJ498v%2FOyhb7tUU7hIuldSMmbQJHkLma977zZA2XjnvsvCSBsDTYdVr5xj8VvQZqCeBcbtxXwSbjNCevlk59C6bPvxvStfNELoph4WIqefvrzFnSjI75a3Sy6yv0w%2FI3tvwY6pgFB9R4%2BWgbi%2B20npN%2Bq8nOuU8Cawsvu4cTMDPhYuVrJ%2FxlWU6KhKeKtKc0yMwX7ZGao2SZHO7Sp6Gm5uOqpbvTnhfv7pqGhCrrA7XnbolZP7nBCstnuKrSfApBAyZZzwhaj5S3bbrZWoQxPj60KyV%2By0qVPYsCEWPmw%2FQmfkPIkVk8T7UQQiJVlLRY1YqOmU5fhj8nf38hUAi4bj5LTDZKjsS2L8%2FJz&X-Amz-Signature=9d6bbbaa3519d3dd6d01cf0dfae5a62e2dce28ea762f534e11eb0968c6aab2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
