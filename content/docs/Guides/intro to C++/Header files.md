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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E7SSCZG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaGHxih77LT9rSxIu4XKk9k%2BxDYDSXqljaxI5K%2BatH0AiBHi8MKtW3lSi1dpJJBTEuIPj7dk%2F0dW8L1oTnJ9K2KGSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMUiTkavCbBRB%2BwY%2FKtwDy3WxYqKCHW%2BEPIJR85FbnFzEqcvrLXf7Mhn8vwBw34WN4583nTL4FmkgyI1e8LGEIEwDl85nrkDFtKG9Pu3AGHr6GUn3bYqVxwt%2BBakgQv%2ByZd2252%2B3p2QfWTDZzVS5txR5ggWq8qwl%2B6wTn8yZPhnlmbgxB3vb2WVAu75HyYdAokhm0vf9fWC5%2BUl7VezUqK3D%2FSlCXnvwyT1B2OgeTjn623RIBpogplMOvpZZbFnkvahqu3nGTNw0ngo9kS7RaVIYO8vJsgRZ9%2FfIUUe%2B78VaGioIWiRCnzJwhwjrEoQnlwfazycJLnoSBSdh5bI0pAApEVgf3YaPcxRQCLFJ5kPVgZdwYbSH0QA3BQaDLFj2TUBfA6NYJIDhyr%2BFlQB7sgmmbUzOJz6mlUeCJks3bBmOFoUW1MK9zlgHblDvXMxGpK8MdmFcpz7rN2umXVFVu3aJbhkDR6pshDEwuoqlC9HRi6yizl2MAAyFpaEiSqktFrvG2livK9yleaxjEEhGTV1vWp74SzRFqM1jSF13gEVGCZg9EfOlWLzTq1eBtZd1qkeEXOJM%2FKNSwKTGORWqdHOMIRpbPNp%2Bv9rE9RuFsxCJU2kHE04coxJcI0UbjMxm623DF127mbHWfOwwjrP6wwY6pgFfEqEKQgQ77Ci%2FS%2B%2FA6a2GMImu2lyVv9Bc0cLs0DW6RIN8Uut5NhnhI073RbygtR%2F8Y0om6M8kFALh7MdTqo1BDNDRnO2%2FMf5Oj9ujHs81rQTK662047aYFngqXs%2Bt4oIJbAnyAzgsj4xbaEZokqQ%2BYZ%2BRhqVI5%2FrYHzrSQLpW692YDXM66Rnk51ZFINn8Cs06zZiJ%2F0ttQ27%2Fu1Xt1iMi%2Fxv39p06&X-Amz-Signature=29f17f72bca785f4ecd5dcb592e1244b52465988b84501ae331e662d6f0e10bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
