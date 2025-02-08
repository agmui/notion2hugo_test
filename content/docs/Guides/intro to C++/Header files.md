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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNUXYPG%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGRYjA7n0xDJEKmnO87MqtMp0wfttGKkFZH95gKYRyCTAiEA4LfjnNMV7zaoEAleTDdjM%2FJOghGYWHMJSCeyTs6jFawqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgGbMBjAhhVyefXWyrcA420hUuh8vzpZqoZ9bbjVZcUS7EmPsy%2B4o0YNPgGOZ2sDSOhY%2B5KMxtOWhASlHyakKvjgcETYpSwu0RrMQgkgbpO%2BG8tgRG%2FqGK8AWnlJyDuDLG5ZDwyB%2BW%2BXcCj1I6GSGR1Vu9FDAWIC3JR%2B%2Fv5UYhKpDyYR83yuWzcJ%2FrTe1SZLQriIyucNHl77EzaBq9Vamz8TUaQXdDk0l%2BDdaSpwBIJz1W%2B9%2BLiBUPLntC%2Fiq1i2Si7Bln0sM%2B%2BBRMp8qXhdbEUCHwA8PI4kMcz06SLM90xKTrZetjzIpVTNRuTjZxB1rIwo4cKhMGtW59XXnoViABeDtcJB%2BYiEYkgziThofcLFC%2BWchivSCiI7kmMgc%2FfHBR8Uu3PCk6ExxOPocOlo3ejJE%2F7oE%2FX1B6KX1lwNIgXvNamGJXPuGpVEhtnmVki%2FJcdaiUHuYzDGLqSMa2OsbzAWpsRfgxf55iGVOPIFt7X4ZXqlYGvYRW7dWjb0DxqbXGfv1EKpqPsL%2FeJBqrTSjIeTsJfhUBHwaNNfj11ppVQuy727OaVe9TDeTsbZu5mXhLMxONsVLjo6m9glcfvy%2FEutZtylJXtTm0f34XZ8%2FwF%2F6xjVZnQ3gXslud2hpff0enZv8hLHEG%2FaKcAMLvgnr0GOqUBNCkLZ3X0prYzw4zFtwfMztwdibZpS13qgkMokvQFWakV%2F53o63zT4TcCJ7CtOQIy5Y8AgrIV9dyYir%2Bzo7uSAdrI4dFsNGXUJVzGCnJBtri9A0dPOOu7odm4R2uUA6UsmXvZjxj5oxKJkmqoQy%2FEOAXFDcc6LibjAvZRYil%2F5xaaru0FN%2B3W1EF89iA7A9V02WVVpn6%2BcvjDXQYX%2BSSaV8jDmNRe&X-Amz-Signature=0cce9a40fcfe39c0b6ef49be06883acdecfb9dc95e9cf16d9d67e90a6d2b23ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
