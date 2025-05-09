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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DW5O4LM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0EzYT%2F%2F7dXjRiE5ysXzZ76jSrKFGvMEJRG6yaqgDPCAiEApCErQFiITjs%2FLgfzoG5F%2FJdyCrv%2FPROUl%2BJ%2FVqEccnEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLvkSbG%2FCzvvqQ87SrcA2D0HsYLbrVVlZF9hHnvYd6Djf%2Bb9pTFMxhReSxBfaVY9jKUumCL2bxfgFlMgSeXKSihmCz4moC8nTZFzavcgvxVC4HIrjTh6Y6eFEt1MJx1b34B0ZMyV1vmWknoiK2YFke3aJumtZdPchVuxGds2kqgxPvqeDyw85OrAjy5W3t6%2Bx%2FUmFuH47yUWZ726hXsjYhwVXq2FWdfdTbHyD5oE%2BUalq29XauU1fX4WjoRSCqP9APEPb%2FlO11IhrmmuRVA4aVE2uLv%2FqFFEgielv0QFwT3%2BWZ5a4eOzY%2FqWZckWOuVa4gqROkCMPgHLe227PKMcHZebu%2BZeQ2aqutpk7JoYjE5DAatsG%2F9xsxJSJZFShywzIo%2F0bpgLNt4bQqE6An62Yv%2FTQrhO%2B8exLgr3bEGHQKAFqEfHGQiMh00p3yK0da7Az230UdMP0wpw1zV8wsEnrL51QZ1ppvd692JLxF3WnEoMxDvFQyk80RTc%2B8px8kePr6pLtIMmoxbPl671hxMVLZ%2BiQYfHPRerc57c3Pa%2BINreRmu%2BS0ElMfxVAZhWC2%2ButORPkVXsv5jg45kprLgaiTjWfHamR7VxM4BqRoo5Enrggd8kGsmIkn9lMBMJ3BuBQNZ8DdhPj7OGNNtMJnh9sAGOqUB5%2BkGHFcQIEKxiB48YiX0GwXn110M%2FV3unE4FTCJ4hh6MLsxeD%2Fmq1OIhb6df7%2Bm28Oh3FMjKIdvDNfimwsJT6Z9cfo3SlHgCj5t6PNyNxLfQRJqUmvrj1DMqlcWv7hRs3zJOTOIbyYr4bc%2BVgoLyNe4NRylNsyAicuu3mnRxzYHmVaC0CJdl%2FzJ7f0S4AA2cW8PXqgtFQ0s4F8VxnDufkex9dMuC&X-Amz-Signature=53a3b94b51793c112233f2d05aee01c7189ad4274048f7052729868b6dec19d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
