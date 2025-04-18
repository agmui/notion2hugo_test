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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQHW6WXC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMzkh4K5nSFxYgMkCnvbm%2FJ9fog%2BCs33X1D2CK9LPHyAiEAzfk0MMNtN06zICxX4gPonCf9s0B3LLchu%2Bg4pkEj9g8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPInIQTJ0mTpEn3hxircA6ClnoQnJvHT8zyQVmP7jLF9SyP1EXsTPw2w6Z4NgDkZ830qq4wqRA%2FfAAkVtPE6mklnlCSUUfjATMuSksePLLOseXvOziozHv1LjnIrgrBPiNXIEdaAk4C8kreMEU24E%2BGGknkBNzn329q9Ztjj%2B5zDiMZG%2FmMLQfB%2FUbY2VDnc1jV4%2BNSCge1%2BLiGcHJM1QhphCkvveoEbnQXGwZaiXVzBJjDnWoR1Q9woNT5ixMUaaddyh85Vo8RvYk2JgleP85iwdD09wnPwI%2Bm5cDMxopwpIyC3XHdFdysVSWZM8o2NN01kkJoh%2F7DjpYb%2FZF0%2FuudMDijNJniTxWLQRs1u4zERuNSqDKc6qVzfBXqMogFOib8pggcjgPIKv8%2FKRmifcYykzXy1VwQ7PxDu8apu89oCpIHpoe562WfyvT%2BTTI7AiHrO%2BasKiWWrhW408MPWWRPmEZBaOLHA0rpBBi5BDpYacIyL0Q7l%2Fb2pUZYfVeuDlKeqdUc9%2BhGYA5ySKmzJT3kRhs3GJxguzz79MxGIDb5RHOYjnGNpqO%2BHJ8R%2FvnSGcTkIVRhJydOEAxSgGbuYvLBPcJC9bWm5mFZeNtcLTYY%2FiqFH10Hwp%2F4om8QbGWbNzZFVpVypPSjkVlZiMKaPh8AGOqUB98B4eQONfAdMF%2Flh%2FBhdcnWuDivAgxpmqCThaE9PID8jpvgfbX8sRkIROIIcPm913krVqGpawLhAhqSsRRBr798n0sKqRj1UfYcRg5ydOg48y0XNWMy%2FjEVC9ATACJH5KVacQTC1f1PR92kCLL%2B96K33wSyb3bdZvqYrIu1mqLlg1kvfPL5GzV5VxsKi%2B3mUMwxv%2BnxQMh8Be0YUWn10Fru2%2FYbU&X-Amz-Signature=d30e8f56d676f8522e0d288f9a3f49c2dc30115e3d1993700bdb50f30a24a0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
