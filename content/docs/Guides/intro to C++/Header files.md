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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4FXOMI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIG8YxdCbg5B0s5uBbGC7I%2Fq2hz6BvzJl4PPo3rl3zpsIAiArG5Liinwkg4ofkakWFK80McJIZ8aay%2FOpmbDVtsBjPyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMv1XYsf8o3VzPBiHlKtwDquqK3kqLkC8ZGEc8ZHi61Pqa%2F5Fn0tzAlEutc4xLx4A7hpf5dxHuKY3LrUynz12dzu6q9Qu7JK6NFzd0vyRxR%2BljloGDRDMAnYHnboV2SdPflh67dumOcqVE%2FLa8aJNTqdOmgNdvL0vbKUaQWf0AvXcWNfXa5qHJBA3YzshqvHQwdSJWWRaSTlNZZnrJ9lfSajVCvrSlLWPveh0OFFJMGOYs2njNRgnrRbGyhsT8QsyE82zdLkttfEWGfNNaU2uzfUmBfODHNOn9z7vtO4PDTGRjR2wBiXxeSBZqOWlkYmiXo8hv6A4gEr6M85neOXQfbYHPj5TuHBwGsvh%2BLEgQ1YWBeQcyZWhuyM%2BgEBursYEXxQqpRCUMWRxuFfXZxiiCgrsNL57PuNxsmFAhysCokItz0q%2Fd%2FNPBXSkckIwV1bSEX3Z8ypYCByEFJBI0BoBrGIM0OAuXweqB2rOYoQOFVoCOun3OlgBauB%2BUycw6l%2BI%2FXMpsX2YjxzHx1COTYME8BampS%2BHVFz5lJmYmN2%2FdoXRtJV791z5u2UB0HcX53V8%2FKhF4ugeX3hDSjReS6VRhHer0PtdkvOMEccP6ZvD9BWYIDZJQUlkd6UyVrv2MOE63%2FRzZO2HwGtPUebMwtYX9wQY6pgEf4ktpy9D30VVFAxfEpnk1OrHNr4UeQnlKw%2FydtDwEG6rYM8dE0azgaPP79nVmOMiz4gAZfH8bGrZ2X%2FiN1Fut0gRdpyApaERLBvSxNBTbbPpYDcUAxICC7rnRumeUiDLMXbQoPPUOSXjAxPrbLMnaTmZsCv%2BqRFI8A76K2fTIj5t3T9QJsAaWge5%2BJjxh9hTl296KnEsHYKmegdg60Ixi6lIK6XOY&X-Amz-Signature=541ce32cb67ffe7a2a8f44f733a039378e41253292f6d5b56d89a7f81fb53043&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
