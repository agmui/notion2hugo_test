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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSP5GT3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDhIgRXP%2FwcHgq9vJVYBvfbo8VRpaZHZjS2mORAQfBlgAIhAIzDnP8o8hU75fs6p6k8P3%2FztCClwAYGaom86QnQkX29KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz4aMrq0miXOeU%2Fxcq3AOMjU5M19dkzWFNMQ%2BrAQ4mthmmizWrYThRUiUPfmtSQBJFf3yPC7mwR70w5ZJUIGU0aj9ycAQGlr%2BAC42LrwhI2J%2B%2BolWeOYaH4lGVRMxospX%2F84xHgmEItN4hO%2FDgMovrhFarxHyTOsLDsyi7OBXlq%2Bu0aP8G3xDuD%2BHetDexRWqqgOm025nP87P13zZFbWVlpnKJvX3oBO7478uIwqZWoq3Rb1E30eKvWdVQscYYn6g15LFu5Py%2BaMz3C6HMWxatN5e85lkCIcjAfp4Xn%2B7TsabT%2Bt4U0nKTMld0OPU7cty4vdrqF%2BjQfG0YSyAWr0mjlusPMnb7BbXF%2BOG8B6V1834k53VRiZVUN3c%2BG66ruPLrPCT2Rm1ypYol9S1hqwAOls26MR4Tm9oFjQXmF%2FxuRJHhLPrO%2F05q3ssPZHDFl4v47O9rVhQIp3QnZJ67ZvmkHBdAqYMKevKmDrP7CQyjWQJm%2Fde22BThcC06Tc39sOF26kNp3arDF2cMcUERK%2B8xCU7H368nQ61TLoTynkLSD3XBuzFb48SlfHTC8r9xM6Do8D9skPMsDlJbWleQJCd242hJRN22IE04vSe58TILhih6tQEZCQvr1peum8zsmK8VDwplQb2Tbq5d5jDrtIS%2BBjqkAep0jAuz43FgxbgCOAoN64uODSyWWXfyZlBme5Ru36ccDhGKnbGfe0ByZpPOF%2Fcp9ABVT%2B1WuORAAAe5mt7lfFO03odWDjoiC9FiJrYI0Ys7cuny2u%2FK4Pq14buCvEmL7aZoKMa2wPYqW8IMvS9y64z%2F%2B2oOggG8iG2wYxMsU0rlKhNbTPg8ZSHl24yQQ%2B7jJHi0mefzau0ct%2FVVFrL23RK00rjf&X-Amz-Signature=12d06dff6a0c8a3a1bcb99d01577c67468fc7388c557ea3679ca5f248a0814a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
