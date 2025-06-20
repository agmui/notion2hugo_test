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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLTJZCN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpZwCgdkAP%2FX%2FGf4JtbgKYz8RuvZXWJWhB5RMl%2FZehHAiAixyPKm42mpi%2BxXQ%2B3aQhZOChvBNxqUE4eklP6FlZjpCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8qtn5Ho7jTBLg8vrKtwDay5G6%2BTk4bVFFhT5mTDcdUNzyymPlmJyPzsYKwtgZXVacmr4ys1Ytbg6CHz7WdkhIJZFpVG9G7nyJLBhHM0%2Ft4HJVHC6Tvr3C8mwzZjWJ0DWy%2FqBHlMjG5sFEpGtlUYdvsFbiPrPzaSQu8BnnXTUbXTocOGAhqe82GKuSRXrkR5bFG7ijh9QX3womUDu73a%2BWc%2BUndekIyzgPHmw5a77YaFyBq9tBDDVlALGxbePELmZ2upqSaa8Zmn8Rfsk%2BO0rGMZTpqQWqLskQMavLQtF7ahzRJEmVu3Z1R50TaSBmgPSSIAmlkeBM2eSEXWjbh9ek9fbLouMGkbKVxZrbvay%2BgZXAAYeJ6XUZzSEnJ1FGafP1vhoy9uQBTRJQgg%2F47tavBeMu%2FeciNBk%2FoN%2FjrAgU7O3RKAofJLuVI%2BlYLuD06%2B4ing19mhtVCIlTpCVPaD3QU9NoVZjqOE3TNUP8IMXxMgmmYHT2N3lkdQkRDlRnzMMatK3moAsIO3caajcQOAHx3xrkqNkkWGe27nQy2ViTFhQTfzGvs3%2F8BzvHszorfHGVsJo3R7Gd9gNbxYm3Ls1Hcei4Fy%2B8508VXvrxioAgBbk9tP%2FQrWDDI9mNvNJzW0vjHFQNNKxfEc4Amgwqb3TwgY6pgH%2Bjv%2BmBNw1rbRdDzTIFi5abgWEVWTRFHl5dPxz6VkKID%2BFryeSFFO%2Bmw%2BWiKWDzX2t638xPt6FZEzvWvApFRriJAGzuoz7tYRmox5%2FGVVwM94qELatRh1XwcClGFDAiShAWnknARBByLJkKuypTHkRoOyuihf%2FVLcFpEoWekuiUOUIdpfh%2Fjc%2FzHnGo3AHjQsxyrl42NNOR9pDOfanoUwcCEdIVajQ&X-Amz-Signature=f1b24287d7020978f638df8b8d95a38a6bb3086c8c53e94df6436088ae7f69c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
