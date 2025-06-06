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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFAYTOED%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCUDUmkgnpKV7LjXgVCVJME5jGdT%2FfGPXU4xavEtnPLnQIhAOo7E86%2BMgT0W1QDXxRXLMu3n8mM%2BEUyFoRVSMZ0BqIrKv8DCFAQABoMNjM3NDIzMTgzODA1IgzNLse2Ir87Iv7CJzIq3AOZhWXFvcx5mWTMS7BLCQQgBqnWB6BoYMrq0Ibz4B6%2BT7P0vOh%2FaE1FY9VOXUpOMIaDHyw0wBQ7DJVeA19HPcizRF4SAlU5y88KXldBz4aljrbDIzTChTMnTb1MzbvvplkizDTEqnUtMq0nk8hECvtZjnf4%2F0KwpyEKxJVklceSwRLSEA3KIYZj36Z8%2BVM4O77EU29ijgaWiLg8GcHrNp%2Bh9krx7XBft2jYRMa5l%2B37A1U74TRWbagbRMm1o9Kx8XxeTzvlJK5pQnN4CmnFMHkeRTuRRt52uRqzxtYyJ78LobGgYF11%2FaB6lJAzEl%2F806M0%2FKykhxzYUIuIPgY9D4tcYtMr%2BA%2FzBH%2F8%2Fm6qJ0qDdpo73UzyJzgTrPgsMHd2OhuWi7MvxF8M8J8M327RS2TPL%2FfBZ1xEgEHhnoIxXissYcfrncRQ6FK2netY5Sh43Tu0CbgPlwA9vYzQh9JTYLndtVCeYFhgflOG0oZxgRiZRSIWxakk9ZRl%2BnZj0xmmwTQ1cgQ8tWMaQ3UWha3tL49DpzbvvEfOWNu0eRLbWyaUcdYhimiFsHP3swcv62FjLyvIShFSrDGpS4aDyjzBfekLLDC24s4A3A1TC4VGmJ%2FzIu1iQhNdsBXqZrCuKDCItIjCBjqkAZybshUl3vYNiN%2BuC2ZXX72jsm4uoaON1vVH6keK200cAQ%2BeOoOU4iQp2qGmhG2uSKki0%2BSfBzIQ3AsiQx7Rb7K7PCYPXeycoGjjvQBYPfYzoC83G7vAly7xYmBOElG1soD8kqzNKcHsFCdud35UiWNgT7rOyR5DreHxnobl3TNJOfNZ84f07pta%2BOmEFCuJb7Z7kvdUjD33KWIhVvM1TZV%2BqVqp&X-Amz-Signature=84243bdbff82532f953307d29be2c39604563f134264424128206b50fd3e3000&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
