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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZCACAIC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAmsV47tR4iaGYB2bqioJTscDsjNvRdKxJYMfHDXCZkgIgQj%2BpMWGUefaFT3KZxXfI1fUsDIXjAGWIFiKAdbA73dYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDM8ZwHrwTrM7WhnslSrcA8LgSO1IEVdKZ0pXzu%2Fr1Li3uWReyq6%2BvhaC6u9%2FxzLaCoOl3y%2Fu328E7swSvtTMYA3h5F2LvRZpq5UFVHHu0jhexN2HT5mJlyU%2FEmevmLfPzLOj40xlX2CKaThW5IETBfm9fMB71V9Lw041MKzrpXVlCK%2F8XCw%2BSWqe2rDNpMCCFen2Mbc73yOOQXbNKX%2FI%2BeAKXOIE0B%2FvonyGhO3AIu7oLhGPfFCjegNQtEXumjgFJyGUSjEJixsAbgxlkkQ6MiJtijUnJrO9gZJWRYud0zzHh0BKXyM4SnxbexpYDAl%2F0my0KB5uqSOqm1WeXpg18Pybfnc99tfhK5hYGCZnKBT4WLYEwgGngoVBfTFNt%2Fcl%2FKTPYTqWbEFedEkYKdYZyA2BwsMXpibZolaERcmwkwQIkyQp8YWvUU6MLUpOvJyqUd%2BA0lN1CsEDUsUE35JjZTvDTUMqaXGMlLnx1kWvorkBG%2BptOqZYDBfDZdk%2F0KNxgSEAVAZfzFQ9FJvuk4I%2F%2FmkjMwm43FdI4EaoK15ymG1pROYqMAsQDpBTwziie6ArMZeOqFe6AySHoZ%2BYV1Bg6itlAzIwHQDwSTAEjAT4SiPWoQZNkmOPUsgnA5S2gqIEavVI2fR9jssI7OLaMN2kzcMGOqUBmopoSzW4A4cTZN%2FDnV6MTCaEF6WlRMQv9zBoZLGQvyta93skJcCzoPROuxJeqkt0pNz2vaYHdBrgOD1VZxE3an%2Bsu%2B7HZsp41v2unQdTCF%2BeszThDJiqyXvAuYN1shGLTyA05eYmagTmB6D%2F3AYU%2BxX7nQteansdj03AYcSuw1e7IEdsH2Jme1nSZIzltwSICVpe5kI1mb97yf4fVXi2qHj3%2BcDf&X-Amz-Signature=5cf296cf50642d69289a1456ec696cf4205c5185f1f6b53ff65e7cac8f2b0c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
