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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHMK4KU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB08A18gvatGjdjuXKdUFu%2BkuCTFzr7PS0bCQXAfo6ehAiAnwdUFSWWhHlkzu2bHSI4%2BgkFjnvkLmr4fGAECZ4T2IiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Ald%2BG8eGb%2FRC8AJKtwDF5g9Q8%2FrvAAdsEnf%2BxJ6vt9wJ2QIC15uLAQICChreptuhhjsfcTXc6x85Hh2R6Dc6jSL6QuGPvuMgJ3DqyjWWZCM1uFm6HFznxK6XLfhVi0EmSHiyqlyi7btnq7JqjOxRlfZKlcC1FPLfxF2SH5qaYbNRb%2FcjZ%2Bt5MsoM30axWLa4TkguO8RLZ3YhPSXkwxQhBo%2BqzQD1azJ3%2BpWIritpc9lNzmR%2Fo3TiBBBRMCTgdKhJsTSx3OUZCVc7AB9qUCaIvOKLqTRHsNEbgi5v8CZPgP8zBot%2FTQ%2BU2ygeHJSItGjE1siv5mWC981NvY%2FB39%2BjbUPkK8Y9zdo0RYR7ZBoYBj%2FEzOqPG5Ez6ZCH93nBp7%2BAtxp43mN%2ByRg10WjX2LAC4KmzYVw0UwLjlCLFCNI0nafJn29i%2FgIl1lw9DhpL8MvxITDmpB9B0rX%2FFA%2BhPgNz%2FgPmNhoofFyb0zsE2hZUb0D2xXRxmcRX29JlVw6QDOyzhkL4p0P0v%2BR07jNuMTVu8KaBraLPH5GviwGY6XmMB35lBlv2rok0hLsOXxuDjrTyB3xqqOiy9k5sakFAwKfPYayKwbswdV%2By99%2FnvhGu42jhihxIoSLtQF2rriPeZwDmXRWLMx7aGBbxAow%2FpSCwwY6pgF7ngFFIBZk7Y%2BwooumERE5Cn7K4j8WewYas8im0i9qsE5ZhxR8bXLmz%2BEQpdsjFBLW9evwPhh4Erw6IZO7%2BGsDK7DEUryQN5tP7wgApCkB%2FhTvF7SBoGBIp6sh0vTFDm5SxBM1MfhJjxQfqgpz7qeajXPJKx6ndBq0x87FT3tt0sHZRmTQbZy3CQFap0fYluy0JW6CmHjZ3UEw6BUSPOXluQulBEZn&X-Amz-Signature=5175e8c900cb5ecee6fadb4689535b0a4fe38069ea2e2dab4f08a2e23459040d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
