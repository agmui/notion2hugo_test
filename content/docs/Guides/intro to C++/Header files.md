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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624EZTA25%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcBTApoFiBTgcQaNC6i9lu%2FIdNIx99LjbtbYT9CMkW5AiEA24%2FSG%2F1MGTziPLlDwKCDFyAvGzdToSaxHSqkjM%2B5EeQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDM4Sk6ayB7XVfWIi8ircAwbgnqYTAouCiafi%2FEBhwkoqRmVQWLH%2BV15eHqwA7dQBaJ0Oj4WNVLb%2FIsOxH7PvG%2FdkTUgTjzMp2X%2BHpmj%2Ba6zMh2AVhIF%2FS8zm%2FTh1waYUdfpHGlyucJQh91pII2N%2Bq2WKVoaQNmP91UP4wjbYrIqANYXl2CRnx9acDnH9lIzMOKL561jlNqTvBZ%2BAOUQToiesO%2BG20VwgaaKynmHm03GOZ%2F1A8R209whDKjyImlC8%2B7ZBEWFe9AWb4O%2BKzft2aftWJjIktyFfAmJ654aVOisVOs2t2OKW9fvJWFRUco5GCK6xA1Q2S9XRNut6fTIRBF1nbwDfUE%2BSjJJpTVIsroTm%2BMnEjH3KtI7WUEpGCcMkdX3%2Fz%2Fb6PojgGy5%2FhyC02%2FFEzWA7QgHgwLwKrje3hSQ32PeSwXAlaUxuHy2csPS1eV1dL4psA%2F2CSHVLMkt22jb2Ne4v%2FL2xq36cuId4%2BIH2wXwN5GI%2Fy9gJ%2BmBZinMd4ohoszl1aBj4qsSjnqMMlbA0xm82R1Z%2BHdhclZy9zRHeSNjymKFzwxLT%2BiFRSovjhmWP%2F%2B1%2FtCjeaJ33tWv6uM%2FtvX2QdpEgvVtHDuuE7ZU9DfrktD2FpstETpOcwyelHUhnAu7PLX48gEqLMNL6j78GOqUBhRjJmpJmRFhoNYUWabqcIsF7MHw3VJ5MrnhHkCARW5dppsQjhPNg1%2BhJlq%2BxIcD0T4dcQPjfvntrrGa%2BnQvOGImoCKDUy2KjNSevGPGVHRtjUK%2B9qbt1d%2BRMbnWDmPwI%2F%2BD8Xsv2kljP3hUB83vObT%2B6AoJzVjdSgZZvHNkkuXBWzDZ0%2Fl87ZrZWptWvuSpBqBKsCCBwxbbQ2n64Xm7SYcRQlBYt&X-Amz-Signature=52df9554bb5dff5c0839e63377e13380f471772488b424a9e3489345475aced3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
