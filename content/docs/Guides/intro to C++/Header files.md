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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUJED2G%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaqM6HWXpTJmCeYxO0bkgI2K4WXhcFu9n49gMEvRWryQIgaMZpLL879ZpaCUMuL4NkN09KxK3q2wdNo56aIXtSY4QqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlauGrH98cPySVPaSrcAxGFCX8Kx0TVdQMFyEmBHVSBG7rjOgpOtvuVjBnt4S7WRJOr6H%2F9yO5aIthI5%2BH3fk88bxcxpQwmleHS7mRqZw2ZBSZwXL57Us7ENtKWdC9EBmPPI7UOt6H%2FhgieSA6J3SO%2B9wMzoWlDjD3srlimhF8NtqDwr%2B6NH62VfvOPxDm85GMJ1w%2BIWrXVGKPTLzBAi3oW59fb4Ppv%2F6Nnjp%2FVwyOku7xiG%2FhIWJk5fB8tqIX66Drr3vF3IDDYW4kQacxzB2BDlnCTLtfoe5%2FamRBs7GievgORGNIo7%2Bzes%2BnYZkLLgT7xrZaeDQT0enQUT9Fm7te8kXTNj13ciCpiiXZ%2FYPsb6%2FTOBte3JsYQFi3TZRG2ccjetRO8oROH4OVIcEQkpGhD9bzk6jXWtIUn96J9tJGWw%2ByvL1dVYzdwZy2eBRJszSnyxthbOKWPhzjPe6k%2BeWKCU2yDcHSdArZn%2FbXGSfGnwPBeW1kiv5a9v93YnShJ7vaLTv7fmkM53L1A6O8%2FXsq60AhkGphZ9M3IDXbfbeREQBKPkpTOo9hZDblHbOwmonGdASbwe3e1o%2FT9H2IgtHc4HV%2FozIS%2BJIJJtAXlj%2BO9Nyo8Y6%2BlOfkmX07Q5AfqYr%2B7xC3IGA8Vf%2BSSMOWh%2FsIGOqUBcUzlwFW6jxaz7SxQ6OAqR84Y90cWyE4tryc3v3VSf%2BS0WZZznJdhRX9JHAM%2FJQHzKCNL7hNyYTfZTo2g2XW6u%2FkRR6MnlKFJXHxl5zg%2B9O6tnQsL5EBZDBOkYPttS0OTCffivp8Qm1Op%2Bduiw9sgQPGUmq5vVEiE%2Bu7exhwsoHUDmtV9BktO0qbBeWJxA%2BhDJZeWR5BiclSK3LcChJlyJZiDOzZT&X-Amz-Signature=5f64ef9e66028dd5186c5febd6b468b619b107b3d16077406d6437853e764d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
