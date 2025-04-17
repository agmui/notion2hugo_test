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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQO64TT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfsg2ILDGZrQlGy0015wyPZ2CG3zBE%2BtFUn79OicjuJAiEAvAEcUoXx3ieRkkysrL%2Fp6R33W52ievZitkZxRACVK34q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHK7Gdv3HI6rnwUTEyrcA9feDseueY%2BFvZUWf659M%2BpdVbJqQYAFkMtzNGC5r0tMUYx6jjcBOuLrhrciRSqJQNEe6mjl7i1VUbyop8jmNV3aTpLA2HwiPXOp8L77PhoeqfN68nqZ%2B2pJx0IxCT%2Bq8smyCg4Ff3m9oWcXgyt%2B3ERMAQ3hh8WfRyml2Gc8j2ND%2BWk2TkOSFoUKomxvPKL1PUDTiDWhOAW%2B9dp%2FZ6%2F9RAgfwltZG20Yiw2meh5%2FaBmkadEc3SnpSnq0HQ%2FHb1TZGnCOasNi%2FGXwnvNyR2crEfeP7vmxVd8avk4KJHcUMWPG5mvYN7d4DZBAi9I8jjCai3wW2B%2FAeuP22dlxCO8iMbMPbiyJlXhXOEVoagpwOp%2F%2Fq%2FHFIrINzqUm5p3XcgHxs5KDKDEC2G%2FqCzbdf9cb5%2B51iigU9BKwdV1%2BwoHoPNTCvfiCjDNwhVAvEszY%2BgFAYU2mpTJNkBcOqDmtLqLehxYXGelFwLoVkduPgLTpbZayDOLbBR5hdZ6e8tq2efv%2FbcaFKxwTkoF8m2KFykEGm2z6ULUGpJ1TjVQT%2FQ5so3vsSjTYpJIFq6cEzFrZpO2bbwzbZp3FM80eGekvTbtC97AHpzQaSSYWQWuburv0mVBrg2c2wJyzbljWUfUDMIuvg8AGOqUBotH9MRmiQHWIDGXT1QT1gc8dDpKyPbUyEfpV4G1M3nxwuAY5t4srI3EOsV5TDTQGzVxOLy4vG5HgnQoagxHFeiNzwlzemqTrBLYFcNC9ouhAPeXU1Gi1LQkKXSmUzMv0FSYpz69KIgAjPuifWn4kS8AStW2YkCnQpehnosIm9um9or%2FpUe6JaeAJ6aL%2F6N9fWSizdxD81ZNd7178%2FHyuMwbNnN5D&X-Amz-Signature=1a759502afee2bab7a4d2c1b8f122250d1fbaccd84ff462678014fe7c118ab3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
