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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGYCIDDC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDOyftEBs5I2d5rxWKmeFpurlgb1l5dZ3meJMjHWv2MvQIgXL4GOBs%2BSwKnz8Y%2FwhiA10lsXi3SX1JqKo8YOMPAn60qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZJbzeHFWfDKSytYSrcA1ndD%2FIDjzzIi6SpFShKo6M70c9HmIYgzfWi%2BMvazBNMVfXsq2OL7dMd94hUoWWMz%2BC49YJn2gvSZirbMTAB2rscDMuChkkzQIpBaCdG%2BiVUzgIitj2emgYybbkMjlt6V386JtSopoCiJrMBf7u8Ww1Y0MpVLVeDC72tHfw6nNkr%2FDBC8qVQjJih%2BQ1iYsusPgg3A%2B4SGaIBMjMQIsw0vDTKdzVx4IKusckfHwZnNwx%2Bn6%2BnQ2P6GdZ5NFHyhySpBsakYTr%2FwAmQ1cmvwTXqLBin45XY92gtUC9VLqKnlIhPbRjhHF1tOzLEOWnqbZG69KY8a7wVSKLOWimHTt5aQMnpWBhfUH6xMPfg8sXJttTkLuqOotK6ra6PFNnSjgSrCUYVa691S7AcfeejhK%2BFJl7vOXZBUXVpGBOz4GoKfuAEgqtDOJCepBP3vNsLF79dinK1EjNCz4JAeRIhU94xCNGmUyPxzzBOOG%2B5ZO%2FqglUufFSqKBjqmIAXmQu1NSTQeWoNSwmSRj6K8FYmHHEa8lwDeEnYNFlXFH3fIom5WM8uEXHdGgh7JP0xYiLa%2BXI%2BDD5UFrrZ0TZkstlnG3wNYeD03RLOLuQhnk6xlkJHBF8KbIV0VBEbcNxIOcvxMLbm774GOqUBxGJ%2B0K0p4G4f0Sw0zf1GSrQdaeIjxP91U0aRU0KNU8eu2W9%2BfOtHmXQ0%2F%2Fa962%2BSK3F%2BS4W8kqylaHhtqVKyEyUaLHR1KXPXmY41kQ2nv09%2BdWX%2Ff5NN1tFPDy3JvUBu9vcOE2RIiM5No9fPG%2BlLb5mavtmnA0TXQuVp0EK341vE%2FqQ9N8ZDrDbOaGuciX7nte1K7idCeiQ2C7n4CaipNbZZ13qN&X-Amz-Signature=0af61497dac7cc083e63727939e62517917a071d4574c6b9db8d4c979e00a604&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
