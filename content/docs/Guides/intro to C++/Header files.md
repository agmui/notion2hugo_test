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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUOWSNX5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGVQV7stKRxFkzlnL%2F7jxvfQo3aOPd87c7vZp4z7lV8AiEAn5yI8JJRLgzMNrsycdgPHt4HtDF3DzKIE96aZWv%2FxEMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDApUiL69ANMUp9OuiyrcA60b%2B3O5qMsMRT4uqlWbEQDcHPUu3ZpO5aP9%2BhSMDSJuLQ4f2Jt3oZxvolDSsWj8LTNgJI07R96xcj%2FkX0%2BltSeD0lC1y%2FEzY998C83a8fu%2BJIHYrslG45O4utf%2Bei%2BQ2vDoj8TSpb12AXOnRS1XByW1anDm8yYvkwap1gkGfoaQ%2Fg%2F%2Bi%2F6R%2BWAFhPUVXmkU6NiRHAcPiku9Dyaf%2BGDcHpRh%2F3iERLE%2FNfjwO58itZud%2FCOo%2Bp%2BXVMLbSnfO0ZQyfvAwrzDpASnw5mYXzSbvn9TZuF3VAKgRGWvLEFDDp4yNJfvI7ycbCs3p7xtC894Tm9n0QDq%2BoScKOBP%2BC%2FNvmHda7Uh%2F2AURUTaNDfTCMcZDOe1Fv3zfSJhFouJkqtIvrApk1uF1R98i64N9Otq4%2BUcLp0BCBnPsM9PJP2fiARd60986DHMnbhC19Fdhaqd52b%2FsPeJGUZkMsm21yHWvjVi9PwObiDG2vFJAYjNF1CAuU%2B0v3WRBVMk0HNO8HvsvD00HjJEUa5CeYXXe2Z22LQa1BPs9TSTdhpUYQqhWVJi%2F1efJbZFqAAlkmw0JQ3KrUb00RiECu69RO7VxHyNxzAcKsrJbdAhQRPwYyxyeIoq3ntwCEpbL8zkLQwiGMP%2Fpjb8GOqUBgtmwyieS%2FUBl2nOEltogiEYUpAIALLT0KMBcaXPuShZ%2FLolY6Xt2x0vZxJagMOFoXBkjiugkXDL6qpv7Fx2EEqUbOAunQB8OBHhoWXS3otbqKxS8jjik5tHJzP%2BxONNDvMD9tmEcFc1au1AORxYBYaQAPKCAXABkFtgre%2FfhIPU0entSlQUko%2ByyqcZkrTo1gxH1skIwxUeECD1STIObdGSDL6tr&X-Amz-Signature=2cdd57d65c551b8a702f9d70350794f4803ed68fb586d70fe53daf338638e465&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
