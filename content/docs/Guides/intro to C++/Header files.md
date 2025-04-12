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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFFGEUP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDMQT95jb4Mp8Of7PVZSeG57Z8SRhmYBcCehpeu6VpXqgIgeSpJSXl1NproPCwagmypVnUiAV2Oe33XHFFdEq6Py5EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw5EcpqbiLEk21vvSrcAyTST%2BhM1WhnvGnNv6kwsg2GQdKxERZbn%2BywA7dvtM287Kda1Sfpa5enzx%2BBpV830LHa2DHaN%2BTuL5ytiHcESyMdH4AKogWENsHigsLxbK9vW3U6gluhLPGcPnmLW%2Ba3r2ab6SAoxDOLBsTCwFN1NuU6IfZtC5HTZEdKY2MhdLtmTyg3Sx2VDpZzfvgL3Omuwmy0DHKvP60XwVSZt3micSFGPTJeRAKHE%2BoipXHDdxXO%2FOQzXwIdr%2F9nyfcxwmJWAA2o%2FaMOET0YuKXDMcpPWvA9lgftU0tt5HqZYyTEInBEo4%2FUTZWwKQta1AXh6R9H16UMqfqjdeVOd4HSRe8mLumizBALS7s3%2FEuhZ8OJzaNhUz%2FPhfhPMtdM%2BCKVtF9MJHT8ZzWHfEovWWaKEI62Dufe8BQ3vUe%2BQkThZguYz6KzH5kX%2F96qRKiML8mR1rZA4RChAuoa69dZ5CI6NxbWo1DLeQxqnuunCFgKsNhPjviKe%2BwyomxyxXuGHXy9zpwV3ZDwhWlwwjhkl9rzV9y0RoKrfDR3TLSZajYAeyEALccYgjUW%2FgWcs8iI%2FKdrVmNWGWwT7zMiyPwIrchYamgY857pJN5gwL6kRUES1SwYE6aJ7CtIUHpDqqAvZoZkMMr56r8GOqUBCUk9WCvhRIstk8tw6hT9OzwlDCUTMeRgfbu%2FIE9lFJwZR36Hd8g0uqdduNXZGWT7HYHgF4iQvzDfkOZpGrEb%2FgUOqg2iVThNNiru5AL9jzWYXdFKePiFiE60DzP%2Bl3928FDOr%2BaCJe%2FHYDiL0En%2BhqqUjm1GSsB%2Bte0nYAT5dYJ%2FJUg9EExVp21eutysS5juSFcIfsCoKCPDzgAjNixqq1IGvKOf&X-Amz-Signature=ca401fb9ef7b1ce78de0d6590268e7005fbb5e535f51e781a751d4c357fa874c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
