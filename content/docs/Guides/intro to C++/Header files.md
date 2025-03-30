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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFRJQYT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCID6PeIT8B9mxO2DAsUYCDq1CecHnauqpmUJIUVTUY0uLAiBvSdHIHCxDURqj4brcye6KXDroOd9E0ad9pvGEHqPLHCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0v9j1rkl4mAP07sKtwDOQ4LSs7KvFOPylC1t%2FMcZVeRw9eZi7CzhPc6oUFr8eExL4e2fbKAqoYJ1E%2BHLSute9rcQg2%2BQZf9DSo5Q1%2FHqwE%2FsWwsgc6y0EHPpS958e1oaa4aRbyqm3lwnzx1qXRBiupHiquPeqVGRC8cf5f9GYQWA7laeonYT33KY%2FcNEw6Ini5eVzI1mOtRbkzkByCaHg0NWf2LhKlV%2FrANFw56RGZtH%2BmVv0764MZLam54%2FFWz1ul4AHqHIHUsmKkOJwJs%2FLcw2bKsUG7sFrhB51VlUoWG5QCYOAWvqz%2FlA0cN99sFckn%2FyZZvyDJGCSJchwYodogeaikggH6xaGprldyWj6%2BaSl19yAnpzMoXTr5lIhzxBqFYXtfoCMtxS%2BlnEWT1%2Br0RV7ShCLeOwa%2F8R94ty5PkbPABmefMYi%2BlZ%2BH0vK3ckYdEQ%2BAg3KsY6Y4JtnQKBLcZDJMp%2FBrmBBRyy1h6da66ZMk30GUKjVYlh5xtasa4zw6kPgUdZbcxSUWIo2KlDIBcDf83GhbOF8qvq4uWKMsSEdutQiRrC5vQ3jQikVDQotc3u3V7SFxl9z1KsVgfTjwSy4VuHdCtcKqr9XEM9Ujv51QmTDUzbZof0c%2F%2BR7py5MVy32NqiT8z7ikwo%2BqivwY6pgF8IulodvWqWfLBKKlo131kaK5KdbYY2DgCB3lVEOt1v0d6uJekoVJSrFZ78AtHHbLuQG1mVv2UXu72rFEH%2BaoKlcQGx%2F2o43VfaG3Hy4K%2BW%2F56Q2Pjg7xEMG1wsNheuK0qI2IDYiKOdu6qpi3%2BJ6a8PW1z4xqg5fxnsVHJRlukA6mPlib0O26vDH6i0%2F8LhhAKldYU4YN7hOxsehjAMAxPmnRvIdzX&X-Amz-Signature=97fa6de41020dfb2c520f4e11f683f0f8b9cc3a79ed389d98f1dca07be7fe9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
