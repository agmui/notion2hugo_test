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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUOBIET%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlbh6lh7N5AeIWVgYIBsVHKuR7bGDzEsM1TNoeRZcUgIgDjbbn%2F9oQPh227AT4bPab3OJ8A%2Fx%2F0%2BJT9Xh33kjHBUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKqB%2BnIsWkydvglmSrcA3urH4XVTvPOUL443M7Ha0YVLy8oj5YMvWwTq5WlbDs0uXLcEOTKiuU%2BdIad6VX6LHJA3k6jOtfIngaA3OTpKH1Xg7n1zjKYM1CzJl%2FRqglSUz9fBCiQhvcm%2BZY8cCaUyXQuThlJumK3Ta7MuQj6RqB50l0ZLDBrElddR5qaNXw1RLEPvc0FXysruMxmwjVP9KSegdiFa%2BhIOF5fPz5d5xvOVIDuVeqoafPbZEsXBYIbbbNpaBaWajSybSzeIwYdkZt49FIkrktnY7ABV9XOZbibNOc6I09g4hwrJ%2FklBfVcEStC0B2BXHI7NY%2BBMFm8ArEf%2Bx3Jm9%2BkTf%2Btd6f6%2BWCMOCJDIYuMc0%2Bz8ftw3bQOtBazoNGDYgyHwCZZryNpypV6hTjHs0UVOeQtqra2yWMJv%2FpwtL0iHWCPk0ekVMvLSOJ7Y2uyYc8c%2FdgRVNEdt6LnNSJIyD2tcJbh3JVHC%2F0xLQkXKs4wC5CJphY4X3YAIGYVo7DFkQiSYRL%2BMILs9k%2FbEkrDBzgbu8yHTIL2wvS7JT0%2FiUcA%2Fk089RbL8K1wjkt7YmqEqr3o8sl8bbazyO9kzmE1hRkDGEfRBfF%2F6l138Y1kXOx14TMw3otvA8U%2BK6udvaPQT01qnKQoMLWdksMGOqUBlRIbdllJEooWqwivMr4273IopcjtWyCcI8IXVDc4JkBruTXcSOIC2ZaE6Ca5vwgncZociMrQFYo5LIeGGr3xGb2hoFXszm9qSiX%2B0T4bQZGt7wil27HdUFt9m0plBQwsIBem5VP0l7lsBlA9M45WlSTSSYq%2F3OegOs2jjjtyHsVhyfccy1kZ2w9ay8GPsNrtyIG6f8zyI1kB%2B8XXRfT%2FMEff8Cf5&X-Amz-Signature=de8534931af5f7b89e74db58c9838f01d1d9dd9f3c1f910d2834e506f0fb452e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
