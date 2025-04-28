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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U27S7G5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR%2B%2BUNnP4%2FDMx3NIYnl4bF5kar2zUpg0J5%2F59uDct7dgIgBn6ZGq%2B5IPpawCBzSmr6fWlwN0gprsK6WRscpmShfiEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDSH6miBZfsIBK4hmyrcA3DhWLBliKBsI6nVRVFlnH6m0scz6iTkx%2FbUcJsenk%2Fal%2FPL2I3WrBeeG6u1pRfFArfYLp9RwiWEmNnr92rKTgd1HhPbaIf6DCQGTqROGAVI0nZFhJKq9Amw7YZMUW49KutZyMmxku0LcU3K488IoOLySr8YVRAehN0VcdWqsH8i%2B%2BwpZ2PZZzOEvoseaT80plyjYZDfSBAZXm%2FzNeDZYMt%2FgNSjqXXi8y%2BQhQCzla1jEiwuIWQQB8DFE8%2FbG1R%2Bdt6oYEgFRZQWbRJd2xyt2Et2a8xE%2Fmg%2FJZ7l5bnbJmN9Gg2DgWZdHZm%2FPbh5%2BkZaNCglQMCMODSa7%2BX00w5sfBQEHCH6%2BvYvLuRIsi8MwXfnqmdcNaPRRtIdCz%2F25e9ZlsPFSkmb3jwjqfE4NVrFIfEIyy12BvLl2CTMQ%2BeqhbhHabGanZlDzrAt5O%2FAbRWJ%2FIjHRcQgt651kfTHI5zVP7uRr%2Fet14zB9ATEl0OpAxtxluPkamT62af8tvrLFYGqiwety7eQiR3sXyhgdm%2B9bag5qPQrJ36RTRVaf24GGyrwaBns3e34fetOOwhze6%2BsShSB01HukYlOSl4d%2FAZ8xbecNabtxgywJqNkKTSnEniB%2FanrJqOmPyDXMDUoMKyevsAGOqUBFNBwiF%2BSAPjnjuPr526gLkdeK0qR22ANr6uJYYEdXMGUtFpAyKzBJIe6vjOGppNpGyQNBiJAQ9ouT0O6LxqCs4lKPRYOlOh%2B16y7KwkaLRX%2F4ig47c0%2BLrwJr4jJ9vHBvfsJycbHy2uNn6sliS3zA8fMA9KDSPkcUVeu8qI%2B7%2B4ryXjnOR3EzUizlOEqNWdHxLklYuowwAKpLtsE2yzXNNy77M%2B%2B&X-Amz-Signature=f26f219124dc63cd445fb79b5b8b4c60ab1c47cfd76dde175d13cd13c6054e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
