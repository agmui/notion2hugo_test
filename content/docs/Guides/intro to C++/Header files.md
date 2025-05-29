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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NJTCH7%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfu6eqhzDSUcgeyWJ4TgEVuhyINmBRtSgq%2FUjCbZkEagIgHlTHXr26UdQ%2FyGFc3WE9fiFcCcA94xOdQX5VXNbQRU0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJoNCfOhkZ59NN2S9ircA%2BSMOibZuPbT%2FN2zRpZIRty0JRo6sTfp5DpbUIHbeX050vl7pJfT%2Ffh%2BzWXRu46GSvOl5Mpt31dlr9puULJG6vkHtj2jY%2BV96pSq%2FRdLiu2DFBv97hcJDsjB9v02FY7N4aitwb2q2fZPtxP%2Buo8RonsLHI6YnN3g3Q6lrhNIBiwrgZzbI3BI4D8JzorNsHuBOMKkxAjnv7HfE0lvMkBQkzyApprMLdrLGMJGKcukBeRg%2BWjUmBflz4CwINM2xK%2BLtMEG0MOQVOQ5uiVASNpVyi7Tg2K%2FMGfswAbfne0Yv0UUEF6NLiRAcHO%2BIEtoM0piSIM1WFRkimfYb2P%2FJXgeiUH9Mka289SsltZHMdAz%2BlwIuw9oHVzcPWkfA%2Bv8RFwVLEe9X%2FwbStB0JnRMppMVF7NsEAcni2lWmU7iIhzBpzF2nXluAzoGDzcsUcjdNlhGduNYWpwCF%2FDzVyEVyIwnIDTHcfAV7qnU8MU5WRHLnTXUWn6EuKanSPY4RMOYAa9%2BzOAZHScwFBk6Fvrr4OVRmtwk3N7Bf5fmifZ2WKxHqc%2FsrE3KpSzN9i7Zyrgh%2FogAcTsk52Ns7QfRTazRgsBGoy67AYPDFBhV0BgkqAhA5ZXOxMVi%2FnhFXrDpi0%2BjMLzb4MEGOqUBIZQ1XW0R4n5kLOcwvGM99ehJBVhUlEht1PAe2EHRhbMLfPxcfGRZGVK8z7ZOkk22GaTjIMeQSN7dZAfwkxDOpgbcD2oNC%2FtqgStrXVEhwnXfqg0EToFJIS47B%2BxuIR9VXrVWJrB6QHs09hgN%2BCp3MCcWS%2FEOEernqI9bqdY7Ezf2SlqQZ7kfDaNE11tMBqSzbKsYnqIhTehx7bzDsi9gF0LqFrGV&X-Amz-Signature=ef3089900b5f15b39c58ea8924fb58ab9f49e8aa9a72be01b62cdc0d0da0b583&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
