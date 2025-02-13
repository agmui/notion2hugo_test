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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM52DG3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7wVsP9YzPqYPyMlp8CSOWkIG7VVLO0OdB3B919K6gsAiEAobMfhzBG00rHcg2Pc03QTR7kJ1p8dDvpCWOEABCpDekqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHsVIfMrnaARatyWircA7zHAi1W%2FtjQHhSbilorXXkCj0d5lezvT3A%2ByzQ5y6wiRAzA004jVbzoaEHDsQ9JZeOkM%2BiOJ5FpBnnMeFcA5J%2Fur5FBRcCzTo8dzisl%2FIKJ8oSHd%2B8bNZgxPbFhWbm8bBfZfoxibWzTCmLx%2FRBqEkHOZVMQz7wvS5ns2KThQjsbjzrjovxtrf77oAXNHk%2F6hxMtMfeZb07Q%2Fl%2BQ%2FCL0fTuK6OvvLjSC0tbLqg5fe5Fyu2GSxpobRrP0Gd%2BA08BWGLvyajhS66Mb9y5m746iiG05TEyLR%2FXSgj%2BzwqqWJpLm2phvAxGNzF76Y1IWLpZIJ7nfxhjpJA36C2iZ7JcpMZi2VfRGtinuuvYeL3h%2BJl9ziciPbd5S0OJfRjc3epMU3lWpRllBxBZvg9ox5jzMF1pxk%2FVKtFVra%2Fhyvl7cfGZDWJIdQzQYAw5qZEJEKCwiH34qbwcj7t5fFVV2HfH%2Fzap9JZ2%2BexmHaSWzn5UfmrG7m8pXsM0z72HxTEh3rLn4V1JBYvdwVU2mAesA9UDkulhDw9mQ43jqS%2BhSSG9iNiVecGRAiCfxDvayTLR6VbXmAtQs5wFzGraG1aEd05fkRmrjF0V9nrpN%2FsMQFpqncUQ6dHiEkiSZoEO%2FzvdqMNnhtL0GOqUB%2F5j9vzsKVPTs4wmnJBYGboRKa%2BRJVVVFUjpk3wYfDNZj689fgGqrEOoZs6ZUYlTOq14z4dvJbTWxHpigXK53ojSIqhBksI1tDQtkHKzIfzQncdCt70tca1tpvC7pBVlF3SlfAnETYAEqWdpasbPsCBZ3CjHV9oHOc19B6q0catjtyXpn0lYDvciuTNMxz3LplYKFHI8q%2BQW0e9FZ%2BKpVQrXOP6Xb&X-Amz-Signature=24d954a88b5cee2bc4d0b949fcdace75e69150a99d3b8ea0354d6067b13e4828&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
