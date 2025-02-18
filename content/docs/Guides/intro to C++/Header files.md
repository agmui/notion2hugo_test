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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCT6DIN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBDLyH%2BTeN9AecgR6MW%2BjHIV%2BoILDlQdT2qa9tN48slfAiBto5C9zEjFHeI7AcS3PXY%2B8l7G5WRk%2Fnvq1rijZiJpHiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEjRsvoGC5eDyFQUBKtwDJCb9jr6LOnG%2BOjVOgK39ROfdJCUwOBiRHCjuSw74VOQJ%2FcVdsPwDEP3WcbiOuwaOFVHvgfVTFXH2JYSi58y0xTASvdDpE580oq6EfFY5ZMgZvg4GeQp%2FP7kPjUl%2FMKplhfe%2BeelhA%2BdbhKlnMYLUwt2Fj95RmUyAYAcrM%2BJk1e3%2BBcO%2F9BQDH2GwmUx5ddVKOjLFaGp%2Bs%2BX2cj7DZBImjyf7ujDy6EHlSZ76weUHNa%2FTBcsp8QxaqnbIVSMkqgEjlehGHwkYL%2FPw%2Ft0rQGtXfiIckik4EmmSyAdqGsn4hKo1RdzD4q%2F77GC66rjPzOtuz0hXGJEygUKbfKmeRytpaEaXEgBkU9FPSpB6CkDkNuFpHRc6kUbg31%2FwXCgbiyorjiI%2BuD25HN3Bmm2yzY%2B%2FrEu9M5LRNO2jINKEJJ4H9PPQJNMhRhOgoXJ9ffIH1dT%2BDKq2s9lQtLqhKQk%2Bl6POJRTpXZE0gBZx9YWhs4%2FMYg8%2BiGuqVNPnZj%2FpLRD4rfSQg6dHLk%2BM4bNQlfpOq4mnUZuy4b7XjgP4%2BhduTOgLLGO4pLmg1FT8B1nA%2F9zw5cebc7wcTJ98KhpB34wqj1kgPM%2F08%2F%2BH1PzqMwsj3u7bqPG%2FlLZ%2FyOIAtIP8Tj4wyqLRvQY6pgHPsj5EpkZU8DHVK1y6KEEDI2j7OF%2FvAN1BbdovZnD3Y9UYnbohLqnXRYgCYWQ5MMZiwLk0HxK1gmCeQXj3fb9NM7qwCjjsBBGej92BHDdio%2B1poibjmEBQKxkfsz1cbZFxo7MvKPG648V%2FkBpykcx06u%2BA6AV1ueNSvvPmiTgQvdzR6rsVNbQ99x6hbzJNFLh6dbpirNQmpz4IDj2pSC%2BXD2Bhb5CM&X-Amz-Signature=2b2631490837c752271136474dabc81622425b0da2b235ff6c54b243f496bfff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
