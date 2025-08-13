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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYD54O7U%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjUjC4I0bD%2F1IaOGuFG044EikHsv2BspPF8iF%2BvPPkJwIgFM90NHplwlTBlYQ2PnD5LXVSDW3EMvY%2BwLCHi7tL4ioq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEVmL3XPKZrHQt8m5CrcA7Ppptfa1FbZkgJazd8RWN6fpN7kqHuT1%2FTw22%2B3GJQGAu6TSUIyU6bGjFZzYCXkExW0dmnIm22PIUtViv8H7cceepoWOdfGfjDwwL0ZgcZLzd7O27scr9iPmESGwaqOq4Gr5qUeIEJzc2llr2iDkdoDbplEYRaZZoL8LIMAgKG5fSNcqF1v5Ah1Bu9jy9uZJ1JA44zSBesqI2SMNYs4OP9ubRPeQptB2vGYY%2BdWdGwke4MNTvCB%2BIRCfBHqRQspgqbrOL4qlP2LU9own1Lv0nrsWmFGpDIGvPhzCfEZ0na2QBYwp85o%2FEAdS%2BEH964rCXskLknUEp%2FbZH5vL0mc%2FcuGsf6lcdMIpkQ24dxlSgk%2BH0ZYAzsRc%2BQh%2FRSH8xN18qvqEh7x%2BAzy8Z0mo12VRvrCme5MJn%2FAO7vylwrG%2FJ5os48xrmcsTrleeVU5XTXiasGlMGsocnB3jxdAgtqVFv2zqOmPPqmj2rSitPbe9kPbb3L8%2BoN9xAoZVHFKcK0qgw88dUGw%2Fe34dmdZAfFdyC8iDow526nGprhK8KlPLXsbP7FsAHNMOHOPj6eEwCn3HAjmXkeX1EkPbq3v67GA66tcFE0hTfUE73st3dRgjV8%2BBXymZX4bTNXh0p%2FlMNDG8cQGOqUBvIWYaXYABbQxUU3rWXDwGcrzcAHUSg6WqziSmohQitZ1wMHmUSNyL9QbfyFND9ABHm56%2BuLsCPD5LsQoCLVfJ2Sd%2F1NDmv9VEWlCG9HKkFxFIJL8BWAqw%2BYuCFXkTUCX7YS%2BGo%2BvUxsgqQUG3wQw3pMsTn6F%2Bfm6GSXaBYBcRNZUrc10KBRzP1lmriB3gdR5OYO5Fkg1nWuIZEDOovbEeUvnAsrl&X-Amz-Signature=79e8a7ce8476f1aecd78a43665f8bcedcb5c183eaa233d1ed14f435dbb4bf4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
