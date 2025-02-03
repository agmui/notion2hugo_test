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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMZVYVZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl5jjS6sGk%2FcD%2Bt%2Fv2GaY0R8U5gpnvloAdPR4eDukepQIgDvfis4a5eRoYZ%2BFvOaC7stNHp7SKpNxbG7Owo4716b0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTKINXMl2xsH6XZFircA3Gmbhb2O%2BJEQWdILpoMILVQW5VqQA06qEEoNPzQUaG0wIbOC70Ms2bt9aenop%2BrZweyfU61WmRC8QsITlV6AMS%2F2WPFSPmzPmr9QUfCVQO1ATr9fabQXgArsOzqAukbjSpskhh8e18RL%2FTub5Rn84vDwhz4pGRuTq0%2BxRv1K146fafjMvUdF6dxDUnVUJ0f3FtEIsHvx2sf4kxnEd%2FClVNT1tAeMOOzzVh9uRIZ3i7x0AQe9XJElaVvw1XhNJ4NSGuhAeJWdTAbu1nrydznzy0e5DE4P6fJIEEeX08l6Kh9y3jDdWkpLtHljr2NRP9ZoV%2BE3pZ5RKr2E85kXivT%2BdvUpVyM7pZI7RBYM1soZwI2307ECuuAixeXvkX8PqrspHUCaUTr7oVcabALNAL3l5bv5hkxbaHmUAmeiOGntwRsU1bdFJLDZ1udZ%2B6ybwX6A8BLXzwa1gnJQxwrJqhJQ97MbdOw7Aud2Fj9m5b3K5%2F2DTl7YYtWoj%2B5aYSQd%2BDItHvqdQOxnR2TzKknpLUW%2BlqsPeki2R50bZxDKPwD8WzLCrROaXzwkVlg8zMGizUeFhGWo%2BVBSjKWpEGIqeFJqlX7gBWGn0mJPr04w0dakLXNZ3bup1I4WgV3UkKkMNXm%2F7wGOqUBgL65p%2FTolbAL8YFTf28a%2F6rSqadc%2BGwgiQy9xbf3SUBTH%2FB7cRllE%2F%2Fh2zPt5aPLLvZtM4Ns9D1jzapcBaSPRsP0AO8HOz%2F3SAb%2F7f2%2FbZ6ZRsr2ZVuEncJYpAPtoeGqyxUHcREIKNSf5XK67hJ00miq7ZBUrKGTIoLgYrMo9dm2ImlhoiPaEK4RvnjUtgBtCYNf3tLiqsXEHJ0KJYQOIkxwoJEv&X-Amz-Signature=38eb86f1bd15108f04af423e99b93ee02d3f140f7e4fbec567d7793c2e5c684f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
