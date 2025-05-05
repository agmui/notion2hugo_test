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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWP7IXJY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxWBLZGE5Nf%2FzkyL2%2Fl%2Be9pX%2FwGMak7IQuI%2FAEpYHGTQIgYhdQ8N2TuVEheiva9vJGIWm6N%2FX4NvhMFpR7kVM7YUwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJyCdMPVcFceJg9KcyrcA5ROWr%2BhLttCQvUc%2FTWN6GruQLPZQZ%2BV3wt64kP99mofmKqL%2F6hCsWA9Y4bqJTxHXC61dRjY4GLCG%2FjfvtgAIvB8a2OXA7UpuqDv6nlOET27aNaD9bXHxxf1Dhc%2B7tk%2BoIXkaPd0HZtXVsBgztd8pc%2FgWKwHmU8TI%2BW9EiqzUff7En2ZExtimHPhmDrgD7I%2BB9XQMjUIJZv1p2yV0CphfoFYn7UJCZYN9wxYar3lEgGdxfN3E9J3aDdBtqZevHBt3ftkQJYOEM5pGaIhYlH8MIwAnzPhQiRLYva29TenymZM7O6MQcEG%2Fmyy8Nz6wtk9p2umwqP6upjEskhumrPvsPGVL3r0U%2Fy9kaqJ8joyHXKdot2BinkOA%2BIEbi6nBmC1ZgyT1zT8zzE9HQ2HsYEZm5IIEYlRO4OniinCDv6w%2BosQig4SJzTKj8%2FlOP%2BIzGrVtfkoZRqm8Ord0xW15T%2Bacdn7ydx7Fg1S5HKRljxxnFAGHaD4DlYfYj2xgRtMCdAoHIL7NUqLqsS1hdnZUTIMAKXrjKcrCxZA4PQmI3csXkYreYT75MhfjsXoXW7SwzRVK8I8cBQYMC08YuwgHQwtCkZy8%2FP22a0jXDKZqHd%2BG3p2DqeCNSejgnhiuUKEMKey5MAGOqUBCf2dWyOQOAS57H4K%2FP4p4%2Bl%2BrOjYa%2BO0IHmRk%2ByNeHNDYdrhrF8h%2Fl4VbJ7qCs7Iyfsa3K%2BcP%2F4AW2ZmvJ8d1mTzHfFZwPAG7mkLD86GIwvV2oR1HUX2adP80fM0oIHjfq2ReUiO%2BiH5SIwZr2x65aVNYyR4aWTNCVIe5Q%2BB5%2FjBbMEyGbGIYHwB2gREc4CaufvWEbaDa26P7HduE9UAFEur0qPB&X-Amz-Signature=7d711287c094e62f10b9e3a2aef747df603938834efaeba533cc3fae3ab7cecf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
