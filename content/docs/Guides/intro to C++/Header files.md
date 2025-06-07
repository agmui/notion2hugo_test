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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIPY5BN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDRZAO72NDvXG1yWwAD1awSQD6KUcKBkY1aATcLKX2IgIgA9IYj8FY4EjOkxY3WMn%2FxsiT6lRUwyBPovdGRarrp8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFntuj8BFeAwUrtOayrcA1KzOazdYLIrLIECgd98SR%2F15d904ebk2xB6yOGud31f7JIOcgQkFVgoUoRhMFqH72tBrSf5JCmET4eqXYVLNl%2FjuCaj6TrhvdomMqnnDw0uT3v36rV%2FClagzzV%2FdJr6pUn3JHjNz%2F1DR4of4x0WnK4pD9Yj%2F%2F2WX6mqCiyYEOQ8nH6hySW%2BAn%2Fd4qYV8RsmgdMJ9RKFsnHuW6WJoHxKvz39iy6XEMPP%2FkWUzCvBCNZD2zeE0wztYKSACQQ5P9D3NC6%2BozIL%2BZNhj3xRQ%2BLYR4WhwV8taZ4t2DJ5q%2FFv7m9NtNN61KALxR5KMOFI9jX6ttT4rLiHFuK23wZeIK32oLC%2FPTkYVkF5ftozzSKcXnxCGnok4TOC3wjbOszAXKzGBgIPdqOFhlF7nAA9BEPyti325j%2FtfwfJOQXwpu9a7YSYHeZysqB4Fm%2BB9CFXsH8Hx4M3OfBxpuWs391LyEEFTeH3n6lbiL5LrL1MUVAE8PnKCwSioSXIlILB5unv3cnzbV%2F4v4gUmeePoAb0EOUAD58LIZFLUx4fB5z1jUmqpAbPgEQ4IS%2FVtpcAVSoFjEGgCYQgzAL%2B%2BxZOGrk8fiF11FN1SiCrrszsPkF40a0aZxujvYNRZBlDzkiY3ptJMLeBkcIGOqUBVLkKjD515RbDUSmlHUdSc3Co6oHu1pzyMEkWrLukGMZ8ettlc6iNYgchmvs6OFTclzQck0dtCQGOJYUgzazBu3%2BKbCI64ItsokH5xyM%2FXS3qtkn3PJD2UjrnJp%2BsFVVIMbIT9Mg877MVU1TfaMzDWbPtRVI93imXeFkcFXXsKaH9vVSJAVP3FnXImlFpG9ooDHP3XlTgqfjrLnHEPPIzC0JzKXIL&X-Amz-Signature=8012fad5cf1ad82a2aab90a118819de8708549225d5fe9f5071d75f0616213dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
