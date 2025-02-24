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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7MNW553%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIYOs2MzS6NkWhBheBaC26zt9gKpyqCWnjAmarbKBt%2FwIhANQtuyed2uGxqWqWHRxs8hz7nKueUV9QDXbABp8aDM3YKv8DCCoQABoMNjM3NDIzMTgzODA1IgxK94Ml7Cftn3XaEqoq3AMG5K4EPiFOlXt%2Bjini6plp9p3SguffIrHa%2FIyjj1E6fPXilzolQ%2BjLUa694c%2B8ktU6OEK16nq1LU%2BI9PVVrGblsaP9nI6i3nMxh76jmyQ5fvV%2FLt0TTZZvaVa%2BltL%2BTKdAh7lbYOdPPEKUEdjMX1Yfo46HdRCCXGiACzkxg74sP12qpmdgzxHDZPcu3z%2FSuQnCDna5910XjqLjtAC7UF8%2Fnt1AS2gaRMjh3UO8U516CkuC2bOnBSyBnYM3UPbdhwiMJocgYEVzKOXYmc2quHXEN47uAa4nC7mtS5xxJonLbEl%2Fkv500iGhKtC8Ci83l9NH%2FvNfxLUujT4DVj74XoBhfJypjWCah8mKoHFfl5AcfP1yDRq4yZha6p%2BmG2HhIG5NVtoYZFLMoOgcFzthahiCEANGYr3FaQgzCfJWWwK%2F3rUzWPUh9joDgg1Tdboh9yMFIC80x9udYgbAqK27eBURrUzPif7ernOhNBUKVSIxGT1Uf%2BzAx9VbYVksAwYB6PfUbgpCixPG75nZt9%2FuONbFgjEO7kjG4nuKce6xCZdKE%2FLMc1kGNch80NDnqOBKlnhdaVyn5jYTQSVrP%2F05eHzffIMLVGhKzcBLRtoA7jAhGGSx1iB4lPHcxpXbGjCO7PC9BjqkAWP9gYtA42dx8Tx%2BqsCNZerl6Ddcn1xKf9Hli2zL6BlTp36OplJw59u3iLU7Tr3eGApFhlE12zWTuBoEfnN7TzXSS%2B8BlsZy%2FQuBKREq%2BxuIi1DwyCl3YZhOwhjobaaze1BmVsl0AtBfVj9HpA37SllcJi%2F%2FCTFojoc4OtT%2BhpGaUuHNtlCx8mtWFUEIuNDkxlAWJWsIoRG8F%2FNUkdKiCMuXkiao&X-Amz-Signature=3ebb5c25b861d7075160e13b56209d32c74508f696e2e80706b6c8dd81380fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
