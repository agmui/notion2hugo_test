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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LOQH4H%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQD%2F0H2QCRr6Ge0U3AD8qIK9Somvim1rVH85NVAwNLdXIQIhAMJv9n2caMOEos1AGriZrBUUx20MJcDKSXKFsDkgCR%2FtKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP0EcIL56I412wMvwq3AMENxbBTE4%2FBq14UKn08OlxyD3TbOqVskI4aEPdTMYKsn29heiCBNlVGJGd0DQgh%2FB5WBJLfejMbof9RES4kTv39eRyEc66jIb3VxXY5eRfNWj27isS%2F0xkRDLEpn8wB7p1Zvee8ddD45wndI%2FOPbg1P8YWElJ8OsPBXItJn%2BuTSVEnkCUWcptMWaJ5xZPtPLIxBIlPzNQOrbBCJ1ToS53v79ijFUdZ%2FHNeull%2FP9KunEmuqo0pTSzDAx0vpBtvcqCK4UfDp0RHCxQceF2yvBnOOB370fu4DMc%2BrKSHaeImYrLkD2NqYZxxANE3h5%2FotrwFsF9TSwXJlSbmteMSp5Zi6p6JhYQIYCwSiHJ2yFzHKZodSeaOyiswC2cvEfxNqD01J1VLvmer6itUDiUxFZidBRBfoZ3p4sK3abGJlVQhL4498JAFBFFBFaV8FJYeuOcbxR94pKgKI0ifqgPEOGKnvSCxP08eON81olMgMaqvCW0ZW1apwI9XLKlSZyWENZrMgfiESMKJ%2BiAl%2FFWjLA2bHDem5PyTBmMB1m5DYgjz4AyaLzP6T7W103WW55JaH7pdbW10BRIEUsxWWtorUGGk5gPDhEMHRhsre9JNh4b7yPNAnM6WHaVEUOB0ATDiybu%2BBjqkAX7C%2BVtTQ7MCj%2F7QwgX5CtmW9rv125ZbfEHg7947EoNn6bHBf6ouPqFWoApM%2F7rfAZHZAjR4ZlSpVScHtonfUo7HDvuw%2B6YWpJamVxOeYs5qVohn4nykS8FwQpX9l3XHz7KOlwnmlecH7FgUFBI61CkWco%2B%2BPvjn5rX0h4obNN%2ByTBOi5XVor65mXkmjldDKz%2Fwe%2BH5aIBoY07xaNcQufLXAO4Un&X-Amz-Signature=411116060c8deea988146e0606b2adb7e4f04b8ae7636bbac8a501a8c2cc4843&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
