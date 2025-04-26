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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWQXIRA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtY3v1aOoHMvCajcMrRxB5BOaTEfKss5FM0Nw0nslDAiAT5f5HiikNl46koLFCu7%2BCVrn%2Bwcqs2r9XAbc6p39bMSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMcD4JISE3cKaiASfFKtwDpC%2FSDyggk7dSF11zPg8J%2B1d3bSnSWPz1FInriPQ5ms9l2RgM%2BaBXJMpgx9IiaOsIo8mnErtHuUL38AnHlu6MR6%2F77i23YvAg8VDKeBT7j9G2sSOGlMzrPkEX0T3ASdwDsDNxv9gWD4VVJF2OFXMLZky%2FKQg29zwDfIfSW7ylEDWe253LMxtSp6YGjJtFIZmhiIXrwDvKk5%2B1PIvHinhQZ96BQt%2BMs65pBY1%2Bq%2FBTiuugvM5i8n3IemOluF%2B%2BBUvKzjdKfmXCwGA7ZVUAwP2BFiJAYzpC%2BO1YaG4HU9zl6E42cRpCyNp%2Ft2reyl3HdkJ9QBPFBsUJt2I%2BU42ga7KwKQ0jj0DsF84tXYSCPMiSbIiLkpdMjQ66PXWnpWJLtFhOwDJtIL9stTzNQ2UR6%2FQE4ALEG9I4nAYeg%2B62zB5X7tb%2BBzaGXaA1ONaAzUzCc6pVxmOH7UqXp1hvjo0GVqeebyeVW2HeoEE3dhHkuwD%2BdOIZlxKU2CwRXDayWNOyVXuFg%2FV8nk9q%2BhFRrJ62trgqHzWpS0McZdmfa35X8Y%2Bawb1wU6kcjCKLab1DDkwC%2BoJWGOVSrtoqbDnqXcBtoPp5ei1MB2sFvPuqArgihC2Rao%2BMx3%2B%2BpVJ%2FXY6jUpkw1KKzwAY6pgFxu8nWs2AKUCAw8OaqVWVsovnsQ8Jh67COc6chnCTV8qoF%2FnfXLIJt8j0OAsbZBQ6E2OpItC2CZ2AYAcZmwxTmcGPkIgxsEqLN2g0lhRUIQ0E9iYt6wDmzQlH7M6RhPMhqB6zQtzAZujd%2BiT0LVL%2FZPUP16JTPjFZX0n6bA9F4ByWp21CgPYkOIVjowKtzBx94FJfRMKjYLocx9FtOSO2L%2FwmdeyLU&X-Amz-Signature=d8291f4e6b40999316aec55066cc50e9d85dfbd0e584230bee082d6d2e540a13&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
