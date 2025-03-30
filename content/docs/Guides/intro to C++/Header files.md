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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635VT7QV2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD%2BDq8cVKmaN8ZtaBRi%2FOnGyHx0KX5rsXK02JQ6k%2B5fHgIhAO8LI6KB9BZZUhQew6r0MFaZi6lboONEUigBjADSD3sAKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6fB%2FqkIBwjx31Nl8q3AO8jUPFrEHbYZMAm34oYKRv66OHPFOR8nIXM%2FU3ba3JkYWlgAdFeBqNbJU7f%2FoJAPe%2F55pAQyloDFA%2FVCMHmCEwT0lhY4yS4uqK68%2FVh0E%2F4OHDiC8ejCGH5nBqkce0N0CvCa3%2BcBc4xIH5tkENlR0%2Fdfe3KOXXaQ1Bl6ALByNdMoCPCVRBVwnJ0NSLZ9yrKihTCoMBuiY%2FJ9BZzH6A3tT7jMXZN0GuFczeWxOViqThd1ZkY8c8R4JwNTB3N9oHy5trkR6fQi81%2F6Kd0FMJfr2czuR5tE3S8mCxF5mxztEL8CBfXYz6%2BrnhZuJh0E5vxXEIHDPUAi3iajs1A8owlLQJHQxip5H0lDm71Xl2cMir14hPdA3bCRnEDKP7i3F%2BmloA0doJjOXXvwTMJD6hT5NAhxduYd99afM%2FOrW3l%2BMs7yl5uaI6JV2G2lmn7W7R508HCVckMEsrYyauOHOAKgrGqrPF5wS6lggnfeCLyqU66qJdN%2FpjLAbQBe3CwFVThrrCWMiTv38%2Fk%2BL6jAzzkpiy6HURO7u29cOzM77u2hPJBtemDcVL8R9yWZ1kDwH6ff9ASY4FY8K1FOXA62YCVtSX2e2iwT%2FqCw%2FfaKIee6d5tehrkAoG3dSNLouJajCP6qK%2FBjqkARsJGMdClnBB9h3iWoHORhfqhaKAWoW03qvXpiaHLdiSRL6Rk%2FqAm%2BgrXMl3udkkD36lm%2F7%2FUQwLrCqQkqPxQgZ%2Fbs9pNx54glrWOMk%2FxSeESK0e4VhIyeJTdeLigK4qJFTocSCXIbhx2DZVLxZsjoquVOkSN33XR7OsTAgVvciGQPviTp%2BEZFObfYuHou4Gg7Ogo4sR1EiZR3VMON%2BHngfKc1rQ&X-Amz-Signature=d3cf981f8cccb7ded99021b480053be8c87af580a059a7a9531f61decc43e670&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
