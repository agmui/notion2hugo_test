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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4Q2JG73%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCVYspCfFvUtb0pbOoFk%2FmZZZYiwvu58j0UkXO97M6QUwIgF3IVSXw5RGniYlrpsnaUININSho0GJ1GFz%2BgCDTKmrIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgss1bzwNITauI2NCrcA2D8eR14mR6oYh%2F4M%2B8xPOE%2BudbBWyl0nM4u1JMObHabGMaLCWjceYD1%2FgWYayg6ULkL%2B6A6kqCwD1aY9OLi%2BgjA0OKQWNbhfbu4nYWymVmldcpY1Yozba40Wt7RQqWUVHAGIzgXU3PeiAWIvhGSndEkP32OrIdPxBzbSrC2%2B%2FJwkpkxyT%2F70NcD33IM%2BHJY7auY1S%2F4Gpolqe%2FSUvTL%2FwDCPNAndYXkzaYwzNWo1i7a2tXfiqhAKPzljqgGZY7fR%2BREO6jokJtU1HKR3OUjVYEORKm9QczmNXO30UdumX5fNmfSyTyFGxISDe3tJmbbIxAoqLrcQiyFD2OITGtwv13UO8tqKyo3DQ%2B2LUVX4YemlLvPKEiUY33M2ikYNcwxt64HDToAql7S9KjTAbf2DMYX%2BwTH3ksZYzfpvpMezZvpQaCt0vFNnP3NQT3lBSznivm8uusAk7rK%2Fctovi%2FMqL%2F2FoYsZVeyHReYLzDmKT%2Fx7qveTj90G60hbvuk825S3rsmxHDTi0DScLa8VOyb6fD%2FBigMowUoSZ%2BYc1I1nIqCM1%2F493WcS%2BFUFIr3flAP2eVPQO2ounj2G%2BgCWjTCBqYM1Hhw728F936dYaEtCmCG8bu8fg34umTmQwjDMKqzz8QGOqUBOsF8zhGv8k4GIjwXlPMvfCcYWIs7vmw4BpLnL924wpM%2F2jX8tNpVtYk3axauS9NF7xkHugr9EZRzV6VX0u2512k59xnf%2Biaeqfcbw0VRuWGKgVbHc7hugF4kKLsS7Kr%2FQri53CclGfoIhIQEoovDgrZFiLtqHgfyy%2BQRxQbhpDOcZddGv6GQJQ0ZnRoLApEOlJn9grIsuu8tvohf1mVMXGxt%2Fe%2Fw&X-Amz-Signature=ac45eacca44caa731450f489401c2503e1318c96adaa898fcf74fd763391940c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
