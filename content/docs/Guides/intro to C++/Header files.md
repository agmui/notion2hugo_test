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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THC23O5K%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD456%2Bs%2BSYzcOPC741rMe2ydJmUuN3R6zK%2FV6l0vmNIyQIgKRUFtYhEpN2chLbllri4Alp01nKvmhb%2BR2N7DSP6SNIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNMTQFsXOJO1ooDENircA5EqyEvtvt1Fe%2FPxGxiz4bFGDmejRaYhSxAw3AjKsZ21O2tJ8r36Fa4Z0DTSkqouKndf81qWATjscJ6J79D9MnapKXh%2BKf8y9ApOwFidRJxv6nUeJYggQVDZR2fDWoqwADJX9WD6ohHaVVA%2BK2ugBbJNLCJoTnJVObQUryumOsK9DWP%2Bk2Bubcxa84aRvfLafsNhrKy%2Fvt2c%2FHMfxZZpzA%2FkzmfOm9k8KhSiGNlUl6U27qzzJdiBygdwkKryhy4IzQIYPd1HOhAFJXxAjLGRWujUynQqangW1ADfwpgzi4Hzhgn2IVVx4lqueTXlARb0o1V1zk7J6vMtXPU0TNxh1KBSg1L3kEvnEgrn7cPQQ%2FHFbogpGjuUb8zbj5rSC%2BqOIYHVNXmGdKKcev29%2F92JexJPJR1hVVx%2FyglRVur6meT0lH82%2B8L0w%2BjM9BXfOQH3MmrGVZZjjkoHGcxgySauF4srXXuyRVEbrGbOwL1Up1aHn2byVagtaOP%2F%2BBG9zmjfFJrAr9lF4U6mS3xqhyxY2GrEfbjqGMaE0OsaSk7U%2F%2BOrMYi8hEUQP3oeiTpkumd7BgQEUhI8PYoeFoyM1dDxDwl%2FHl7K%2Fa8VXJqUspnbrUTDwnEJsiI38EDsIwFwMJno474GOqUB4If6UyU8MwjzD%2BbCPNuhqClT1WvVrzTZ3nMaO9B9HJLsc%2B9SBMAmfcOGkUejKnncBOtDUy7e5i3YWIL8OAFPX0LVqI99fDMlTNJhiq8mTqhWKt44ku%2FMq%2B6lOrF%2BUD6lSCaqAQWHcSFATyDlsOfQ%2Bb8w7OTzbLcnmaptq0beD3Q8MrCXps1wqtP2ite8rLSHC38QlVFVdWSsCoui5KrKvya2maQY&X-Amz-Signature=ad3b98f24a7460802e0607b210e8d68fc266bdad71de00c5359cf9d8ed73dd0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
