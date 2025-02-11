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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSKTWA7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwAZuHPIbBnaRi75YYBExAJZCj8cdxgXbtlymeJSN%2BbAiEA%2F%2BkaxrR412%2BdYRKDxug8844EHwB0WcNcsy70a4n9HSgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIC0qZuNuFq1wijebSrcAyrewQUB1cF0%2BfOckkiT4z6jIpYChfuh3H0WE7DudYWvslKzCms1Pn0qzabXzwK1SBEYQPPWPiXmo5nEc1B2%2FZHMpTSj5XtVENSRtix20MwKZHlzoqyi%2FzJaTqULVdgkMKH%2BqF%2FbUlxaodMVM7OpFGuyUrcV%2F87KbbL3r%2BWV4JgoTaJyl8k41nSNeIiud3u9%2F0QiEwt4d9Xe%2FHnLCm96r98ib7HlNvDFR%2BMYvDyATV0I9J1pp5x1scRvyWNWKNY%2FpDtGIoAfcnXWFobLKJEEi%2F%2FUD9%2FlYsEz%2FrKncL71aWAHX2odPo9O0qsQdfm3N32iXyY%2F6oRNoW8I935gIZ83hBr9NrnFiquE%2Bfu9TB8ve9cDDvHyfUZOOy7%2FPpVtAP1Jhw%2FeZdWhO6wP3VaOrs7U7SI46NvSFx9S1fsrAwMlLIQBhPrDIZmJrzXEeHW7zQ6%2B3azuFFRxzhp8ov%2FxXjynWPpqbKthS0zx93BfpmaoHDMyDpZ0yjcOwHIItzZ4hmrQ1FR3PFtdTfov11itbyI8I9izn1oF2JY9ayWPv%2FGcYVEkvTC5qH1War5AI5CL3OJMvo0kGpNdf0rch3frxP6oAyXw%2BwUKeIMv%2FNNYK60Pf1dFngvz1D2JyrV3Yx2hMJXdqr0GOqUBdvcn0EQUTb8RuyEVfVRlBtfcAQ25EHk8w%2FcdX2eqbmoxfL%2FkuuBnk9lWbSsrIDI7aMW93KGtibTWW%2BdJ7G1BUzxKiDyoWPiVBIsslzyuA3xdN45CDh0x2IAuss9ZWrLchwSrH7%2B%2F3bZqRdUxZb7A8jOTZ6ybDUvKjcDnuPmOBzDqqWXxf3%2Fx%2FsYQBrycJAfLByXOzqM8RRUk9S7Oza7JBJrRMPhr&X-Amz-Signature=4fb7ed7ef47fd256403ced5e927e88a214352a29654bf38a20be319f831eee47&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
