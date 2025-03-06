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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRL6KWH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQptulS%2B8U8XHEs%2BAnv0AJXtKvl%2BKzQZXT2mkgFLKGcwIgXkyQ8BKczjwmYjw1pSfyU2eEMB0YXQP9bAYhoEPboLAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIKFWdkz%2FBAFE701qircA8oQuXLGqDqgdinOvlZwaxsGAg6%2FZqLn5cJ0XAtTSiHReQpmNy6Z4iOJ2KOXTnbEqt%2Bvx7uOH7NH1rMgSzTGjB2Eu%2FnwrTZudO%2BRG0egS7FCOcyP0COzk3MHBdagPB9a%2FZYw8IXxOQQEdFcJFsoB%2F7p2mxkWWa1mQ0MQw4PRGpuk4LLxTqkZywGBYEpbOTiqoOnmoaDySsAnMO5XXOkQfsLiGLaGagwYLigyjHJLehB437Rp6ZijUXZVuspOa1bjuaoA%2BYo1u23MsdxA1WQBWLARGKBEQGowjEC9HYX47roBXcVbJTGhU3YECFg0c1ZdDxbgVvVReWcNEpYpPL7v0CEhRGALYYxl%2FWvOaxuaibnLkWQFUBXE2x%2B2kp6QWs2G2o%2Bee1LaCok9JRvJccgJe6XrlFZhVsV5UbGArEXDBV3D33oCHtk4XavDDR0iT3v%2FbFz9wAmQm%2BcgjnHKPvBC7lCCS2CjDP%2FWYqdhwqOvPr4ur0iLbEJKXoYsDTFMHQ2yYuICCKwD628pBx13HSsOhy%2FsekB15HaN7zA4vu341k2lMnaW45u5LgSkeGFqvH5M4BvG9NMWbyVnxVdudXSIURSfLUk%2F8GFyv5ENS8qY3MmddjuEiOxi5YbRh8ktMKmPp74GOqUBczku90MrIErL2SVZc6p%2Fbk5ZE%2BlIf0RVeiMH7p8S1Tux7bLe9du6smibMGoBSJvg5EYJecOCNZIR13tDv3bKXc2szE87PWFl7FdIh3bOZcRsmw466qVP1Prpu0Fm0E38bv47ESnL2VYWvg%2F7Pl9S7NElnQUqbk23JKuqAaGzDJ0OdbPGWtNxZolSY32Gz93SdO2Xf26F4u4eYOVZ9qKk8UnYMUO1&X-Amz-Signature=0d725693955a610a7af055b2d2ce0a6efba13fd0a8543c29dc30086f0d3a67aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
