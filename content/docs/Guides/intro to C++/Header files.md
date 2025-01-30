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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3JBWLCJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fkh%2FY%2Fl6gwv0%2FwEzc%2FFiNPsuTW4lsojw2Rsk8HOS7hAiATiPAbnskOsYVqyotr4OM3OCJ%2FX8dFdz9PfDP0bKmMWCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMijmSt4HDXiFIsQe%2BKtwDau7EFRJgNU%2BaFNcX%2BU1qtwVSMgh6ZnKrvn%2F4dyibYQj7nhP3%2Fcapeji5kCMx64oHSElkXvNCYGi4mEy2qom99QhGNBiLXH0MIKwR505pcgbD2IqS89aegpg2V8OxwVKqw60f3aLCoccLd1OB1MssQp%2F7kksRQIEIrA%2FlH2zFCtzDkYDfBsmlSONnbs%2FK4v2zVO1CDHg%2BoNixunaUaz9evnhmDivjip%2FdBdkBVFqWzO7QZQhA2pGxvEOudQ92QoQkhDqh59U1kwB9EXXSPvmpXvsKw8zyXQ2yN6%2FrrAd2eJDP8rV7oofOpwAREXW3q6FLQK5T5QQR62CjAoffcCbTHj5PohtKijoyZvTYbuIMDIvsNLC471SZ0kZa7wTvx5lqkVKRkeFBmupXag8AdXQRFwBFt8HD8q4iaTZxaqk146aOPqozEy5kZnXsXlnmlMi23YPkN7DIVejMoTDeWXx9uZs0E%2FMGJOLEgcB1yjGLeKl%2BSLR7xeBRl%2FHmZI%2FxR6wZSc28hCx15JMuvCgCE8ktI8SoaxPc6bK%2FlBRbewSn2%2F5K6PZvdTybPFohXhtZ5rr%2BbiJxkt%2BrHKMDYlYQzqTKxvkSxvRogrMRfeO1qhvvsp%2BHMNHFJK1WdsI0vGwwtpjuvAY6pgH3P%2F2pyteLXvIOeYdzB3UUA84B8dbsIcEWfJcF%2FKly19QqQtl5hfqd3bJCUPOd%2Fv6LO%2FAMn8UgHiyZSSZdwd5idSPwO0g%2BdIXxhKxusBvYnTGsQgms0bnLOQPuFsqWrk84oGWvfOu%2FMVFII5OM1ja0k8ErizVIopRdsxQ%2FMGi6u9BYZMsGWP%2FQGSWsKJUAAWLgPjYP1PxZXnG4GdyS4Hq8ihoa6RCy&X-Amz-Signature=5a2a06b1fbb68355cde5c80f15f8e538259ee50b9200086b8cfba08b097553d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
