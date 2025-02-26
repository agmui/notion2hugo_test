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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSNWIZH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIB2M18XWPHniUX5Nl2CiVSHgP%2BhD8xi814VJivGstQjBAiEAiARvqN%2FpLqAup%2BABzVedbLvW2lFCmHu%2F5RJq215j%2BcQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLEicmZGIx92PV%2B2HSrcAzYGNDjf%2FtHrKBO4gZixfQStsrEj2YuUOXAg0TMWU6ruNTHMt1EDr%2B%2FHyK0w%2BwMszRMzzwKYDiJqIu7NZOs2nX5Y8DbIdOAnWoGa6wuruYZB6ifJaG%2B%2BhmCmctS0sgDuaIN7nqou1l5BXleXLWRwYuV4NRZCuZSUsRMogfAuy6QTFjBG5b0EnW1zrZeVIzGbtjYHZfsNLFDmoEMJKppiYh855dQeDPYkGX7BbZ3yja3mcott%2B0iEOBkOsK46RhQ4PkOEVm%2F1aR2rDFHX7vooBJpp8S5RSj42RJCXuRaXj1oFFymtQRH0F0Mpvbb3r%2F%2BjqbwicHOEVeIdpngEyO2MAiTYxX7A6zMM%2Bgvnh5mgfkLbW2I311W4%2BWMoHV2SXOGpNZ8tqfNblzfQNBWJsl4%2FeFEMPnmZWkCOnWh9MxsCRrqbkv8jA1VX%2BRy5mmUkPAK52BRpAqIMLQBebzpwHaa8c4E6mOHgiJ0D5AMqVpbjxOVUpBJ%2B5g7jSdkBzZwKpFygyHYB6DAEFmpruAzursJJJKQQUil0n7aB%2BYv0G9M2fo7OIjg8r4mnnpiHyhHm3jpg0khCh6OjYDLedZ9C0DJQTuPUBU2l8H2OFp3Kj65HpDOTVn0rt9kJqc1sMfFGMPiA%2B70GOqUBpGQJF%2FNTbE5UJi8y6l7NtWjxpZB87z0rCQbwm4%2BGx82xnLBRfPN1xrS63mdbMkkvu0f2EV6FblWKKHnSprGQHfYghDfvXkvZPXHDqzb1r4fjaxwPjU9Z7JMcHwf4Hf2SZWMKah7oNa747zyHqmg7VeMG8NcVGLobztbtn8HMwV0BK5gL8RU4xOUuqB6c1dc4JpC1%2B57aNXQpASRqarroLe5kgvUO&X-Amz-Signature=4555fb87d61815e07e9f9e36b93a00db1d06259715c901486792ee909334b715&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
