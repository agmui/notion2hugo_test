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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=c3d0386e3cc44c4cf630ef7ae6d713be9123567b96bc7f73352c4a54fb4076d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
