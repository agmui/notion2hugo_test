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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG2AQVF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCQANrc%2BAaHgedftIDbOXDLUm3u%2F1x2fuoQ6S3M5j5wsQIhAJChCOhINuK%2FWbYcxUYNccRWR1l1VeLWkDWd6t8Q3982KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE2ltbKud4kwCq0jwq3APTCEJmC%2F4PRnz%2BlevHLIYqGlmScH4WMn42pZ4dhr%2BRNL2xlqqByeGGCYZh1HpqiS8EtHZxXRyDMYNh%2F5n9UifYBPAyTtq18znzzTV%2F7W0mGW%2BTc3LNTh2gVADT1dX9AJ9%2B%2FeLYWf%2F8x%2FSif8y6bgUjVGT322QoKJcRrTHEoHlbCNt9jvGjGcxIvzVQkgEXOSR40%2BUpYS%2F4UKtXAJkr78cyoFaDveIC9iE%2FQ8fGvmeevcu%2BV6USo7XjU5OxbRNbKPNJM%2B74xwKGflc9SpzPMbJp%2ByZvDqOhUMLyowdcGzugmvenGLPLq6%2FbHBgqORno2tjaHNNz9IebhiepPZgvtmYKi9lc%2BXAXIZsgZ9pzFkx8E1AGqEQX%2BYDiTFqgyZudbzKD3%2B1xtrgq9DMg55g8rFNCVPJ7EU%2BZvKZEeZOzD5t%2BDFyNSrLR8R5smXVP7sMg4jNI2tuYdLGatiJBCsilxj63%2BfjTumHDoVryUFPPQziXqhVi2kSZsRLW%2FvvyRuCAhaTObfbEdGdyg2yPGIJ9ropAJDOy4RiDxH4RWQhl%2F90nRjvW%2ByaSQWb3dyf1KcWWVNVh2ww1ww33K4oiar88hZLPkkbIBnFuhMpWQrFJELysS9f9RSDOxO%2BLBiaquzCdyKfCBjqkAdoDDWBuC4N%2FYdlZ%2B1LJ2SyhZE81AlVT7Uk8DNC89Rk2QaNw%2FMULCnQRUEbyzJZvr2OoZEEjnlQWjc5IaFLMRkNjCMGMw3BakI3iMB0sNaah434BTA%2FXThQMzYXh615Ois3Ygg8jE9frQqSO7XGa%2F%2BcJalY5S2lYaaPSqIqBHYUakKYxB8fpvL%2Bq%2F%2Fkf5ZIh2X9UehxVihb9ZQhFOBM%2BVtCUlBPo&X-Amz-Signature=ea7db1c83c8550dcc4064baefc8a14b40af3934aa4de964ee8f9d83f5696fdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
