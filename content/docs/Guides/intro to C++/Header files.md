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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZZW2OBC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrnDg2u9kOGpGrjw0Ogwmr7OwEFK%2B1ZX1n0wtuu%2FxcnAiEA5FouSDV2X%2FwQtAMH71v0G%2FwqEytJzqU7dT1oBOVttFUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMY%2F2JyjsQzcrTqHircA65JIUagBLx3f2Dan3pXkftP%2B6QzZVVh8XiUVlW3UmPJqmZ8Wky732ZIYK7aVxv0wJbMvLcNvW%2B30Oi%2B2QyG4B8FD4A6SiDcwNa%2F3dchAbNq%2F%2BbMrFSLOKls2BQkf4Hef1PW1dY7HToFSSJ2Lz8u%2BGOutYoKbsvcLrfoIzhdelr8IOc7%2F6CF9TPUjg6zB1ktK2cBZIpjA1S9m0DVW3Ld%2FVq03fesKXSkcmmCkzu7ogSLnUeW2ydtCDTo8gPH1niS0mSdmUQ9Li%2BPuQWWPJr8UK0y4CEcdDqdn1CdwQINk5S1rD9pS4dfaIvjsPwQtiN2ukariRzI1VJlwX5WrzO1XWvvunfafQH0suRgwhF%2FiHkh%2BwIKPm%2FpiWHdWp78g%2FyGzfuKAod48MhMubB6x1mGlbZQevZIzDa2ep%2FopOGCW%2BF1k%2FQ2YYw6T1Gv%2F%2FYnyb2glF9akLGsLvKl%2FbdnHglx7EGYw2oqae%2FcK3TgXL1WSwsZi0xPFL49rak4GC3Y1I8fHal8LtkMam%2BPQo5LDXMKR4BzZ7qEGO85uvgJoOc%2FFusBWpYL0kKyaAyDIesXch5%2FA%2FydWR6oZyglR4PyBqdrvqv0ByRXxIv8e2DE84GDHYdj0rnwl00E9ulh8ZT0MLeAtcMGOqUB96sA%2BUecs%2B9dxmItbdOFhK%2FGVnJ8VN0BBL5Nn7FnDMXSxo65fXkOQHx9Vs088tHJRZ5AFX%2BiJmjD2UVG89MXfZ0hf8eweXSntdOuTmlIxPChDGGMh%2Fr7FLSQlJJqDWb7MhBfKisvI6fYo%2Fs2ZchSbanAVN7surlmSZGAHJSZ8P3nJyChFEl3C5ud%2BKN19eN0v%2F08l20UyL1fd0FrUYc0mvnsWoYd&X-Amz-Signature=20c6ef08bce84bea5c9a7440174cacc29e00fd8f61ddbc5b0481b32c40942335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
