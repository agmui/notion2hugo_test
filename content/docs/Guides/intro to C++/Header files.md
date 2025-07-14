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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXVJSXQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDtaGryQI00MoL520aoSmktE4jWsFnq9%2BarIIsbOutyTAIgTfdgORScSQb3DfhO2P2JiC5qZfDSHDZ4Agi1l7WA7jkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDHuSeQkZCWbtA%2B0PircA2gUDySAgQ%2BcVSvUN1AGT8SbFlNGbWj42nMKMPh7oMQnWqqa64DC3GXWusG5fkdxAVLOdhkopWbZrFn0hPi6zA9%2FzcvPnwHYNJhRqQcU9fHWkBNilZpH0exicCngu0ffGL5UNcClkOxlIR%2B%2BbishGJddU8TDiB5SXx6376znxSth3kW%2FlISazJ5F5Dmay8uvU4u9TuprzV0yDIb5%2BBtziiA79useEWSRN%2FQHT3rLy%2BOmmChZkevilr3gVbsCyy6PSxs01hNr6X2ojR%2BL6g0nioqMpTcE6hoseSdkO5hbw44jfHTwXHtTvewJw%2Fb5MqB8KbhB%2BimwBzVedkvq%2Foq4p%2FBllMmEKhnxlmC%2Fkj8bP%2BOBlJlzWKhn8E3YgjvGmIS0JksrEZgOv5soIILfVlkmi%2F8z422wcogBz2QTndXLOeSnY2z0uy6KPT7xJNrXOIVITqQLZkyni7hkkpahizQacxvc3N%2BUkoqQlkUqHi07%2FjCC%2FrgZ7uvHv9T%2B9FIP2ZwFymNLVmkPp6466Bh7yd81sclDsjnXkA2sGEa3bYNRBrs5YuMxn0bIRfyZPu5od95h5YLnU6ycWqw7yHTJbYcwmt9tMejj9fk4X3uARDMPhztINvRvNIuGTqsboS2hMP%2F31cMGOqUBsgoxXeLlU8KXuaC6DG5tgy0QqAzdVFQs%2FC65rnBv7Muv546AQFB2TX51BIBbTa6osR2eh14s46rvRn0PrhxgrSQ%2Bvcj5WSsLq3xYY024Ahl%2FzPGEmtFjd9LbVMwE6ogK2P%2BuD6k4TkXDPkqe94YrLxEHomy4b2YbWUC%2FSeeY%2BkbSSON0gonAROXO735e%2BMHVfKwd7EDnbOy7j6%2B5mebdi02U%2FpyX&X-Amz-Signature=b30180aaeb2b110b666af121d01a0b2b2223b1b7334bd79fc62bc61767c8936c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
