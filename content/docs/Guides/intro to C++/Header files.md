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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6C75GN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQD%2BfZWfDbT3SxEkZIgHZxa7Oh26c%2FfPbZAuhnonIDlUoAIgfWRU8w4rgr%2F%2Bwz2NWZl5LnBgr8tgITu5ssyRobGTloIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHxDwmQ7dHK0jI64gyrcA8SBJiTeyL4D9l8vd0vfocGSEkFnNx85svPvlv64Cp%2BMiJNmpK1tdsmvr7QPCB7ZYs2asjuv8tTPviv%2BxU4gpfbq1AQ%2FNpzG890Vl2Ql4yPs8Yz0osV%2FJ8aDPwXWVwtgFgE5x5bCh0YnoDzIiHU%2BNIKv8IgrjoP%2FDd2VX0Fg4VN7T7AQ3MmAPKRH8CAW5MU1%2B%2Bnh7QFdjvK42Go7qruOnf7HyMtAn0iGyhJZOIiMwDYgvHpadmqBB4z3Bqjbw4C9fMeSCfM6kNrlKKa0fKVar%2BQKTY9BQAHUJOqJf%2Fe1BrlvZQPl4ulTKQo1%2BrvpqtTWvpWJO63yQIKpN%2BPmsGmbfIIvw5zWqhvH0KkqUy4i8NxycjRw72hY%2B1XDnap1G6n6qf60DIKWlCUI9QikcqCHiK%2Bjf4j8SEFDmUNRDKkeocBu6Lj5lrjDBKKnqCuEx%2B0k60OEjxUo775dGhbr7rjTGs8zP%2BXXZam3X96FA9D3rI6Dc%2BzoTufra5lxtxs9NfvJWVNvMt%2FxBGChGG3lCFNXCaOH%2BvYYCotTj%2FPP%2FBIuYNcyiCuiYFTpwAigdidAq868VjN6yZnqTG5k%2F288NJMBbP2DW5C1jVnkD4WACWJDkzit5wr9dheeWBb4Jb%2BvMMLLs74GOqUBXPYrvrRxdt4W18eAxYSfgePSVV0opJF%2BtEDOEpHUHfhPL68UcpsX3%2FjaLjG1Zs9vRo5GMCCrmYo8ZbAGpymznMqmZdK7SsLnth3iv9zBJVaHNzWeq%2FTd1bYjd1YxYaj2bWQknETJkhyRtoqUsBXAUiyyl0rU2a9oB%2FWfXBWHDOALjzJfKtZB9rTxSxPlfUAKEk0nYbu9XFF8OjxgKz5iU42dblam&X-Amz-Signature=1ec121d4a228304f8093a594aba726bac2a0de59e0cda4848141e35e8a37ff39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
