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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIYWC5%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEewPsyIuXG6dr7ye60AzLDah6zf6zCaYOWTmxMzV9GUAiEAnxpEoH%2Fbh2SXj40ku%2BXWy9z1uLMrg7%2BDwDKNuQKXE4Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDpAHhrpW6A7H15SsyrcAyMYx1TtXPedis8jAhk0Aug2Rb8Sc%2BfMsXoig33HKqPJfzpxyUIgtYcS3mNSthQRyBt4tMJHBqZ01%2BoNYMZs87EIsWjHkHeWN%2BejgZ82y%2FlazXf9YSBSmqBIiLc7oyf7S%2B8O3keszMcwqgujmPXihA%2B0MQyDCJA3bzHC6ekNSUQDDJCyTXY9KnYGwQqwC9IyYKSCZ2gBcPvVHn60pd8owQ8kQXJOPx1aM7V1KxiYFkMcUGGLGq3lsQF%2F4TNhs4N6obokRJVS%2B1IoC8w4RWN4A4%2BICP4GVOwf%2BCMTHAuuDstngh0fPZ%2FMQseWp5DlfxfrcSevsAbaH%2BjHvpUGSMEQS%2BeRJRuYvPqWv09YZbYqftOA7s%2B9s%2F7O%2BZwUIS9QGxO2i0TGTMyM5TgBQGCSIVaaFNqiUa9XmRpK%2Fyj8YiJd%2Bq6udLSyvEhQHIV%2BabxA62EiLbXt0w8YFq1Eouen9NC%2B00ZBInZX0LXYt1YaKOnYfWbSY6EkxruUrIOeGhibYJSn1UkAglDEHT5%2BmZR2U2cNzSZ5iZPzExSYTPak7r1i1dsnvC4UQvqanauXocd0Q4VplvgpoTy10bGSbe3iEP4oDVlk2dZoM7W0udlbgReyEHZt0ttYEnKa42imNgHOMOb6lr0GOqUBgqhUQwHqrHGNUkQQ%2FPrMk38aq374q0SuZjoC5EyfGCX0NOrPJrtCX%2FUiQjrW%2FKBAPUS6JGeIWPBtAr%2BO%2F7XfzJJ7OjuxiDOHDzX6bCtiwS7Rfm6%2F7aKLSd8pUO5xk%2BDDjUF%2B%2FKJx4UzCoHWPcA9pegc4xwp3dgjpX%2FNiS2w1N7f5O8U7yAbo5WvQ7OPxr1U%2F25hH%2FKoEHLAgDNh39kXWqK9qwzzj&X-Amz-Signature=697f3ae419f2a9388f36a1e6fdd2593466bd2a8dfa95ca9d240209dc0e42d5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
